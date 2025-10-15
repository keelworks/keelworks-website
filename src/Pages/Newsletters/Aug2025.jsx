// src/Pages/Newsletters/July2025.jsx  (repurposed for August content)
import logo from "../../assets/images/Newsletters/July2025/KeelWorks-logo.png";
import teamimg from "../../assets/images/Newsletters/July2025/Julynewsletter_team.png";
import associateimg from "../../assets/images/Newsletters/July2025/Julynewsletter_asscociate.png";
import { useEffect } from "react";

export default function July2025Newsletter() {
  useEffect(() => {
    document.title = "KeelWorks – August 2025 Newsletter";

    // Desktop-only “Learn more / Show less” toggle for Associate section
    const root = document.querySelector(".kw-newsletter-aug");
    const btn = root?.querySelector(".assoc-toggle");
    const more = root?.querySelector("#assoc-more");
    if (!btn || !more) return;

    const mql = window.matchMedia("(min-width: 900px)");

    const setState = (collapsed = true) => {
      if (mql.matches) {
        more.style.display = collapsed ? "none" : "block";
        btn.setAttribute("aria-expanded", String(!collapsed));
        btn.textContent = collapsed ? "Learn more" : "Show less";
        btn.style.display = "inline-block";
      } else {
        more.style.display = "block";
        btn.style.display = "none";
      }
    };

    const onResize = () => setState(true);
    const onClick = () => {
      const collapsed = more.style.display === "none";
      setState(!collapsed);
    };

    setState(true);
    btn.addEventListener("click", onClick);
    window.addEventListener("resize", onResize);
    return () => {
      btn.removeEventListener("click", onClick);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const html = `
    <style>
      :root{
        --bg:#dcebf7; --ink:#0a154f; --muted:#f7f7f7;
        --brand:#406a94; --brand-dark:#0a1d2f;
        --cta:#077A85; --cta-ink:#fff;
        --donate:#5c98ad; --donate-cta:#060e3a;
        --footer:#1f2e3d; --radius:12px; --shadow:0 8px 24px rgba(0,0,0,.08);
        --maxw:960px;
      }
      .kw-newsletter-aug, .kw-newsletter-aug * { box-sizing:border-box }
      .kw-newsletter-aug{
        background:var(--bg); color:var(--ink);
        font-family: Arial, sans-serif;
      }
      .kw-newsletter-aug img{ max-width:100%; height:auto; display:block; }
      .kw-newsletter-aug a{ color:inherit; }

      /* Global type (balanced to match your HTML) */
      .kw-newsletter-aug h1 { margin:0; font-weight:800; font-size:clamp(28px,3.5vw,40px); line-height:1.25; text-align:left; }
      .kw-newsletter-aug h2 { margin:0 0 16px; font-weight:700; font-size:24px; line-height:1.3; }
      .kw-newsletter-aug h3 { margin:0 0 14px; font-weight:700; font-size:20px; line-height:1.3; }
      .kw-newsletter-aug p  { margin:0; font-size:17px; line-height:1.6; }
      @media (min-width:900px){ .kw-newsletter-aug h1 { text-align:center; } }
      @media (max-width:899px){
        .kw-newsletter-aug h1, .kw-newsletter-aug h2, .kw-newsletter-aug h3 { text-align:center; line-height:1.3; }
      }

      /* Layout */
      .container{ max-width:var(--maxw); margin:auto; padding:6px; background:transparent; box-shadow:0 2px 12px rgba(0,0,0,.07); border-radius:4px; }
      .card{ background:#fff; border-radius:var(--radius); box-shadow:var(--shadow); overflow:hidden; }
      header{ padding:5px 0 30px 0; }
      .section{ padding:24px; }
      .center{ text-align:center; }
      .muted{ opacity:.92; }

      /* Logo (bigger/responsive) */
      .logo{ display:block; width:clamp(300px,45vw,480px); margin:0 auto; padding-top:30px; height:auto; }

      /* Buttons */
      .btn{
        display:inline-block; padding:14px 24px; font-size:15px; font-weight:700; border-radius:8px;
        text-decoration:none; line-height:1; border:2px solid transparent;
        transition:transform .06s ease, background-color .12s ease;
      }
      .btn.round{ border-radius:999px; }
      .btn--primary{ background:var(--cta); color:var(--cta-ink); }
      .btn--primary:hover{ background:#0A8B96; text-decoration:underline; }
      .btn--primary:active{ background:#0D9CA7; transform:translateY(1px); }
      .btn--dark{ background:var(--donate-cta); color:#fff; }
      .btn--dark:hover{ background:#09145a; text-decoration:underline; }
      .btn:focus-visible{ outline:none; box-shadow:0 0 0 3px #fff, 0 0 0 6px #0a154f; }
      .btn, .btn:visited, .btn:active, .btn:hover { text-decoration: none !important; }

      /* Sections */
      .cta{ background:var(--muted); text-align:center; }
      .cta p{ max-width:60ch; margin:0 auto 12px; }

      .donate{ background:var(--footer); color:#fff; text-align:center; }
      .donate p{ max-width:68ch; margin:0 auto 16px; }

      .team{ background:var(--brand-dark); color:#fff; }
      .team h2{ text-align:center; margin-bottom:16px; }
      .team-wrap{ display:flex; flex-direction:column; align-items:center; gap:16px; max-width:720px; margin:0 auto; text-align:left; }
      .team-img{ width:100%; border-radius:10px; }

      .associate{ background:var(--brand); color:#fff; }
      .assoc-img{ width:min(220px,70vw); margin:8px auto 16px; border-radius:10px; float:none; }
      .assoc-text p{ margin:0 0 12px; }

      /* Desktop float + toggle */
      .assoc-toggle{ display:none; }
      .assoc-more{ display:block; } /* mobile shows all */
      @media (min-width:900px){
        .assoc-img{ float:right; width:240px; margin:0 0 10px 20px; }
        .associate::after{ content:''; display:block; clear:both; }
        .assoc-toggle{
          display:inline-block; background:transparent; border:0; color:#fff; font-weight:700;
          text-decoration:underline; cursor:pointer; padding:0;
        }
        .assoc-more{ display:none; } /* collapsed by default on desktop */
      }

      /* Hover style for the small rounded toggle button */
      .assoc-toggle.btn.round:hover{
        background:#e6f3fa; color:#0a154f; border-color:#8ecae6; text-decoration:none;
      }
    </style>

    <div class="kw-newsletter-aug">
      <div class="container">
        <div class="card">

          <!-- Header & Logo -->
          <div style="background:var(--brand-dark);">
            <div class="section center" style="margin-top:0; padding-top:0;">
              <img class="logo" src="${logo}" alt="KeelWorks logo" />
            </div>
            <header>
              <h1 class="site-title" style="color:#fff;">August Newsletter</h1>
            </header>
          </div>

          <!-- CTA -->
          <section class="section cta">
            <h2>Your Voice Shapes Our Mission</h2>
            <p>A new newsletter design is in the works, and we need your help. This quick 2-minute survey will help us understand what matters most to you and shape what comes next.</p>
            <p><a class="btn btn--primary round" href="https://forms.gle/pX6dGmkzzwZKpPdj7" target="_blank" rel="noopener">Share your input</a></p>
          </section>

          <!-- Donate -->
          <section class="section donate">
            <h2>What Your Donations Support</h2>
            <p>KeelWorks is a dedicated nonprofit that makes a big difference with minimal resources. Your donations, no matter the size, go directly towards essential costs like Photoshop and QuickBooks, cloud hosting, domain name, and annual government fees. Someday, we'd like to raise enough to pay everyone here, but for now, we just need to keep the lights on.</p>
            <p>Every day, recent graduates are finding work, seasoned professionals are leveling up to greater responsibility, and all are working to build assets for the long-anticipated KeelMaster program. KeelMaster brings change for the unemployed, underemployed, and students at risk. Help us help others: be a part of KeelWorks. Please give what you can!</p>
            <p><a class="btn btn--dark round" href="https://www.every.org/keelworks-foundation" target="_blank" rel="noopener">Donate Now</a></p>
          </section>

          <!-- Team -->
          <section class="section team" aria-labelledby="team-title">
            <h2 id="team-title">Team of the Month: Branding</h2>
            <div class="team-wrap">
              <img class="team-img" src="${teamimg}" alt="KeelWorks Team of the Month" />
              <div class="team-text">
                <p class="muted">
                  This team is developing a new identity system for KeelWorks, including a new logo. A small but mighty team, they are developing guidelines for everything from the use of AI in marketing materials to the colors and fonts KeelWorks uses across marketing.
                </p>
              </div>
            </div>
          </section>

          <!-- Associate -->
          <section class="section associate" aria-labelledby="associate-title">
            <h2 id="associate-title">Associate of the Month: Anouksha Kolige Sreemurthy</h2>
            <img class="assoc-img" src="${associateimg}" alt="Portrait of Anouksha Kolige Sreemurthy" />
            <div class="assoc-text">
              <p class="muted">Working as the UI/UX Designer for the monthly newsletter has been highly rewarding. It pushed me to think about how design impacts communication, and how we can create not just beauty, but also functional elegance and engagement.</p>
              <p class="muted">Over the past few months, I’ve focused on refining the layout, improving accessibility, and bringing a more creative approach to the newsletter. From exploring color palettes and typography to ensuring consistency and usability, it’s been a fun mix of creativity and problem-solving. I’ve also learned so much collaborating with teammates and gaining insight from their unique perspectives and strengths.</p>

              <div class="assoc-more" id="assoc-more">
                <p class="muted">This recognition means a lot to me, and it truly reflects the team spirit and collaborative energy. I’ve been lucky to be a part of it. I’m excited to keep growing and contributing.</p>
                <p class="muted">Thanks again for the support and encouragement!</p>
                <h3 class="muted" style="margin-top:18px;">Why Anouksha?</h3>
                <p class="muted">Anouksha's work on the KeelWorks newsletter has been transformative. Each issue reflects her dedication to making design both beautiful and meaningful. Her creativity, empathy, and collaborative spirit inspire the team, leaving a lasting impact on all of us.</p>
              </div>

              <button class="assoc-toggle btn round" type="button" aria-expanded="false" aria-controls="assoc-more" style="margin-top:8px; background:#f3faff; color:var(--ink); border:1px solid #b5d6e6; padding:8px 20px;">
                Learn more
              </button>
            </div>
          </section>

        </div>
      </div>
    </div>
  `;

  // keep space for fixed navbar + page bg
  return (
    <div className="pt-24 sm:pt-20 bg-[#dcebf7]">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
