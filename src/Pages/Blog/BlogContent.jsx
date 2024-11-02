import React from "react";
import StudentsWorkTogetherBanner from "../../assets/images/Blogs/Students_Work_Together.png";
import DonateNow from "../../Components/DonateNow/DonateNow";

const popularPosts = [
  {
    id: 1,
    title: "Your Support Makes A Difference",
    image:
      "https://s3-alpha-sig.figma.com/img/580b/816d/3b2108c3ab865027029d73f6443a04d3?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eJpWP66-zmps9URx7WEhPyU855zaqCIfDf0KuccPqlrc0~n79kyNWn8zJ9ACtGnz7GZICcPkNKPhb2VaWocOvdDoUB7AYaS1puKkiEkq0El0mS66ODwQuMYNzjwNFwoOb2exLoLNT0cT7hujg1FeVwuOlJz3A9mymy6VjBRHZc7VuD18qo9PppOPRYb04DD4GNamW~LrCKF4a8ERDlqrkzRhCkiNXG1S4r-OXdRE6cP24-zmWEH2o~1wIUP7Ije9S6S-7SUcULoPnqpXFkdwoIiLXiw0uT9xg2paKQa51iivDr2MFs9rGdwytjnV21uXnAPIpQ2nPmXIMu6aOF2KVA__",
    date: "Dec 20th, 2022",
  },
  {
    id: 2,
    title: "Your Support Makes A Difference",
    image:
      "https://s3-alpha-sig.figma.com/img/580b/816d/3b2108c3ab865027029d73f6443a04d3?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eJpWP66-zmps9URx7WEhPyU855zaqCIfDf0KuccPqlrc0~n79kyNWn8zJ9ACtGnz7GZICcPkNKPhb2VaWocOvdDoUB7AYaS1puKkiEkq0El0mS66ODwQuMYNzjwNFwoOb2exLoLNT0cT7hujg1FeVwuOlJz3A9mymy6VjBRHZc7VuD18qo9PppOPRYb04DD4GNamW~LrCKF4a8ERDlqrkzRhCkiNXG1S4r-OXdRE6cP24-zmWEH2o~1wIUP7Ije9S6S-7SUcULoPnqpXFkdwoIiLXiw0uT9xg2paKQa51iivDr2MFs9rGdwytjnV21uXnAPIpQ2nPmXIMu6aOF2KVA__",
    date: "Dec 20th, 2022",
  },
  {
    id: 3,
    title: "Your Support Makes A Difference",
    image:
      "https://s3-alpha-sig.figma.com/img/580b/816d/3b2108c3ab865027029d73f6443a04d3?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eJpWP66-zmps9URx7WEhPyU855zaqCIfDf0KuccPqlrc0~n79kyNWn8zJ9ACtGnz7GZICcPkNKPhb2VaWocOvdDoUB7AYaS1puKkiEkq0El0mS66ODwQuMYNzjwNFwoOb2exLoLNT0cT7hujg1FeVwuOlJz3A9mymy6VjBRHZc7VuD18qo9PppOPRYb04DD4GNamW~LrCKF4a8ERDlqrkzRhCkiNXG1S4r-OXdRE6cP24-zmWEH2o~1wIUP7Ije9S6S-7SUcULoPnqpXFkdwoIiLXiw0uT9xg2paKQa51iivDr2MFs9rGdwytjnV21uXnAPIpQ2nPmXIMu6aOF2KVA__",
    date: "Dec 20th, 2022",
  },
];

