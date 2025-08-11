import logo from "../../assets/images/Newsletters/June2025/keelworks_logo.jpg";
import associateImg from "../../assets/images/Newsletters/June2025/associate.png";
import diversityImg from "../../assets/images/Newsletters/June2025/diversity.png";
import teamImg from "../../assets/images/Newsletters/June2025/team.png";
import founder from "../../assets/images/Newsletters/MayNewsletter/Thomas-G.jpg";

// src/Pages/Newsletters/June2025.jsx
import { useEffect } from "react";

export default function June2025Newsletter() {
  useEffect(() => {
    document.title = "KeelWorks – June 2025 Newsletter";
  }, []);

  // NOTE: Add these to public/index.html (or Vite's index.html) <head>:
  // <link href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap" rel="stylesheet" />
  // <link href="https://fonts.googleapis.com/css?family=Raleway:500,600&display=swap" rel="stylesheet" />

  const html = `
    <style>
      /* Scoped to .kw-newsletter to avoid global CSS leaks */
      .kw-newsletter, .kw-newsletter table, .kw-newsletter td {
        margin: 0;
        padding: 0;
        width: 100% !important;
        -webkit-text-size-adjust: 100%;
        overflow-x: hidden !important;
      }
      .kw-newsletter img {
        display: block;
        max-width: 100% !important;
        height: auto !important;
      }
      .kw-newsletter table {
        border-collapse: collapse;
        table-layout: fixed;
        width: 100%;
        word-break: break-word;
      }
      .kw-newsletter h1, .kw-newsletter h2, .kw-newsletter h3, .kw-newsletter p { margin: 0; padding: 0; }
      .kw-newsletter .section-title {
        font-family: 'Raleway', Arial, sans-serif;
        font-size: 26px;
        font-weight: 600;
        margin-bottom: 12px;
      }
      .kw-newsletter .body-text {
        font-size: 18px;
        font-family: 'Lato', Arial, sans-serif;
      }

      /* ✅ Mobile adjustments */
      @media only screen and (max-width: 600px) {
        .kw-newsletter .container { width: 100% !important; max-width: 100% !important; }
        .kw-newsletter .mobile-padding { padding: 12px !important; }
        .kw-newsletter .section-title { font-size: 20px !important; }
        .kw-newsletter .body-text { font-size: 14px !important; }
        .kw-newsletter .mobile-header { font-size: 26px !important; }
        .kw-newsletter .mobile-image {
          width: 100% !important;
          max-width: 100% !important;
          height: auto !important;
          display: block !important;
          margin: 0 auto 15px !important;
          float: none !important;
        }
        .kw-newsletter .mobile-button {
          display: block !important;
          width: 80% !important;
          padding: 14px 18px !important;
          font-size: 18px !important;
          margin: 10px auto;
        }
        .kw-newsletter .stack-on-mobile { display: block !important; width: 100% !important; max-width: 100% !important; }
        .kw-newsletter .footer-links, .kw-newsletter .footer-social {
          display: block !important; width: 100% !important; text-align: center !important; padding: 10px 0 !important;
        }
        .kw-newsletter .footer-social img { margin: 0 8px !important; }
        .kw-newsletter .desktop-padding { padding-left: 0 !important; }
        .kw-newsletter .adjust-gap { padding-left: 1px !important; padding-right: 1px !important; }
        .kw-newsletter .desktop-only { display: none !important; }
        .kw-newsletter .mobile-only { display: table !important; }
      }
    </style>

    <div class="kw-newsletter" style="background-color:#dcebf7; margin:0; padding:0;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="padding:20px;">
        <tr>
          <td align="center">
            <table role="presentation" class="container" width="100%" style="max-width:800px; background:#dcebf7; border-radius:8px; overflow:hidden; margin:0 auto;">

              <!-- Header -->
              <tr>
                <td align="center" style="padding:20px;">
                  <h1 class="mobile-header" style="font-family:'Raleway',Arial,sans-serif; font-size:38px; font-weight:600; color:#0a154f;">Monthly Newsletter</h1>
                </td>
              </tr>

              <!-- Logo -->
              <tr>
                <td align="center" style="padding:0 20px 20px;">
                  <img src="${logo}" alt="Keelworks Logo" style="max-width:350px; height:auto;" loading="lazy">
                </td>
              </tr>

              <!-- Quote -->
              <tr>
                <td style="background:#394687; padding:24px; text-align:center; color:#fff;">
                  <h2 class="section-title" style="font-family:'Raleway', Arial, sans-serif; font-size:24px; line-height:1.4; margin:0;">
                    “When we are no longer able to change the situation, we are challenged to change ourselves.”<br><span style="display:block; text-align:center; font-size:18px; font-weight:normal; margin-top:8px;">- Viktor Frankl</span>
                  </h2>
                </td>
              </tr>

              <!-- Founder Message -->
              <tr>
                <td style="background:#869ba9; color:#fff; padding:28px;">
                  <h2 class="section-title">Founder's Message for June 2025</h2>

                  <!-- Desktop version -->
                  <table class="desktop-only" role="presentation" width="100%" cellspacing="0" cellpadding="0" style="display:table;">
                    <tr>
                      <td style="padding:0;">
                        <img
                          src="${founder}"
                          alt="Founder"
                          style="float:right; border-radius:8px; width:220px; height:auto; margin-left:15px;"
                          loading="lazy"
                        />

                        <p style="margin:0 0 12px; line-height:1.6; text-align:left; color:#fff; font-family:'Lato', Arial, sans-serif; font-size:18px; word-break:break-word;">
                          Victor Frankl, with his holocaust experience has informed much of the philosophy that drives our KeelMaster core competencies. The quote above is relevant because change is what KeelWorks is all about. 
                        </p>
                        <p style="margin:0 0 12px; line-height:1.6; text-align:left; color:#fff; font-family:'Lato', Arial, sans-serif; font-size:18px; word-break:break-word;">
                          On June 2nd, we marked the start of our 18th year. With over 1000 interns each year and the overwhelming majority leaving with jobs, we are making a difference. Most of you reading this have played a part in making this happen, and I am very grateful for your support.
                        </p>
                        <p style="margin:0 0 12px; line-height:1.6; text-align:left; color:#fff; font-family:'Lato', Arial, sans-serif; font-size:18px; word-break:break-word;">
                          We continue to make progress building assets for KeelMaster program. That program has always been about getting the most challenged unemployed to work, but we also see it supporting at-risk high school students. We believe helping students this way can prevent the kind of issues leading to a need for KeelMaster later.
                        </p>
                        <p style="margin:0 0 12px; line-height:1.6; text-align:left; color:#fff; font-family:'Lato', Arial, sans-serif; font-size:18px; word-break:break-word;">
                          I can’t end a monthly message without once again asking for your financial support. We sincerely appreciate every donation.
                        </p>
                      </td>
                    </tr>
                  </table>

                  <!-- Mobile version -->
                  <table class="mobile-only" role="presentation" width="100%" cellspacing="0" cellpadding="0" style="display:none;">
                    <tr>
                      <td style="text-align:center; padding-bottom:10px;">
                        <img src="${founder}" alt="Founder" style="display:block; border-radius:8px; width:100%; max-width:220px; height:auto; margin:0 auto;" loading="lazy" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p style="margin:0 0 12px; line-height:1.6; text-align:left; color:#fff; font-family:'Lato', Arial, sans-serif; font-size:18px; word-break:break-word;">
                          Victor Frankl, with his holocaust experience has informed much of the phylosophy that drives our KeelMaster core competencies. The quote above is relevant because change is what KeelWorks is all about. 
                        </p>
                        <p style="margin:0 0 12px; line-height:1.6; text-align:left; color:#fff; font-family:'Lato', Arial, sans-serif; font-size:18px; word-break:break-word;">
                          On June 2nd, we marked the start of our 18th year. With over 1000 interns each year and the overwhelming majority leaving with jobs, we are making a difference. Most of you reading this have played a part in making this happen, and I am very grateful for your support.
                        </p>
                        <p style="margin:0 0 12px; line-height:1.6; text-align:left; color:#fff; font-family:'Lato', Arial, sans-serif; font-size:18px; word-break:break-word;">
                          We continue to make progress building assets for KeelMaster program. That program has always been about getting the most challenged unemployed to work, but we also see it supporting at-risk high school students. We believe helping students this way can prevent the kind of issues leading to a need for KeelMaster later.
                        </p>
                        <p style="margin:0 0 12px; line-height:1.6; text-align:left; color:#fff; font-family:'Lato', Arial, sans-serif; font-size:18px; word-break:break-word;">
                          I can’t end a monthly message without once again asking for your financial support. We sincerely appreciate every donation.
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Donate -->
              <tr>
                <td align="center" style="background:#5c98ad; padding:28px; color:#fff;">
                  <h2 class="section-title">Your Support Makes a Difference</h2>
                  <p class="body-text" style="margin:0 0 15px;">The work we do wouldn't be possible without your generosity.</p>
                  <a href="https://www.every.org/keelworks-foundation" target="_blank" rel="noopener noreferrer" style="display:inline-block;background:#060e3a;color:#fff;text-decoration:none;padding:14px 40px;border-radius:30px;font-weight:bold;font-size:20px;" class="mobile-button">Donate Now</a>
                </td>
              </tr>

              <!-- Diversity -->
              <tr>
                <td style="background:#446b92; color:#fff; padding:28px;">
                  <h2 class="section-title">Diversity at Keelworks</h2>

                  <!-- Desktop Version -->
                  <table class="desktop-only" role="presentation" width="100%" cellspacing="0" cellpadding="0" style="display:table;">
                    <tr>
                      <td style="padding:0;">
                        <img
                          src="${diversityImg}"
                          alt=""
                          style="float:right; border-radius:10px; width:220px; height:auto; margin-left:15px;"
                          loading="lazy"
                        />

                        <p style="margin:0 0 12px; line-height:1.6; text-align:left; color:#fff; font-family:'Lato', Arial, sans-serif; font-size:18px; word-break:break-word;">
                          What sets me apart is my nontraditional educational journey. After pausing formal schooling in Bangladesh after 8th grade, I turned to self-directed learning while working remotely with international organizations like TED and KeelWorks. Now, as I prepare to study in the U.S. to earn both a high school diploma and an associate degree, I bring cultural adaptability, self-motivation, and a fresh, creative perspective to every team I join.
                        </p>
                        <p style="margin:0 0 12px; line-height:1.6; text-align:left; color:#fff; font-family:'Lato', Arial, sans-serif; font-size:18px; word-break:break-word;">
                          At KeelWorks, I’ve always felt respected, supported, and truly welcomed. The open-minded team creates a safe, empowering space where I’m encouraged to share ideas and grow. It’s not about where you come from—it’s about what you bring to the table. There’s no jealousy, competition, or negativity—just trust, encouragement, and collaboration.
                        </p>
                      </td>
                    </tr>
                  </table>

                  <!-- Mobile Version -->
                  <table class="mobile-only" role="presentation" width="100%" cellspacing="0" cellpadding="0" style="display:none;">
                    <tr>
                      <td style="text-align:center; padding-bottom:10px;">
                        <img src="${diversityImg}" alt="" style="display:block; border-radius:10px; width:100%; max-width:220px; margin:0 auto;" loading="lazy" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p style="margin:0 0 12px; line-height:1.6; text-align:left; color:#fff; font-family:'Lato', Arial, sans-serif; font-size:18px; word-break:break-word;">
                          What sets me apart is my nontraditional educational journey. After pausing formal schooling in Bangladesh after 8th grade, I turned to self-directed learning while working remotely with international organizations like TED and KeelWorks. Now, as I prepare to study in the U.S. to earn both a high school diploma and an associate degree, I bring cultural adaptability, self-motivation, and a fresh, creative perspective to every team I join.
                        </p>
                        <p style="margin:0 0 12px; line-height:1.6; text-align:left; color:#fff; font-family:'Lato', Arial, sans-serif; font-size:18px; word-break:break-word;">
                          At KeelWorks, I’ve always felt respected, supported, and truly welcomed. The open-minded team creates a safe, empowering space where I’m encouraged to share ideas and grow. It’s not about where you come from—it’s about what you bring to the table. There’s no jealousy, competition, or negativity—just trust, encouragement, and collaboration.
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Product -->
              <tr>
                <td style="background:#253c52; color:#fff; padding:28px;">
                  <h2 class="section-title">Monthly Newsletter Application</h2>

                  <p style="margin:0 0 12px; line-height:1.6; text-align:left; color:#fff; font-family:'Lato', Arial, sans-serif; font-size:18px; word-break:break-word;">
                    Neeraj Bodhale, the Project Manager for the Monthly Newsletter App Team, shares his thoughts about the project.
                  </p>
                  <p style="margin:0 0 12px; line-height:1.6; text-align:left; color:#fff; font-family:'Lato', Arial, sans-serif; font-size:18px; word-break:break-word;">
                    The Monthly Newsletter App will make the newsletter publication process quicker, easier, and more efficient.
                  </p>
                  <p style="margin:0 0 12px; line-height:1.6; text-align:left; color:#fff; font-family:'Lato', Arial, sans-serif; font-size:18px; word-break:break-word;">
                    The first iteration has been completed with the rollout of the new template in the May edition of the Monthly Newsletter. The project is in the testing phase—evaluating functionality, gathering feedback, and making improvements. Future iterations will focus on enhancing user experience and expanding features.
                  </p>
                </td>
              </tr>

              <!-- Team -->
              <tr>
                <td style="background:#0a1d2f; color:#fff; padding:28px; text-align:left;">
                  <h2 class="section-title" style="font-family:'Raleway', Arial, sans-serif; font-size:26px; font-weight:600; margin-bottom:12px; padding:0;">
                    Monthly Newsletter Application Team
                  </h2>
                  <img src="${teamImg}" alt="Team" style="display:block; width:100%; max-width:90%; border-radius:10px; height:auto; margin-bottom:15px;" loading="lazy" />

                  <p style="margin:0 0 12px; line-height:1.6; text-align:left; color:#fff; font-family:'Lato', Arial, sans-serif; font-size:18px; word-break:break-word;">
                    Neeraj Bodhale, Monthly Newsletter Application team Project Manager:
                  </p>
                  <p style="margin:0 0 12px; line-height:1.6; text-align:left; color:#fff; font-family:'Lato', Arial, sans-serif; font-size:18px; word-break:break-word;">
                    Proud to lead a creative and committed team. Their collaboration and ownership made the June newsletter a success. Grateful for everyone's effort!
                  </p>
                </td>
              </tr>

              <!-- Volunteer -->
              <tr>
                <td style="background:#5486b8; color:#fff; padding:28px;">
                  <h2 class="section-title">Associate of the Month</h2>

                  <!-- Desktop Version -->
                  <table class="desktop-only" role="presentation" width="100%" cellspacing="0" cellpadding="0" style="display:table;">
                    <tr>
                      <td style="padding:0;">
                        <img
                          src="${associateImg}"
                          alt=" Gauri Namdev Parab"
                          style="float:right; border-radius:10px; width:220px; height:auto; margin-left:15px;"
                          loading="lazy"
                        />
                        <h3 style="font-size:22px; margin-bottom:10px;"> Gauri Namdev Parab</h3>

                        <p style="margin:0 0 12px; line-height:1.6; text-align:left; color:#fff; font-family:'Lato', Arial, sans-serif; font-size:18px; word-break:break-word;">
                          Serving as a Marketing Associate here since August of '24, this experience has been enriching. Teaming with deeply committed associates in diverse roles has been challenging and exhilarating.
                        </p>
                        <p style="margin:0 0 12px; line-height:1.6; text-align:left; color:#fff; font-family:'Lato', Arial, sans-serif; font-size:18px; word-break:break-word;">
                          Especially important is exposure to the strategic discussions and the application of my learning in real-world marketing. I’ve worked with talented people, applied skills learned in school, and learned from peers. I’ve gained confidence having accepted responsibility, successfully met those responsibilities, and enjoyed the respect of my peers. The range of tasks is exhilarating, and I love being at the center of such a diverse and competent team. I love being part of a team that depends on me and that I depend on.
                        </p>
                        <p style="margin:0 0 12px; line-height:1.6; text-align:left; color:#fff; font-family:'Lato', Arial, sans-serif; font-size:18px; word-break:break-word;">
                          I am conscious of the many at this foundation worthy of this recognition. I am humbled and honored to be the recipient of this honor.
                        </p>

                        <strong style="display:block;margin-top:12px;font-size:18px;">Why  Gauri Namdev Parab?</strong>

                        <p style="margin:0 0 12px; line-height:1.6; text-align:left; color:#fff; font-family:'Lato', Arial, sans-serif; font-size:18px; word-break:break-word;">
                          Gauri is a dedicated and consistent performer. We depend on her for the monthly layout and content structuring for our newsletter. She is as regular as the sunrise and sunset and just as efficient. She quietly goes about her work, accepting revisions and critiques with equanimity. She makes us better and we could not accomplish our monthly newsletters without her.
                        </p>
                      </td>
                    </tr>
                  </table>

                  <!-- Mobile Version -->
                  <table class="mobile-only" role="presentation" width="100%" cellspacing="0" cellpadding="0" style="display:none;">
                    <tr>
                      <td style="text-align:center; padding-bottom:10px;">
                        <img src="${associateImg}" alt=" Gauri Namdev Parab" style="display:block; border-radius:10px; width:100%; max-width:220px; margin:0 auto;" loading="lazy" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h3 style="font-size:22px; text-align:center;"> Gauri Namdev Parab</h3>

                        <p style="margin:0 0 12px; line-height:1.6; text-align:left; color:#fff; font-family:'Lato', Arial, sans-serif; font-size:18px; word-break:break-word;">
                          Serving as a Marketing Associate here since August of '24, this experience has been enriching. Teaming with deeply committed associates in diverse roles has been challenging and exhilarating.
                        </p>
                        <p style="margin:0 0 12px; line-height:1.6; text-align:left; color:#fff; font-family:'Lato', Arial, sans-serif; font-size:18px; word-break:break-word;">
                          Especially important is exposure to the strategic discussions and the application of my learning in real-world marketing. I’ve worked with talented people, applied skills learned in school, and learned from peers. I’ve gained confidence having accepted responsibility, successfully met those responsibilities, and enjoyed the respect of my peers. The range of tasks is exhilarating, and I love being at the center of such a diverse and competent team. I love being part of a team that depends on me and that I depend on.
                        </p>
                        <p style="margin:0 0 12px; line-height:1.6; text-align:left; color:#fff; font-family:'Lato', Arial, sans-serif; font-size:18px; word-break:break-word;">
                          I am conscious of the many at this foundation worthy of this recognition. I am humbled and honored to be the recipient of this honor.
                        </p>

                        <strong style="display:block;margin-top:12px;font-size:18px;">Why  Gauri Namdev Parab?</strong>

                        <p style="margin:0 0 12px; line-height:1.6; text-align:left; color:#fff; font-family:'Lato', Arial, sans-serif; font-size:18px; word-break:break-word;">
                          Gauri is a dedicated and consistent performer. We depend on her for the monthly layout and content structuring for our newsletter. She is as regular as the sunrise and sunset and just as efficient. She quietly goes about her work, accepting revisions and critiques with equanimity. She makes us better and we could not accomplish our monthly newsletters without her.
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  `;

  return (
  <div className="pt-24 sm:pt-20 bg-[#dcebf7]">
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </div>
);


}

