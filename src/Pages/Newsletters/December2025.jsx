// src/Pages/Newsletters/December2025.jsx
import { useEffect } from "react";
import logo from "../../assets/images/Newsletters/December2025/KeelWorks-logo.png";
import donateIcon from "../../assets/images/Newsletters/December2025/DONATEHAND.png";
import gratitudesImg from "../../assets/images/Newsletters/December2025/gratitudes.png";
import associateImg from "../../assets/images/Newsletters/December2025/december_associate.jpg";

export default function December2025Newsletter() {
  useEffect(() => {
    document.title = "KeelWorks — December 2025 Newsletter";
  }, []);

  const html = `
    <style>
      /* Email-safe font strategy */
      * {
        font-family: 'Lato', Arial, sans-serif !important;
      }
      
      h1, h2, h3, h4, h5, h6 {
        font-family: 'Raleway', Arial, sans-serif !important;
      }
      
      /* Updated color scheme */
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

      /* Typography Specifications */
      body {
        font-family: 'Lato', Arial, sans-serif !important;
        font-size: 16px !important;
        font-weight: 400 !important;
        line-height: 24px !important;
        color: #212121 !important;
        text-align: left !important;
        background-color: #ffffff;
        margin: 0;
        padding: 0;
      }
      
      /* All Headings - Raleway, 24px, Semi-bold */
      h1, h2 {
        font-family: 'Raleway', Arial, sans-serif !important;
        font-size: 24px !important;
        font-weight: 600 !important;
        line-height: 31px !important;
        color: #212121 !important;
        text-align: left !important;
        margin: 0 0 16px 0 !important;
      }
      
      /* Body Text - Lato, 16px, Normal weight */
      p {
        font-family: 'Lato', Arial, sans-serif !important;
        font-size: 16px !important;
        font-weight: 400 !important;
        line-height: 24px !important;
        color: #212121 !important;
        text-align: left !important;
        margin: 0 0 16px 0 !important;
      }
      
      /* Captions */
      .caption {
        font-family: 'Lato', Arial, sans-serif !important;
        font-size: 12px !important;
        font-weight: 400 !important;
        font-style: italic;
        line-height: 18px !important;
        color: #212121 !important;
        text-align: left;
        padding: 0 8px;
      }
      
      /* Container */
      .newsletter-container {
        max-width: 640px;
        margin: 0 auto;
        background: #FFFFFF;
        border-radius: 8px;
        overflow: hidden;
        border: 1px solid #e5e7eb;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      }
      
      /* Header */
      .header {
        background-color: #00929C;
        padding: 24px 20px;
      }
      
      .header-content {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
      }
      
      .logo {
        width: 200px;
        height: auto;
        border: 0;
        margin-bottom: 10px;
        max-width: 200px;
      }
      
      .year {
        font-family: 'Raleway', Arial, sans-serif !important;
        font-size: 18px !important;
        font-weight: 800 !important;
        color: #ffffff !important;
      }
      
      .newsletter-title {
        font-family: 'Raleway', Arial, sans-serif !important;
        font-size: 24px !important;
        font-weight: 800 !important;
        color: #ffffff !important;
        margin: 10px 0 0 0 !important;
        line-height: 31px !important;
        text-align: left !important;
      }
      
      /* Sections */
      .section {
        padding: 24px 20px;
        margin: 0;
      }
      
      /* Hero Section */
      .hero-section {
        background: #FFFFFF;
      }
      
      /* Gratitude Section */
      .gratitude-section {
        background: #F7F7F7;
      }
      
      .gratitude_image {
        display: block;
        border-radius: 6px;
        max-width: 100%;
        width: 100%;
        height: auto;
        margin-bottom: 12px;
      }
      
      /* Light Gray Section */
      .light-gray-section {
        background: #F7F7F7;
      }
      
      /* Two Voices Section */
      .two-voices-section {
        background: #EBEBEB;
      }
      
      .voice-divider {
        width: 100%;
        height: 1px;
        background-color: #D9D9D9;
        margin: 20px 0;
      }
      
      /* Bang Section */
      .bang-section {
        background: #F7F7F7;
        display: flex;
        gap: 20px;
        align-items: flex-start;
      }
      
      .bang-content {
        flex: 1;
      }
      
      .bang-image {
        width: 200px;
        height: 200px;
        object-fit: cover;
        border-radius: 8px;
        flex-shrink: 0;
      }
      
      .bang-image-mobile {
        width: 100%;
        height: auto;
        margin-bottom: 12px;
      }
      
      /* Difference Section */
      .difference-section {
        background: #D9D9D9;
      }
      
      /* Founder Section */
      .founder-section {
        background: #F7F7F7;
      }
      
      /* Donation Section */
      .donation-section {
        background: #D9D9D9;
      }
      
      /* Buttons */
      .btn {
        display: inline-block;
        background: #825E8B;
        color: #FCFCFC;
        padding: 13px 20px;
        text-decoration: none;
        border-radius: 9px;
        font-family: 'Lato', Arial, sans-serif;
        font-weight: 500;
        font-size: 18px;
        line-height: 18px;
        text-align: center;
        vertical-align: middle;
        border: 0;
        box-sizing: border-box;
        cursor: pointer;
        box-shadow: 0 1px 2px rgba(10, 13, 18, 0.05);
        transition: background-color 0.2s ease;
      }
      
      .btn:hover {
        background: #684571;
        font-weight: 600;
        box-shadow: 0 2px 4px rgba(10, 13, 18, 0.1);
      }
      
      .btn:focus {
        outline: none;
        box-shadow: 0 0 0 2px #825E8B, 0 1px 2px rgba(10, 13, 18, 0.05);
      }
      
      .btn img {
        width: 22px;
        height: 22px;
        margin-right: 8px;
        vertical-align: middle;
        border: 0;
      }
      
      /* Links */
      a {
        color: var(--accent);
        text-decoration: underline;
      }
      
      a:hover {
        color: #1d4ed8;
      }
      
      /* Desktop/Mobile visibility */
      .desktop-only {
        display: flex;
      }
      
      .mobile-only {
        display: none;
      }
      
      /* Responsive Design */
      @media (max-width: 768px) {
        .newsletter-container {
          margin: 0;
          border-radius: 0;
        }
        
        .header-content {
          display: flex;
          justify-content: space-between;
        }
        
        .bang-section {
          flex-direction: row;
        }
        
        .desktop-only {
          display: none;
        }
        
        .mobile-only {
          display: block;
        }
        
        .bang-image {
          width: 100%;
          height: 200px;
        }
        
        .bang-image-mobile {
          width: 100%;
          height: auto;
          margin-bottom: 12px;
        }
      }
    </style>

    <div class="newsletter-container">
      <!-- Header -->
      <header class="header">
        <div class="header-content">
          <img src="${logo}" alt="KeelWorks Foundation" class="logo" />
          <span class="year">2025</span>
        </div>
        <h1 class="newsletter-title">December Newsletter</h1>
      </header>

      <!-- Year-End Celebration Section -->
      <section class="section hero-section">
        <h1>Lights, Camera, Gratitude: A Year-End Celebration at KeelWorks!</h1>
        <p>As we wrap up another incredible year, we want to extend our heartfelt thanks for your unwavering support. Your generosity in November has truly made a difference. From all of us at KeelWorks, warm holiday wishes! May this festive season bring you joy and peace. Here's to a fantastic year ahead filled with new adventures and continued collaboration. Thank you for being a part of our journey!</p>
      </section>

      <!-- Gratitude Section -->
      <section class="section gratitude-section">
        <h2>Thankful Together: A Joy-Filled Foundation HR Engagement Gathering!</h2>
        <img class="gratitude_image" src="${gratitudesImg}" alt="Gratitudes" />
        <p>Our recent foundation wide HR Engagement session celebrated gratitude for the Thanksgiving season. Team members shared appreciation for colleagues, added notes to our gratitude wall, and enjoyed fun activities like emoji puzzles, bingo, and holiday traditions.</p>
      </section>

      <!-- Exciting Changes Section -->
      <section class="section hero-section">
        <h2>Exciting Changes Ahead at KeelWorks!</h2>
        <p>We're thrilled to announce Robert G. King as our new HR Director, bringing 25+ years of experience in people strategy and HR leadership. We're also welcoming Kristen Walters as our new COO and a new Board member! Kristen's leadership at Dell, HP, and Medtronic will strengthen operations and collaboration. Sadly, we bid farewell to Dana Smalley who, after ten years of service, is stepping down to focus on a new business. Thank you, Dana!</p>
      </section>

      <!-- Farewell Testimonial Section -->
      <section class="section light-gray-section">
        <h2>A Farewell Testimonial From A Departing Volunteer</h2>
        <p>"Working with the team and contributing to our content and brand initiatives has been a rewarding experience, and I'm grateful for the opportunity to have been part of the mission." — Meet</p>
        <p>Hired in Nov 2025 for Digital Marketing and AI Content Strategist position</p>
      </section>

      <!-- Product of the Month Section -->
      <section class="section two-voices-section">
        <h2>Product of the Month: KeelWorks Newsletter!</h2>
        <p>In 2025 we simplified our message to be smarter and more inclusive. Short, focused sections, reader surveys, automated lists, and real-time dashboards boosted clarity and reach. A refreshed, accessible design, a stronger team, and a near-final Brand Guide set the stage for 2026 where we expect a new logo, more automation, deeper analytics, and enhanced UX that brings KeelWorks' impact to life.</p>
      </section>

      <!-- Rising with Purpose Section - DESKTOP VERSION -->
      <section class="section bang-section desktop-only">
        <div class="bang-content">
          <h2>Rising with Purpose: Jeet Raval</h2>
          <p>My time at KeelWorks has been a valuable learning experience. I worked closely with the finance team on accounts reconciliation and QuickBooks management, and contributed ideas to improve transparency through real-time transaction notifications. Collaborating on process design and workflow efficiency taught me a lot about financial systems, teamwork, and leadership in a mission-driven environment.</p>
        </div>
        <img src="${associateImg}" alt="Jeet Raval - Associate of the Month" class="bang-image" />
      </section>

      <!-- Rising with Purpose Section - MOBILE VERSION -->
      <section class="section mobile-only">
        <div class="bang-content">
          <h2>Rising with Purpose: Jeet Raval</h2>
          <img src="${associateImg}" alt="Jeet Raval - Associate of the Month" class="bang-image-mobile" />
          <p>My time at KeelWorks has been a valuable learning experience. I worked closely with the finance team on accounts reconciliation and QuickBooks management, and contributed ideas to improve transparency through real-time transaction notifications. Collaborating on process design and workflow efficiency taught me a lot about financial systems, teamwork, and leadership in a mission-driven environment.</p>
        </div>
      </section>

      <!-- What Makes Jeet Shine Section -->
      <section class="section difference-section">
        <h2>What Makes Jeet Shine?</h2>
        <p>Jeet has been an asset to the KeelWorks finance team, consistently bringing initiative and precision to every project. He played a key role in streamlining reporting processes, assisting with reconciliations, and ensuring data accuracy. His problem-solving mindset and proactive communication greatly supported our efforts to enhance financial transparency and team efficiency.</p>
      </section>

      <!-- Founder's Message Section -->
      <section class="section founder-section">
        <h2>Founder's Message</h2>
        <p>In America, we celebrated Thanksgiving Day just last week. We are reminded to be thankful, and we are. We are thankful for the opportunity to help others, for the donations from partners and folks like you, and for the many laboring to build our KeelMaster program.</p>
        <p>Like you, I am inundated with requests — it's hard to go anywhere or do anything without being solicited! This is especially hard, when at this time of year budgets are stretched to accommodate the holidays during ongoing economic anxieties.</p>
        <p>Here, we operate on a shoestring. With an annual budget of less than $2K per year and almost no overhead, every dollar you give goes straight into building a better KeelWorks.</p>
      </section>

      <!-- Donation Section -->
      <section class="section donation-section">
        <h2>Your Support Makes A Difference</h2>
        <p>The work we do wouldn't be possible without the generosity of our supporters. Your donation helps us get people work. Every.org is our secure donation platform and does not save your credit card.</p>
        <a href="https://www.every.org/keelworks-foundation?donateTo=keelworks-foundation#/donate/card" class="btn" target="_blank" rel="noopener noreferrer">
          <img src="${donateIcon}" alt="Donate" />
          Donate
        </a>
      </section>
    </div>
  `;

  return (
    <div className="pt-24 sm:pt-20 bg-white">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
