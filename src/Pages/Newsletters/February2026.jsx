// src/Pages/Newsletters/February2026.jsx
import { useEffect } from "react";
import logo from "../../assets/images/Newsletters/February2026/NewLogo.png";
import donateIcon from "../../assets/images/Newsletters/February2026/DONATEHAND.png";
import keelMasterImg from "../../assets/images/Newsletters/February2026/keelmaster.jpg";
import thomasImg from "../../assets/images/Newsletters/February2026/Thomas.jpg";
import whidbeyImg from "../../assets/images/Newsletters/February2026/whidbey.jpg";
import malvikaImg from "../../assets/images/Newsletters/February2026/malvika.jpg";

export default function February2026Newsletter() {
  useEffect(() => {
    document.title = "KeelWorks — February 2026 Newsletter";
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
      
      h3 {
        font-family: 'Raleway', Arial, sans-serif !important;
        font-size: 20px !important;
        font-weight: 600 !important;
        line-height: 28px !important;
        color: #212121 !important;
        text-align: left !important;
        margin: 0 0 12px 0 !important;
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
      
      /* Header - White background */
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
        background: #EBEBEB;
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
          <span class="year">FEB '26</span>
        </div>
      </header>

      <!-- KeelMaster Program Section -->
      <section class="section first-section">
        <h1>KeelMaster Program</h1>
        <h3>Turning First Chances into Real Careers</h3>
        <img class="gratitude_image" src="${keelMasterImg}" alt="KeelMaster enrolled watching a video of Thomas Garrod" />
        <p style="margin: 0; line-height: 1.5; color: #333333;">KeelMaster launches in Africa.</p>
        <p>Our new program is designed for unemployed individuals seeking to reinvent themselves as well as at-risk students, who need a core group to support their development. Each team includes a facilitator and completes nine core competency courses that begins with analyzing barriers and concludes with creating action plans for individual goals. Progress is transparent within the team, and team members hold each other accountable for progress and support each other through their development, with the goal of remaining a network long after their time with KeelWorks concludes. Our first participants will be refugees from Sudan and Somalia whose experiences will help us to refine KeelMaster for future cohorts.</p>
      </section>

      <!-- Thomas Section -->
      <section class="section light-gray">
        <h2>From Rejection to Opportunity: The Story Behind KeelWorks</h2>
        <img class="gratitude_image" src="${thomasImg}" alt="Thomas Garrod, KeelWorks' Founder" />
        <p style="margin: 0; line-height: 1.5;">"It felt like the universe was against me; I was never going to get a good job."</p>
        <p style="margin: 0; line-height: 1.5;">Thomas Garrod's journey—from setbacks, learning disabilities, and rejection to building KeelWorks—became the foundation for a mission rooted in opportunity. KeelWorks exists to turn potential into experience, and experience into careers, ensuring no one is left behind simply for lacking a first chance.</p>
        <p style="margin: 0; line-height: 1.5;"><a href="https://blog.keelworks.org/what-was-the-inspiration-behind-the-keelworks-foundation-thomas-garrod/">Read KeelWorks' Story →</a></p>
      </section>

      <!-- Technology Section -->
      <section class="section">
        <h2>Building Technology That Serves Real Communities</h2>
        <img class="gratitude_image" src="${whidbeyImg}" alt="Deception Pass, Whidbey Island, WA" />
        <p style="margin: 0; line-height: 1.5;">West Whidbey Water Utility is a small, independent system serving a close-knit community on <b>Whidbey Island</b> in Washington State. With limited staff and resources, most utility work traditionally happened behind the scenes, often with little notice, which surprised and inconvenienced the island's residents. <b>KeelWorks is developing the West Whidbey Water Utility App to connect residents, administrators, and technicians through one centralized platform</b>, providing advance and real-time notices and about public projects. If successful, this app can be scaled to support other communities facing similar challenges.</p>
      </section>

      <!-- Hands-On Experience Section -->
      <section class="section dark-gray two-voices-section">
        <h2>How Hands-On Experience Transforms Careers</h2>
        <p>"During my time at KeelWorks, I built a frontend feature from scratch that had to function across devices and real user scenarios. One major challenge was handling layout and interaction edge cases that behaved differently depending on screen size and data flow. Solving this pushed me to understand component structure, state management, and performance more deeply. Collaborating with designers and backend developers taught me how real products evolve through iteration, clear communication, and problem-solving. The mentorship and feedback helped me take ownership and grow as a developer."</p>
        <p><b>— Rushikesh Balkrushna Solanke, Front End Developer</b></p>
      </section>

      <!-- Malvika Sharma Section - DESKTOP VERSION -->
      <section class="section bang-section desktop-only light-gray">
        <div class="bang-content">
          <h2 style="margin: 0; color: #212121;">Associate of the Month</h2>
          <h3>Malvika Sharma - HR Recruitment</h3>
          <p style="line-height: 0.1;"><b>In Her Own Words</b></p>
          <p>My experience as a Talent Acquisition Associate at KeelWorks has been highly enriching. I have supported end-to-end hiring, collaborated with teams on role requirements, screened candidates, and improved recruitment workflows. This role has strengthened my communication and organizational skills in a mission-driven environment.</p>
        </div>
        <img src="${malvikaImg}" alt="Malvika Sharma" class="bang-image" />
      </section>

      <!-- Malvika Sharma Section - MOBILE VERSION -->
      <section class="section mobile-only" style="background: #EBEBEB;">
        <div class="bang-content">
          <h2>Malvika Sharma - Associate of the Month</h2>
          <img src="${malvikaImg}" alt="Malvika Sharma" class="bang-image-mobile" />
          <p>My experience as a Talent Acquisition Associate at KeelWorks has been highly enriching. I have supported end-to-end hiring, collaborated with teams on role requirements, screened candidates, and improved recruitment workflows. This role has strengthened my communication and organizational skills in a mission-driven environment.</p>
        </div>
      </section>

      <!-- Why She Shines Section -->
      <section class="section light-gray two-voices-section">
        <h3>Why She Shines</h3>
        <p>Malvika excels across all aspects of recruiting volunteers, assessing candidate suitability and balancing technical fit with behavioral and values alignment—critical in a collaborative work environment. She has built excellent rapport with hiring managers, who regularly commend her for providing superior candidates for specialized, high-priority roles and value her as a strategic partner.</p>
      </section>

      <!-- Founder's Message Section -->
      <section class="section first-section">
        <h2>Founder's Message</h2>
        <h3 style="margin: 0 0 12px 0; line-height: 1.5; color: #212121;">Monthly thoughts from our founder, Thomas Garrod</h3>
        <p style="margin: 0 0 12px 0; line-height: 1.5;">February is a reminder that growth rarely happens overnight and never without effort. At KeelWorks, we see it every day in the associates who take on challenges for the first time, in projects that turn ideas into real-world impact, and in communities that benefit from lives changed for the better.</p>
        <p style="margin: 0 0 12px 0; line-height: 1.5;">KeelWorks was built on the belief that potential exists everywhere, but it sometimes lies dormant, undiscovered, unrealized. Our work is about bringing everyone to the feast with learning, hands-on experience, mentorship, and a mutually supportive team environment. If we are lucky, we change lives. Whatever the challenge, our goal remains the same: full workplace inclusion.</p>
        <p style="margin: 0 0 12px 0; line-height: 1.5;">Thank you for being here - with us. Your continued support makes all the difference in the world.</p>
        <p>Thomas</p>
      </section>

      <!-- Donation Section -->
      <section class="section donation-purple donation-section">
        <h2>Your Support Makes A Difference</h2>
        <p>The work we do wouldn't be possible without the generosity of our supporters. Your donation helps us get people to work. <a href="https://www.every.org/keelworks-foundation?donateTo=keelworks-foundation#/donate/card">Every.org</a> is KeelWorks' secure donation platform. It does not save your credit card information. Thank you for your support!</p>
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
