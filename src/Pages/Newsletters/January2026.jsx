import { useEffect } from "react";
import logo from "../../assets/images/Newsletters/January2026/NewLogo.png";
import donateIcon from "../../assets/images/Newsletters/January2026/DONATEHAND.png";
import boatsImg from "../../assets/images/Newsletters/January2026/boats.png";
import diversityImg from "../../assets/images/Newsletters/January2026/diversity.png";
import nishaImg from "../../assets/images/Newsletters/January2026/Nisha.png";
import teamOfTheMonthImg from "../../assets/images/Newsletters/January2026/teamOfTheMonth.png";

export default function January2026Newsletter() {
  useEffect(() => {
    document.title = "KeelWorks — January 2026 Newsletter";
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
      
      /* Header - White background for January */
      .header {
        background-color: #FFFFFF;
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
        color: #00929C !important;
      }
      
      .newsletter-title {
        font-family: 'Raleway', Arial, sans-serif !important;
        font-size: 24px !important;
        font-weight: 800 !important;
        color: #FFFFFF !important;
        margin: 10px 0 0 0 !important;
        line-height: 31px !important;
        text-align: left !important;
      }
      
      /* Sections */
      .section {
        padding: 24px 20px;
        margin: 0;
      }
      
      /* Section backgrounds */
      .first-section {
        background: #FFFFFF;
      }
      
      .light-gray {
        background: #F7F7F7;
      }
      
      .dark-gray {
        background: #D9D9D9;
      }
      
      .two-voices-section {
        background: #EBEBEB;
      }
      
      .donation-purple {
        background: #D0BCD5;
      }
      
      .donation-section {
        background: #D9D9D9;
      }
      
      .founder-section {
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
      
      .voice-divider {
        width: 100%;
        height: 1px;
        background-color: #D9D9D9;
        margin: 20px 0;
      }
      
      /* Bang Section */
      .bang-section {
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
        color: #006699;
        text-decoration: underline;
      }
      
      a:hover {
        color: #004466;
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
          <span class="year">JAN '26</span>
        </div>
      </header>

      <!-- Say Hello to The Current Section -->
      <section class="section first-section">
        <h1>Say Hello to The Current!</h1>
        <img class="gratitude_image" src="${boatsImg}" alt="Boats resting on calm blue water at sunset." />
        <p>We're thrilled to debut KeelWorks' revamped newsletter for the new year. Here you'll find vibrant images and more story depth that invite you to learn about our latest thinking and the team members who tirelessly power our organization. As always, please let us know your thoughts <a href="https://forms.gle/dCh7iTSjuWA2kk5Y7">here</a>. We're grateful for your support, and were so excited to have you on board as we sail into 2026</p>
      </section>

      <!-- Inclusive by Heart Section - DESKTOP VERSION -->
      <section class="section dark-gray bang-section desktop-only">
        <div class="bang-content">
          <h2>Inclusive by Heart: Celebrating the Strength of Our Diversity</h2>
          <p>Inclusion and diversity are KeelWorks' greatest strengths and are intrinsic to our DNA. Our volunteers represent a wide range of ages, abilities, beliefs, and identities. Each unique, creative perspective makes us smarter as we carry out our mission. Our inclusivity makes us both stronger and more impactful.</p>
        </div>
        <img src="${diversityImg}" alt="Abstract image of raised hands symbolizing inclusion." class="bang-image" />
      </section>

      <!-- Inclusive by Heart Section - MOBILE VERSION -->
      <section class="section dark-gray mobile-only">
        <div class="bang-content">
          <h2>Inclusive by Heart: Celebrating the Strength of Our Diversity</h2>
          <img src="${diversityImg}" alt="Abstract image of raised hands symbolizing inclusion." class="bang-image-mobile" />
          <p>Inclusion and diversity are KeelWorks' greatest strengths and are intrinsic to our DNA. Our volunteers represent a wide range of ages, abilities, beliefs, and identities. Each unique, creative perspective makes us smarter as we carry out our mission. Our inclusivity makes us both stronger and more impactful.</p>
        </div>
      </section>

      <!-- Donation Section -->
      <section class="section donation-purple donation-section">
        <h2>Your Support Makes A Difference</h2>
        <p>The work we do wouldn't be possible without the generosity of our supporters. Your donation helps us get people work. <a href="https://www.every.org/keelworks-foundation?donateTo=keelworks-foundation#/donate/card">Every.org</a> is our secure donation platform and does not save your credit card</p>
        <a href="https://www.every.org/keelworks-foundation?donateTo=keelworks-foundation#/donate/card" class="btn" target="_blank" rel="noopener noreferrer">
          <img src="${donateIcon}" alt="Donate" />
          Donate
        </a>
      </section>

      <!-- Worldwide and Worldwise Section -->
      <section class="section light-gray two-voices-section">
        <h2>Worldwide and Worldwise</h2>
        <p>KeelWorks' volunteers span the globe. Today, folks from nearly 30 countries across 5 continents share their time and talents building a learning community where geography is no barrier to opportunity. Learners gain 21st-century intercultural and professional skills, confidence, and real opportunities.</p>
      </section>

      <!-- Heartfelt Farewell Section -->
      <section class="section two-voices-section">
        <h2>A Heartfelt Farewell and Gratitude for Service</h2>
        <p>"When I first joined KeelWorks, my impression was that it was a dynamic and collaborative environment with a strong focus on mission-driven impact. I was immediately struck by the passion of the people involved and the sense of community built around solving real-world challenges.</p>
        <p>Over time, that impression deepened into genuine appreciation. I came to see not just the passion, but also the structure, mentorship, and opportunities for growth that KeelWorks offers its volunteers.</p>
        <p>I realized how much effort goes into empowering individuals to take ownership of projects, and I experienced firsthand the supportive culture that truly makes KeelWorks stand out." - Sameer Nimse</p>
      </section>

      <!-- Product of the Month Section -->
      <section class="section dark-gray two-voices-section">
        <h2>Product of the Month – Salesforce</h2>
        <p>Salesforce connects us to each other, and to you! Salesforce's free Nonprofit Success Pack brings all of our data together in one single platform that enables us to easily send newsletters, track our analytics, and manage candidates in our hiring pipeline. By centralizing all of our data, we're saving time and improving organizational transparency.</p>
      </section>

      <!-- Nisha Pathiyil Section - DESKTOP VERSION -->
      <section class="section light-gray bang-section desktop-only">
        <div class="bang-content">
          <h2>Nisha Pathiyil - Associate of the Month</h2>
          <p>As Project Manager at KeelWorks, I lead the Water Utility Application, strengthening communication between residents and the West Whidbey Water Authority to ensure reliable, equitable access to water through agile delivery and cross-functional collaboration. I focus on user experience and efficient digital solutions and am grateful to be part of KeelWorks and highly recommend KeelWorks for its supportive, growth-focused, and collaborative culture.</p>
        </div>
        <img src="${nishaImg}" alt="Nisha Pathiyil" class="bang-image" />
      </section>

      <!-- Nisha Pathiyil Section - MOBILE VERSION -->
      <section class="section light-gray mobile-only">
        <div class="bang-content">
          <h2>Nisha Pathiyil - Associate of the Month</h2>
          <img src="${nishaImg}" alt="Nisha Pathiyil" class="bang-image-mobile" />
          <p>As Project Manager at KeelWorks, I lead the Water Utility Application, strengthening communication between residents and the West Whidbey Water Authority to ensure reliable, equitable access to water through agile delivery and cross-functional collaboration. I focus on user experience and efficient digital solutions and am grateful to be part of KeelWorks and highly recommend KeelWorks for its supportive, growth-focused, and collaborative culture.</p>
        </div>
      </section>

      <!-- Why Nisha Section -->
      <section class="section dark-gray two-voices-section">
        <h2>Why Nisha?</h2>
        <p>Nisha stands out for the way she leads teams and drives work forward with focus and consistency. With over ten years of project management experience, she brings clarity to complex initiatives and improved how our finance team collaborates through more transparent processes. On the Whidbey Project (a web and mobile app that improves communication between residents) and the West Whidbey Water Authority, she excelled at stakeholder alignment and scope management. Her calm, results-driven approach reflects KeelWorks' values.</p>
      </section>

      <!-- Team of the Month Section -->
      <section class="section light-gray first-section">
        <h2>Team of the Month: QA (Quality Assurance)</h2>
        <img class="gratitude_image" src="${teamOfTheMonthImg}" alt="Team of the Month" />
        <p>The QA team ensures product excellence by thoroughly testing every feature for functionality, usability, performance, and accessibility. Through detailed testing and execution, we uphold quality standards and prevent issues before release. Our goal is to deliver a reliable, seamless, and user-friendly experience to every end user.</p>
      </section>

      <!-- Founder's Message Section -->
      <section class="section first-section">
        <h2>Founder's Message</h2>
        <p>As we begin 2026, KeelWorks enters a pivotal year of growth and momentum!</p>
        <p>We are excited to roll out our new learning management system and launch our core competency courses, laying the foundation for the long-awaited KeelMasters program.</p>
        <p>These milestones reflect years of vision and collaboration coming to life from our incredible team, many of whom we hope to show in The Current, our new newsletter. Thank you for being part of this journey: we look forward to an inspiring year of learning, innovation, and impact ahead.</p>
      </section>
    </div>
  `;

  return (
    <div className="pt-24 sm:pt-20 bg-white">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
