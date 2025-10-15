// src/Pages/Newsletters/October2025.jsx
import { useEffect } from "react";
import logo from "../../assets/images/Newsletters/October2025/KeelWorks-logo.png";
import donateIcon from "../../assets/images/Newsletters/October2025/DONATEHAND.png";
import teamimg from "../../assets/images/Newsletters/October2025/septembernewsletter_team.jpg";
import associateimg from "../../assets/images/Newsletters/October2025/mariya.jpg";

export default function October2025Newsletter() {
  useEffect(() => {
    document.title = "KeelWorks – October 2025 Newsletter";
  }, []);

  const html = `
    <style>
      :root {
        --header-bg: #00929C;
        --footer-bg: #666A6F;
        --bg-variant-1: #F5F5F5;
        --bg-variant-2: #E5E5E5;
        --bg-variant-3: #F1F1F1;
        --bg-variant-4: #D9D9D9;
        --bg-variant-5: #D0BCD5;
        --text-dark: #212121;
        --text-light: #FFFFFF;
        --accent: #2563EB;
      }
      body {
        font-family: 'Lato', Arial, sans-serif;
        font-size: 16px;
        line-height: 24px;
        color: var(--text-dark);
        background-color: #fff;
        margin: 0;
        padding: 0;
      }
      h1, h2, h3, h4, h5, h6 {
        font-family: 'Raleway', Arial, sans-serif;
        font-weight: 600;
        color: var(--text-dark);
        margin: 0 0 16px 0;
      }
      p {
        font-family: 'Lato', Arial, sans-serif;
        font-size: 16px;
        line-height: 24px;
        color: var(--text-dark);
        margin: 0 0 16px 0;
      }
      .newsletter-container {
        max-width: 640px;
        margin: 0 auto;
        background: #fff;
        border: 1px solid #e5e7eb;
        border-radius: 8px;
        box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1),
                    0 2px 4px -1px rgba(0,0,0,0.06);
        overflow: hidden;
      }
      .header {
        background-color: var(--header-bg);
        padding: 24px 20px;
        color: var(--text-light);
      }
      .header-content {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 10px;
      }
      .logo { width: 200px; height: auto; display: block; }
      .year { font-family:'Raleway'; font-size:18px; font-weight:500; color:#fff; }
      .newsletter-title { font-family:'Raleway'; font-size:24px; font-weight:600; color:#fff; margin:0; }
      .section { padding: 28px 20px; }
      .section-1 { background: #F7F7F7; }
      .section-2 { background: #E5E5E5; }
      .section-4 { background: #D9D9D9; }
      .section-5 { background: #F5F5F5; }
      .section-6 { background: #E5E5E5; }
      .section-8 { background: #F7F7F7; }
      .image-container { margin: 20px 0; border-radius: 8px; overflow: hidden; }
      .image-container img { width: 100%; height: auto; display: block; }
      .image-float-right { float: right; width: 40%; margin: 0 0 20px 20px; }
      .image-float-right img { width: 100%; height: auto; display: block; }
      .clearfix::after { content: ""; display: table; clear: both; }
      .donation-section {
        background: #D0BCD5;
        padding: 32px 20px;
        text-align: left;
      }
      .cta-button {
        display: inline-block;
        background: #825E8B;
        color: #ffffff;
        padding: 12px 20px;
        text-decoration: none;
        border-radius: 4px;
        font-family: 'Lato';
        font-weight: 500;
        font-size: 18px;
        transition: background-color 0.2s ease;
      }
      .cta-button:hover { background: #6d4c72; }
      a { color: var(--accent); text-decoration: underline; }
      a:hover { color: #1d4ed8; }
      @media (max-width: 768px) {
        .newsletter-container { margin: 0; border-radius: 0; }
        .section { padding: 24px 20px; }
        .image-float-right { float: none; width: 100%; margin: 0 0 20px 0; }
      }
    </style>

    <div class="newsletter-container">
      <div class="header">
        <div class="header-content">
          <img src="${logo}" alt="KeelWorks Foundation" class="logo" />
          <span class="year">2025</span>
        </div>
        <h1 class="newsletter-title">October Newsletter</h1>
      </div>

      <div class="section section-1">
        <h2>Stories of Progress & Purpose</h2>
        <p>We are delighted to share the news of our first interns in Panama and Iran. We're used to associates around the globe but interns in Central and South America and in Iran are rare!</p>
        <p>KeelMaster, our signature program, is under development. We are pursuing a partnership with refugees in Kenya who need to upskill to transition into the workforce. Securing this audience is a crucial step in launching KeelMaster as it will give us an opportunity to demonstrate its effectiveness.</p>
      </div>

      <div class="section donation-section">
        <h3>Your Support Makes A Difference</h3>
        <p>The work we do wouldn't be possible without the generosity of our supporters. Your donation helps us get people to work.</p>
        <a href="https://www.every.org/keelworks-foundation" class="cta-button">
          <img src="${donateIcon}" alt="Donate" style="width:22px; height:22px; margin-right:8px; vertical-align:middle; filter:invert(1);" />
          Donate
        </a>
      </div>

      <div class="section section-2">
        <h3>Tiny survey, mighty impact</h3>
        <p>Our upcoming newsletter redesign needs your help. Even the smallest bit of feedback ripples throughout our work and helps us design a better newsletter for you.</p>
        <p>Take 60 seconds to share your input and help us chart our course.</p>
        <a href="https://forms.gle/TgpjaUsy7ZtJ7fhC9" class="cta-button">Share your voice</a>
      </div>

      <div class="section section-4">
        <h2>What the Heck is a KeelMate!?</h2>
        <p>Hi, my name is Jamie and I'm a KeelMate, a seasoned professional practicing at a higher level of responsibility than in my past...</p>
        <p>I'm learning from my mistakes and celebrating my successes every day. The KeelMate program provides me with opportunities to build my confidence and skills and to help me "level up" to a full time role as a marketing leader.</p>
      </div>

      <div class="section section-5">
        <h2>Can We Fix Your Resume?</h2>
        <p>Your resume reflects professional competence. A successful candidate answers the hiring manager's questions in the order of importance to the manager.</p>
        <p>The first question is, "Am I wasting my time?" Address this question first. Clearly indicate you want the job and are a credible candidate who has researched the company and role. For more tips, join our free Wednesday resume session—email <a href="mailto:info@keelworks.org">info@keelworks.org</a> to register.</p>
      </div>

      <div class="section section-6">
        <h2>Team of the Month</h2>
        <div class="image-container">
          <img src="${teamimg}" alt="KeelWings Team" />
        </div>
        <p>KeelWings Volunteer App Product Team - "We're building a secure, user-friendly app to simplify sign-ups and data collection, and enhance engagement."</p>
      </div>

      <div class="section" style="background:#F1F1F1;">
        <h2>Product of the Month</h2>
        <p>Rural residential water utilities get a new mobile app! Residents, admins, and operators can report issues, outages, and track maintenance, built by KeelWorks.</p>
      </div>

      <div class="section section-8 clearfix">
        <h2>Mariya: Our Tireless, Dedicated Newsletter Leader</h2>
        <div class="image-float-right">
          <img src="${associateimg}" alt="Mariya - Associate of the Month" style="aspect-ratio:4/3; object-fit:cover; object-position:center;" />
        </div>
        <p>A passionate advocate for our mission, Mariya is our associate of the month for leading the massive effort across KeelWorks' numerous stakeholders...</p>
        <h3>In Mariya's own words:</h3>
        <p>My experience here as an associate at KeelWorks Foundation and managing the monthly newsletter has been a versatile and enriching experience...</p>
      </div>

      <div class="section" style="background:#E5E5E5;">
        <h2>Founder's Message</h2>
        <p>It's October, and we celebrate our success as many associates who practice, learn, and grow advance to rewarding roles with top companies...</p>
        <p>Newsletter creation comes with challenges. However, we view each challenge as a chance to improve...</p>
      </div>
    </div>
  `;

  return (
    <div className="pt-24 sm:pt-20 bg-white">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