export const BlogContent = () => {
  return (
    <div className="bg-white w-full flex justify-center items-start">
      <div className="flex items-center justify-center flex-col w-full ">
        <div className="relative mb-8 w-full">
          <img
            className="w-full h-full object-cover"
            src={StudentsWorkTogetherBanner}
            alt="Students Work Together Banner"
          />
        </div>

        <div className="flex flex-col justify-center items-center w-full px-4 sm:px-8 lg:px-16">
          <div className="w-full lg:w-2/3">
            <div className="text-4xl font-bold text-gray-900 mb-4 flex flex-col gap-4 text-center sm:text-left">
              <h1>September Spotlight:</h1>
              <h1>Ongoing Projects at KeelWorks</h1>
              <h1>Foundation</h1>
            </div>

            <div className="inline-block bg-primary100 px-3 py-1 my-6">
              <p className="text-fontSecondary m-0">Dec 20, 2022</p>
            </div>

            <div className="">
              <p className="my-6 text-justify">
                Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
                Lorem consectetur adipiscing elit. Lorem ipsum dolor sit amet
                pretium consectetur adipiscing elit. Lorem consectetur
                adipiscing elit. Lorem ipsum dolor sit amet pretium consectetur
                adipiscing elit. Lorem consectetur adipiscing elit. Lorem
                consectetur adipiscing elit. Lorem ipsum dolor sit amet pretium
                consectetur adipiscing elit. Lorem consectetur adipiscing elit.
              </p>

              <div className="text-2xl font-bold text-gray-900 mb-4 flex flex-col gap-1">
                <h2>September Spotlight:</h2>
                <h2>Ongoing Projects at KeelWorks Foundation</h2>
              </div>

              <p className="my-6 text-justify">
                Aliquam nibh sem, gravida eget nisi eget, vestibulum lacinia
                massa. Sed accumsan est lacus, quis placerat arcu laoreet sed.
                Sed ultricies turpis imperdiet ligula lobortis accumsan. Duis at
                placerat diam. Etiam ut sapien id mauris facilisis vestibulum.
                Etiam sollicitudin ipsum et aliquet pharetra. Curabitur vitae
                tellus rhoncus, fringilla est vel, congue lectus. In eget lectus
                at lorem fermentum fringilla sed in tellus. Pellentesque
                pulvinar metus eget urna vehicula, a faucibus purus molestie.
                Nulla hendrerit congue lorem in laoreet. Ut pharetra lacinia
                eros sit amet imperdiet. Sed accumsan lectus sed massa
                ullamcorper, nec volutpat dui volutpat. Duis nibh quam,
                fermentum at mollis non, molestie eget sapien. Phasellus lacus
                enim, convallis ut viverra et, dignissim in nunc. Sed tempor
                metus ipsum, sit amet aliquam elit sollicitudin ac. Suspendisse
                auctor in erat sed congue. Vivamus odio lorem, luctus ut
                ultricies eu, elementum vestibulum ligula. Ut molestie
                ullamcorper vestibulum. Maecenas et congue arcu.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Introduction
              </h3>

              <p className="my-6 text-justify">
                Sed accumsan lectus sed massa ullamcorper, nec volutpat dui
                volutpat. Duis nibh quam, fermentum at mollis non, molestie eget
                sapien. Phasellus lacus enim, convallis ut viverra et, dignissim
                in nunc. Sed tempor metus ipsum, sit amet aliquam elit
                sollicitudin ac. Suspendisse auctor in erat sed congue. Vivamus
                odio lorem, luctus ut ultricies eu, elementum vestibulum ligula.
                Ut molestie ullamcorper vestibulum. Maecenas et congue arcu.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                1-KeelHub Application
              </h3>
              <h4 className="text-lg font-medium mt-4 mb-2 text-fontSecondary">
                Objectives
              </h4>
              <ul className="list-disc pl-5 mb-6">
                <li>
                  Aliquam nibh sem, gravida eget nisi eget, vestibulum lacinia
                  massa.
                </li>
                <li>
                  Aliquam nibh sem, gravida eget nisi eget, vestibulum lacinia
                  massa.
                </li>
                <li>
                  Aliquam nibh sem, gravida eget nisi eget, vestibulum lacinia
                  massa.
                </li>
                <li>
                  Aliquam nibh sem, gravida eget nisi eget, vestibulum lacinia
                  massa.
                </li>
              </ul>
            </div>

            <DonateNow className="my-8" />

            <div className="text-2xl font-bold text-gray-900 mb-4 flex flex-col gap-1 mt-4">
              <h2>September Spotlight:</h2>
              <h2>Ongoing Projects at KeelWorks Foundation</h2>
            </div>

            <p className="my-6 text-justify">
              Sed accumsan lectus sed massa ullamcorper, nec volutpat dui
              volutpat. Duis nibh quam, fermentum at mollis non, molestie eget
              sapien. Phasellus lacus enim, convallis ut viverra et, dignissim
              in nunc. Sed tempor metus ipsum, sit amet aliquam elit
              sollicitudin ac. Suspendisse auctor in erat sed congue. Vivamus
              odio lorem, luctus ut ultricies eu, elementum vestibulum ligula.
              Ut molestie ullamcorper vestibulum. Maecenas et congue arcu.
            </p>

            <div className="flex justify-between items-center mt-12">
              <div className="flex items-center">
                <button
                  className="bg-primary text-white font-bold px-2 py-1 mr-4 rounded flex items-center justify-center"
                  style={{ width: "35px", height: "35px" }}
                >
                  &lt;
                </button>
                <div>
                  <h3 className="text-3xl font-bold">The Last</h3>
                  <p className="text-gray-900 text-xs font-bold">
                    Your Support Makes A
                    <br />
                    Difference
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="mr-4">
                  <h3 className="text-3xl font-bold">The Next</h3>
                  <p className="text-gray-900 text-xs font-bold">
                    Your Support Makes A
                    <br />
                    Difference
                  </p>
                </div>
                <button
                  className="bg-primary text-white font-bold px-2 py-1 rounded flex items-center justify-center"
                  style={{ width: "35px", height: "35px" }}
                >
                  &gt;
                </button>
              </div>
            </div>

            <div className="mt-12 bg-baseWhite rounded-lg py-8 w-full flex flex-col px-4">
              <h2 className="text-2xl font-bold mb-6">Popular Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {popularPosts.map((post) => (
                  <div
                    key={post.id}
                    className="flex p-4 rounded-lg items-start space-x-4"
                  >
                    <img
                      className="w-16 sm:w-20 object-cover rounded-lg"
                      src={post.image}
                      alt={post.title}
                    />
                    <div className="flex flex-col">
                      <h3 className="font-semibold text-sm sm:text-base">
                        {post.title}
                      </h3>
                      <div className="inline-block bg-primary100 px-3 py-1 my-6 w-[120px]">
                        <p className="text-fontSecondary m-0 text-xs">
                          {post.date}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
