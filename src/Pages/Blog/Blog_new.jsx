/*****************************************************************
 * Blog_new.jsx  –  KeelWorks “Blogs / Media” page                *
 *  ▸ Newsletter : opens PDF when you click the card              *
 *  ▸ Article    : all posts from blog.keelworks.org              *
 *  ▸ Media      : YouTube rows from Google-Sheet Apps Script     *
 *****************************************************************/
import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { newsLetters } from "./data";

/* ------------- endpoints ------------- */
const WP_BASE =
  "https://blog.keelworks.org/wp-json/wp/v2/posts?_embed"; // we'll add paging
const SHEET_URL =
  "https://script.google.com/macros/s/AKfycbyTqWa2lpBigwckddK4ZpIY-UK1LzjbtrG56D_IWTxRVN9Kd47MkN4YdRjeu52DrYU3TA/exec";

export default function Blog_new() {
  /* ---------- state ---------- */
  const [activeFilter, setActiveFilter] = useState("Article");
  const [activePage,   setActivePage]   = useState(1);

  const [articles, setArticles] = useState([]);
  const [videos,   setVideos]   = useState([]);

  const [loadingA, setLoadingA] = useState(true);
  const [loadingV, setLoadingV] = useState(true);

  /* -------- fetch *all* WordPress posts -------- */
  useEffect(() => {
    (async () => {
      try {
        const PER_PAGE = 100;
        const first = await fetch(`${WP_BASE}&per_page=${PER_PAGE}&page=1`);
        if (!first.ok) throw new Error(first.statusText);

        const totalPages = parseInt(
          first.headers.get("X-WP-TotalPages") || "1",
          10
        );
        let all = await first.json();

        /* remaining pages in parallel */
        const rest = await Promise.all(
          Array.from({ length: totalPages - 1 }, (_, i) =>
            fetch(`${WP_BASE}&per_page=${PER_PAGE}&page=${i + 2}`).then((r) =>
              r.json()
            )
          )
        );
        rest.forEach((chunk) => (all = all.concat(chunk)));

        setArticles(
          all.map((p) => ({
            title: p.title.rendered.replace(/<[^>]+>/g, ""),
            date:  new Date(p.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            }),
            image:
              p._embedded?.["wp:featuredmedia"]?.[0]?.source_url ??
              "https://via.placeholder.com/600x400?text=KeelWorks",
            link:  p.link,           // WordPress permalink
          }))
        );
      } catch (err) {
        console.error("WordPress fetch error:", err);
        setArticles([]);
      } finally {
        setLoadingA(false);
      }
    })();
  }, []);

  /* -------- fetch YouTube rows -------- */
  useEffect(() => {
    fetch(SHEET_URL)
      .then((r) => r.json())
      .then((rows) =>
        setVideos(
          rows
            .filter((r) => r.videoId)
            .map((r) => ({
              ...r,
              date: new Date(r.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              }),
            }))
        )
      )
      .catch((e) => {
        console.error("Sheet fetch error:", e);
        setVideos([]);
      })
      .finally(() => setLoadingV(false));
  }, []);

  /* ---------- pagination ---------- */
  const ITEMS_PER_PAGE = 9;
  const masterList = {
    Newsletter: newsLetters,
    Article:    loadingA ? Array(3).fill({ skeleton: true }) : articles,
    Media:      loadingV ? Array(3).fill({ skeleton: true }) : videos,
  }[activeFilter];

  const totalPages     = Math.max(1, Math.ceil(masterList.length / ITEMS_PER_PAGE));
  const paginatedItems = masterList.slice(
    (activePage - 1) * ITEMS_PER_PAGE,
    activePage * ITEMS_PER_PAGE
  );

  useEffect(() => setActivePage(1), [activeFilter]);

  const open = (url) => window.open(url, "_blank");

  /* ---------- UI ---------- */
  return (
    <div className="w-screen bg-white flex justify-center">
      <div className="w-screen max-w-[3000px] my-[5rem] md:mt-[8rem] flex justify-center">
        <div className="m-[1rem] md:mx-[2rem] [@media(min-width:1100px)]:mx-[8rem] w-screen flex flex-col items-center gap-12">

          {/* header */}
          <header className="w-full md:w-[755px] flex flex-col items-center gap-5 px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Blog</h1>
            <p className="text-center text-sm md:text-lg">
              Discover stories, insights and media from the KeelWorks Foundation.
            </p>
          </header>

          {/* tabs */}
          <nav className="w-full flex justify-center mb-6">
            {["Newsletter", "Article", "Media"].map((t) => (
              <button
                key={t}
                onClick={() => setActiveFilter(t)}
                className={`px-6 py-2 text-sm font-semibold rounded-md transition-all ${
                  activeFilter === t
                    ? "bg-[#DBA300] text-white"
                    : "text-[#646464]"
                }`}
              >
                {t}
              </button>
            ))}
          </nav>

          {/* body */}
          <section className="w-full px-4 md:px-8 lg:px-24 flex flex-col items-center space-y-6">
            <p className="text-[#8995A9] text-sm text-center">
              Showing {masterList.length} {activeFilter}
              {masterList.length !== 1 && "s"}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-[1170px]">
              {/* Newsletter / Article */}
              {activeFilter !== "Media" &&
                paginatedItems.map((item, i) =>
                  item.skeleton ? (
                    <div key={i} className="h-[310px] bg-gray-100 animate-pulse rounded-lg" />
                  ) : (
                    <article
                      key={i}
                      className="bg-white rounded-lg shadow-md overflow-hidden hover:cursor-pointer"
                      onClick={() =>
                        open(item.htmlLink ?? item.pdfFile ?? item.link) /* newsletter vs article */
                      }
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full md:h-[150px] xl:h-[250px] object-cover"
                      />
                      <div className="p-8 flex flex-col items-center gap-3">
                        <h3 className="text-lg font-semibold text-center">
                          {item.title}
                        </h3>
                        <p className="text-xs text-[#8995A9]">{item.date}</p>
                      </div>
                    </article>
                  )
                )}

              {/* Media */}
              {activeFilter === "Media" &&
                paginatedItems.map((vid, i) =>
                  vid.skeleton ? (
                    <div key={i} className="h-[310px] bg-gray-100 animate-pulse rounded-lg" />
                  ) : (
                    <article key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
                      <YouTube
                        videoId={vid.videoId}
                        opts={{
                          width: "100%",
                          height: "200",
                          playerVars: { rel: 0, modestbranding: 1 },
                        }}
                      />
                      <div className="p-5 flex flex-col items-center gap-3">
                        <h3 className="text-lg font-semibold text-center">
                          {vid.title}
                        </h3>
                        <p className="text-xs text-[#8995A9]">{vid.date}</p>
                        <button
                          onClick={() => open(`https://youtu.be/${vid.videoId}`)}
                          className="bg-white border border-[#8995A9] text-[#8995A9] rounded-full px-8 py-2 text-sm font-bold hover:bg-[#DBA300] hover:text-white transition-colors"
                        >
                          Watch on YouTube
                        </button>
                      </div>
                    </article>
                  )
                )}
            </div>
          </section>

          {/* pagination */}
          {totalPages > 1 && (
            <footer className="w-full p-4 flex flex-col items-center space-y-4">
              <div className="flex items-center rounded-lg border">
                <button
                  className="p-3 text-[#637381]"
                  onClick={() => setActivePage((p) => Math.max(p - 1, 1))}
                  disabled={activePage === 1}
                >
                  <FaChevronLeft />
                </button>
                <span className="px-4 py-3 bg-[#FDDE82] text-fontSecondary">
                  {activePage}/{totalPages}
                </span>
                <button
                  className="p-3 text-[#637381]"
                  onClick={() => setActivePage((p) => Math.min(p + 1, totalPages))}
                  disabled={activePage === totalPages}
                >
                  <FaChevronRight />
                </button>
              </div>
            </footer>
          )}
        </div>
      </div>
    </div>
  );
}
