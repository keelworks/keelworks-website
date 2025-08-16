// src/Pages/Newsletters/July2025.jsx
import logo from "../../assets/images/Newsletters/July2025/KeelWorks-logo.png";
import teamimg from "../../assets/images/Newsletters/July2025/Julynewsletter_team.png";
import associateimg from "../../assets/images/Newsletters/July2025/Julynewsletter_asscociate.png";
import { useEffect } from "react";

export default function July2025Newsletter() {
  useEffect(() => {
    document.title = "KeelWorks – July 2025 Newsletter";

    // Desktop-only "Learn more" toggle
    const root = document.querySelector(".kw-newsletter-july");
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
      /* Scope + palette */
      .kw-newsletter-july{
        --bg:#dcebf7; --ink:#0a154f; --muted:#f7f7f7;
        --brand:#406a94; --brand-dark:#0a1d2f;
        --cta:#ffd700; --cta-ink:#000;
        --donate:#5c98ad; --donate-cta:#060e3a;
        --footer:#1f2e3d; --radius:12px; --shadow:0 8px 24px rgba(0,0,0,.08);
        --maxw:960px;
        color:var(--ink); background:var(--bg);
        font-family: Arial, sans-serif;
      }
      .kw-newsletter-july, .kw-newsletter-july * { box-sizing: border-box; }
      .kw-newsletter-july img { max-width:100%; height:auto; display:block; }
      .kw-newsletter-july a { color: inherit; }

      /* Type scale (px so it matches the standalone HTML exactly) */
      .kw-newsletter-july h1{ margin:0 0 16px; font-weight:800; font-size:36px; line-height:1.2; text-align:center; }
      .kw-newsletter-july h2{ margin:0 0 22px; font-weight:700; font-size:24px; line-height:1.3; }
      .kw-newsletter-july h3{ margin:0 0 14px; font-weight:700; font-size:20px; line-height:1.3; }
      .kw-newsletter-july p { margin:0; font-size:18px; line-height:1.6; }

      /* Extra space under hero section headings to match your HTML screenshots */
      .kw-newsletter-july .cta h2,
      .kw-newsletter-july .donate h2{ margin-bottom:26px; }
      .kw-newsletter-july .team h2,
      .kw-newsletter-july .associate h2{ margin-bottom:20px; }

      @media (max-width: 899px){
        .kw-newsletter-july h1{ font-size:32px; }
        .kw-newsletter-july p { font-size:17px; }
      }

      /* Layout */
      .kw-newsletter-july .container{ max-width:var(--maxw); margin:auto; padding:6px; }
      .kw-newsletter-july .card{ background:#fff; border-radius:var(--radius); box-shadow:var(--shadow); overflow:hidden; }
      .kw-newsletter-july header{ padding:24px; }
      .kw-newsletter-july .section{ padding:24px; }
      .kw-newsletter-july .center{ text-align:center; }
      .kw-newsletter-july .muted{ opacity:.92; }

      /* Logo */
      .kw-newsletter-july .logo{ display:block; width:clamp(300px,45vw,480px); margin:0 auto; height:auto; }

      /* Buttons */
      .kw-newsletter-july .btn{
        display:inline-block; padding:14px 24px; font-size:15px; font-weight:700;
        border-radius:8px; text-decoration:none; line-height:1; border:2px solid transparent;
        transition:transform .06s ease, background-color .12s ease;
      }
      .kw-newsletter-july .btn--primary{ background:var(--cta); color:var(--cta-ink); }
      .kw-newsletter-july .btn--primary:hover{ background:#e6c200; text-decoration:underline; }
      .kw-newsletter-july .btn--dark{ background:var(--donate-cta); color:#fff; }
      .kw-newsletter-july .btn--dark:hover{ background:#09145a; text-decoration:underline; }
      .kw-newsletter-july .btn.round{ border-radius:999px; }
      .kw-newsletter-july .btn, .kw-newsletter-july .btn:visited, .kw-newsletter-july .btn:hover, .kw-newsletter-july .btn:active { text-decoration:none !important; }

      /* Sections */
      .kw-newsletter-july .cta{ background:var(--muted); text-align:center; }
      .kw-newsletter-july .cta p{ max-width:60ch; margin:0 auto 12px; }

      .kw-newsletter-july .donate{ background:var(--footer); color:#fff; text-align:center; }
      .kw-newsletter-july .donate p{ max-width:68ch; margin:0 auto 16px; }

      .kw-newsletter-july .team{ background:var(--brand-dark); color:#fff; }
      .kw-newsletter-july .team h2{ text-align:center; }
      .kw-newsletter-july .team-wrap{ display:flex; flex-direction:column; align-items:center; gap:16px; max-width:720px; margin:0 auto; text-align:left; }
      .kw-newsletter-july .team-text{ width:100%; }
      .kw-newsletter-july .team-img{ width:100%; border-radius:10px; }

      .kw-newsletter-july .associate{ background:var(--brand); color:#fff; }
      .kw-newsletter-july .assoc-img{ width:min(220px,70vw); margin:8px auto 16px; border-radius:10px; float:none; }
      .kw-newsletter-july .assoc-text p{ margin:0 0 12px; }

      /* Desktop float + toggle */
      .kw-newsletter-july .assoc-toggle{ display:none; }
      .kw-newsletter-july .assoc-more{ display:block; } /* mobile shows all */
      @media (min-width: 900px){
        .kw-newsletter-july .assoc-img{ float:right; width:240px; margin:0 0 10px 20px; }
        .kw-newsletter-july .associate::after{ content:''; display:block; clear:both; }
        .kw-newsletter-july .assoc-toggle{
          display:inline-block; background:transparent; border:0; color:#fff;
          font-weight:700; text-decoration:underline; cursor:pointer; padding:0;
        }
        .kw-newsletter-july .assoc-more{ display:none; } /* collapsed by default on desktop */
      }
    </style>

    <div class="kw-newsletter-july">
      <div class="container">
        <div class="card">

          <!-- Header & Logo -->
          <div style="background:var(--brand-dark);">
            <header style="margin-bottom:8px;">
              <h1 class="site-title" style="color:#fff;">Monthly Newsletter</h1>
            </header>
            <div class="section center" style="margin-top:0; padding-top:0;">
              <img class="logo" src="${logo}" alt="KeelWorks logo">
            </div>
          </div>

          <!-- Intro band -->
          <section class="section" style="text-align:center; background:var(--brand); padding:20px; color:#fff;">
            <p style="margin:0; max-width:720px; margin-left:auto; margin-right:auto;">
              At KeelWorks, everything we do is a journey of learning. The newsletter team is working through challenging changes to design. We're confident that you’ll see the August newsletter on time.
            </p>
          </section>

          <!-- CTA -->
          <section class="section cta">
            <h2>Your Voice Shapes Our Mission</h2>
            <p>A new newsletter design is in the works, and we need your help. This quick 2-minute survey will help us understand what matters most to you and shape what comes next.</p>
            <p><a class="btn btn--primary" href="https://forms.gle/pX6dGmkzzwZKpPdj7" target="_blank" rel="noopener">Share your input</a></p>
          </section>

          <!-- Donate (full copy) -->
          <section class="section donate">
            <h2>What Your Donations Support</h2>
            <p>KeelWorks is a dedicated nonprofit that makes a big difference with minimal resources. Your donations, no matter the size, go directly towards essential costs like Software tools like Photoshop and Quickbooks, Cloud hosting, domain name, and annual government fees. Some day, we’d like to raise enough to pay everyone here, but for now, we just need to keep the lights on.</p>
            <p>Every day, recent graduates are finding work, seasoned professionals are leveling up to greater responsibility, and all are working to build assets for the long awaited KeelMaster program. While KeelMaster is focused on the most challenged unemployed, it will also support at-risk students to support outstanding outcomes for everyone. Be a part of KeelWorks: Please give what you can!</p>
            <p><a class="btn btn--dark round" href="https://www.every.org/keelworks-foundation" target="_blank" rel="noopener">Donate today</a></p>
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
            <img class="assoc-img" src="${associateimg}" alt="Portrait of Anouksha Kolige Sreemurthy">
            <div class="assoc-text">
              <p class="muted">Working as the UI/UX Designer for the monthly newsletter has been highly rewarding. It pushed me to think about how design impacts communication, and how we can create not just beauty, but also functional elegance and engagement.</p>
              <p class="muted">Over the past few months, I’ve focused on refining the layout, improving accessibility, and bringing a more user-centered approach to the newsletter. From exploring color palettes and typography to ensuring consistency and usability, it’s been a fun mix of creativity and problem-solving. I’ve also learned so much collaborating with teammates and gaining insight from their unique perspectives and strengths.</p>
              <div class="assoc-more" id="assoc-more">
                <p class="muted">This recognition means a lot to me, and it really reflects the team spirit and collaborative energy. I’ve been lucky to be a part of. I’m excited to keep growing and contributing.</p>
                <p class="muted">Thanks again for the support and encouragement!</p>
                <h3 class="muted">Why Anouksha?</h3>
                <p class="muted">Anouksha's work on the KeelWorks newsletter has been transformative. Each issue reflects her dedication to making design both beautiful and meaningful. Through her thoughtful approach, she has redefined how we communicate, ensuring every detail resonates with the audience. Her creativity, empathy, and collaborative spirit inspire the team, leaving a lasting impact on all of us.</p>
              </div>
              <button class="assoc-toggle btn round" type="button" aria-expanded="false" aria-controls="assoc-more" style="margin-top:8px; background:#f3faff; color:var(--ink); border:1px solid #b5d6e6; padding:8px 20px;">Learn more</button>
            </div>
          </section>

        </div>
      </div>
    </div>
  `;

  // Keep space for your fixed navbar + page background
  return (
    <div className="pt-24 sm:pt-20 bg-[#dcebf7]">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
