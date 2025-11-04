// src/Pages/Newsletters/November2025.jsx
import { useEffect } from "react";
import logo from "../../assets/images/Newsletters/November2025/KeelWorks-logo.png";
import donateIcon from "../../assets/images/Newsletters/November2025/DONATEHAND.png";
import associateImg from "../../assets/images/Newsletters/November2025/november_assosciate.jpg";

export default function November2025Newsletter() {
  useEffect(() => {
    document.title = "KeelWorks – November 2025 Newsletter";
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
      h1, h2, h3, h4, h5, h6 {
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
        margin-bottom: 10px;
      }
      
      .logo {
        width: 200px;
        height: auto;
        border: 0;
        max-width: 200px;
      }
      
      .year {
        font-family: 'Raleway', Arial, sans-serif !important;
        font-size: 18px !important;
        font-weight: 500 !important;
        color: #ffffff !important;
      }
      
      .newsletter-title {
        font-family: 'Raleway', Arial, sans-serif !important;
        font-size: 24px !important;
        font-weight: 600 !important;
        color: #ffffff !important;
        margin: 0 !important;
        line-height: 31px !important;
        text-align: left !important;
      }
      
      /* Sections */
      .section {
        padding: 28px 20px;
        margin: 0;
      }
      
      /* Hero Section */
      .hero-section {
        background: #F7F7F7;
      }
      
      /* Donation Section */
      .donation-section {
        background: #D0BCD5;
        padding: 32px 20px;
        text-align: left;
      }
      
      /* Two Voices Section */
      .two-voices-section {
        background: #E5E5E5;
      }
      
      .voice-divider {
        width: 100%;
        height: 1px;
        background-color: #999999;
        margin: 20px 0;
      }
      
      /* Bang Section */
      .bang-section {
        background: #F7F7F7;
        padding: 28px 20px;
        display: flex;
        gap: 20px;
        align-items: flex-start;
      }
      
      .bang-content {
        flex: 1;
      }
      
      .bang-image {
        width: 250px;
        height: auto;
        object-fit: cover;
        border-radius: 8px;
        flex-shrink: 0;
      }
      
      /* Difference Section */
      .difference-section {
        background: #D9D9D9;
      }
      
      /* Founder Section */
      .founder-section {
        background: #F1F1F1;
      }
      
      /* Buttons */
      .cta-button {
        display: inline-block;
        background: #825E8B;
        color: #ffffff;
        padding: 12px 20px;
        text-decoration: none;
        border-radius: 4px;
        font-family: 'Lato', Arial, sans-serif;
        font-weight: 500;
        font-size: 18px;
        line-height: 18px;
        text-align: center;
        vertical-align: middle;
        border: 0;
        box-sizing: border-box;
        cursor: pointer;
        transition: background-color 0.2s ease;
      }
      
      .cta-button:hover {
        background: #6d4c72;
      }
      
      .cta-button img {
        width: 22px;
        height: 22px;
        margin-right: 8px;
        vertical-align: middle;
        border: 0;
        filter: invert(1);
      }
      
      /* Links */
      a {
        color: var(--accent);
        text-decoration: underline;
      }
      
      a:hover {
        color: #1d4ed8;
      }
      
      /* Responsive Design */
      @media (max-width: 768px) {
        .newsletter-container {
          margin: 0;
          border-radius: 0;
        }
        
        .header-content {
          flex-direction: column;
          align-items: flex-start;
        }
        
        .bang-section {
          flex-direction: column;
        }
        
        .bang-image {
          width: 100%;
          height: auto;
          margin-top: 20px;
        }
        
        .section {
          padding: 24px 20px;
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
        <h1 class="newsletter-title">November Newsletter</h1>
      </header>

      <!-- Invest in KeelWorks Section -->
      <section class="section hero-section">
        <h2>Invest in KeelWorks (Why Your Contribution Matters?)</h2>
        <p>Investing in KeelWorks is more than a donation – it's a partnership in building lives of purpose and resilience. Your support sustains the KeelMaster program, which equips individuals with the guidance, structure, and hope needed to navigate challenges and move forward with confidence. We've seen lives transformed through our work, but we can't do it without you. Each contribution helps us strengthen our foundation, grow our reach, and continue developing tools that foster stability and opportunity. Every dollar, no matter the size, fuels a wave of growth, gratitude, and lasting change.</p>
      </section>

      <!-- Donation Section -->
      <section class="section donation-section">
        <h3>Your Support Makes A Difference</h3>
        <p>The work we do wouldn't be possible without the generosity of our supporters. Your donation helps us get people to work.</p>
        <a href="https://www.every.org/keelworks-foundation" class="cta-button" target="_blank" rel="noopener noreferrer">
          <img src="${donateIcon}" alt="Donate" />
          Donate
        </a>
      </section>

      <!-- Two Voices Section -->
      <section class="section two-voices-section">
        <h2>Two Voices</h2>
        <p>Hi, my name is Ademola, and I'm an associate project manager in the KeelWings program, which supports recent graduates. Here at KeelWorks, I collaborate with a dynamic and supportive team that helps me grow as a project manager. Learning at Keelworks feels like being part of a family. It's a place where I can grow my confidence, share ideas, and continue to evolve professionally.</p>
        
        <div class="voice-divider"></div>
        
        <p>I'm Sravani, an IT and Cybersecurity professional whose journey began in entry-level IT operations and grew through 4 years in IT security, which inspired me to earn my Master's in Cybersecurity. Right after graduation, KeelWorks gave me the chance to step into a higher role as a cybersecurity professional. Through the KeelMate program, I'm continuously strengthening my skills, learning from mistakes, and building a safer digital future one step at a time.</p>
      </section>

      <!-- Bang Spotlight Section -->
      <section class="bang-section">
        <div class="bang-content">
          <h2>Bang: Our Curious and Fast-Learning Star</h2>
          <p>I've always wanted to apply my finance background and knowledge to something beyond maximizing profits. At KeelWorks, every spreadsheet I build and every budget I manage supports the community and helps people grow. Although I've been part of the team for a short time, I've learned so much from my colleagues. This finance role enables me to hone my skills in an area I love while helping others achieve success.</p>
        </div>
        <img src="${associateImg}" alt="Bang Hai Nguyen - Associate of the Month" class="bang-image" />
      </section>

      <!-- The Difference Bang Makes Section -->
      <section class="section difference-section">
        <h2>The Difference Bang Makes</h2>
        <p>Bang may be new to our team, but he's already demonstrated remarkable dedication, initiative, and a genuine eagerness to learn. He approaches every task with curiosity and professionalism, and his ability to adapt quickly stands out. Even in a short time, he's added great value by helping develop a detailed budget that shows donors where their contributions go and how we plan to utilize their funds effectively.</p>
      </section>

      <!-- Founder's Message Section -->
      <section class="section founder-section">
        <h2>Founder's Message</h2>
        <p>November is Giving Month, a time for thanks. We are so grateful for our associates and our donors, who are especially critical as governments and corporations cut support and gifts. Now we have a critical need for $5,000 to cover the costs of hosting and developing our KeelMaster program.</p>
        <p>We've operated almost completely without funds, but part of that is due to in kind donations we are losing. <strong>Your donation - even as little as $10 - can make a significant difference.</strong></p>
      </section>
    </div>
  `;

  return (
    <div className="pt-24 sm:pt-20 bg-white">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
