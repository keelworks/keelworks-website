import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Policy = () => {
  const location = useLocation();
  const [activePolicy, setActivePolicy] = useState("non-discrimination");

  useEffect(() => {
    // Set active policy based on URL
    if (location.pathname === "/privacy_policy") {
      setActivePolicy("privacy");
    } else {
      setActivePolicy("non-discrimination");
    }
  }, [location.pathname]);

  const renderPolicyContent = () => {
    if (activePolicy === "privacy") {
      return (
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-left">
            Digital Services Privacy Policy
          </h2>
          <p className="text-[1.2rem] text-black mt-8">
            Effective Date:
            <span className="text-gray-500 font-bold"> September 15, 2025</span>
          </p>

          <p className="text-[1.2rem] text-black mt-8">
            This policy details how we collect, use, and protect your
            information when you use our digital services.
          </p>

          <p className="text-[1.2rem] text-black mt-8">
            <strong>Information We Collect:</strong>
          </p>
          <p className="text-[1.2rem] text-black mt-4">
            <strong>Personal Information:</strong> Name, email address, and/or
            other contact information you provide.
          </p>
          <p className="text-[1.2rem] text-black mt-4">
            <strong>Non-Personal Information:</strong> Browser type, device
            information, pages visited, and general website usage data collected
            through cookies or analytics tools.
          </p>

          <p className="text-[1.2rem] text-black mt-8">
            <strong>How We Use Your Information:</strong>
          </p>
          <ul className="list-disc pl-8 my-4">
            <li>To respond to your questions or requests</li>
            <li>
              To send updates about our programs, events, or newsletters when
              you opt in
            </li>
            <li>To process donations securely</li>
            <li>To improve our website and services</li>
          </ul>

          <p className="text-[1.2rem] text-black mt-8">
            <strong>Sharing of Information:</strong> We do not sell, trade, or
            rent your personal information. We may share information with
            trusted service providers (such as payment processors or email
            services) only as needed to operate the website and deliver
            services.
          </p>

          <p className="text-[1.2rem] text-black mt-8">
            <strong>Cookies & Tracking:</strong> We use cookies to improve your
            browsing experience and analyze website traffic. You can disable
            cookies in your browser settings if you prefer.
          </p>

          <p className="text-[1.2rem] text-black mt-8">
            <strong>Your Choices:</strong>
          </p>
          <ul className="list-disc pl-8 my-4">
            <li>
              You may unsubscribe from emails at any time by contacting us below
            </li>
            <li>
              You can request access to, correction of, or deletion of your
              personal information by contacting us
            </li>
          </ul>

          <p className="text-[1.2rem] text-black mt-8">
            <strong>Data Security:</strong> We take reasonable steps to protect
            your information and we have never had a breach. That said, no
            system is completely secure and we cannot guarantee absolute
            security. We will continue to take every effort to protect your data
            and we will be completely transparent and immediate in notification
            should we fail you at any time.
          </p>

          <p className="text-[1.2rem] text-black mt-8">
            <strong>External Links:</strong> Our website may link to other
            sites. We are not responsible for the privacy practices of those
            websites.
          </p>

          <p className="text-[1.2rem] text-black mt-8">
            <strong>Changes to this Policy:</strong> We may update this privacy
            policy from time to time. Any changes will be posted on this page
            with a new effective date.
          </p>

          <p className="text-[1.2rem] text-black mt-8">
            <strong>Contact Us:</strong> If you have any questions about this
            privacy policy, please contact us at:
            <span className="block mt-2">
              Email:{" "}
              <a
                href="mailto:thomas.garrod@keelworks.org"
                className="text-blue-600 hover:underline"
              >
                thomas.garrod@keelworks.org
              </a>
              <br />
              Address: 2398 West Beach Road, Oak Harbor, WA 98277
            </span>
          </p>
        </div>
      );
    }
    // Default to non-discrimination policy
    return (
      <div>
        <h2 className="text-3xl md:text-5xl font-bold text-left">
          Non-discrimination Policy Page
        </h2>
        <p className="text-[1.2rem] text-black mt-8">
          Effective Date:
          <span className="text-gray-500 font-bold"> July 10, 2024</span>
        </p>
        <p className="text-[1.2rem] text-black mt-8">
          Purpose: KeelWorks Foundation is committed to creating an inclusive
          environment that values diversity and promotes equality for all
          individuals. This policy reaffirms our dedication to fostering an
          organization and community that is free from discrimination and
          harassment.
          <span className="block">
            Scope: This policy applies to all KeelWorks Foundation employees,
            volunteers, interns, contractors, vendors, and third-party partners.
          </span>
        </p>
        <p className="text-[1.2rem] text-black mt-8">
          Protected Characteristics: We do not discriminate on the basis of:
        </p>
        <ul className="list-disc pl-8 my-4">
          <li>Age</li>
          <li>Race</li>
          <li>Creed</li>
          <li>Color</li>
          <li>Religion</li>
          <li>National origin</li>
          <li>Ancestry</li>
          <li>Disability</li>
          <li>Veteran status</li>
          <li>Sexual orientation</li>
          <li>Gender identity or expression</li>
          <li>Genetic information</li>
          <li>Marital status</li>
          <li>Citizenship status</li>
          <li>Pregnancy or family status</li>
          <li>Gender reassignment</li>
          <li>
            Any other basis protected by US Federal Government and the State of
            Washington
          </li>
        </ul>
        <p className="text-[1.2rem] text-black mt-8">
          Definition of Discrimination: Discrimination includes, but is not
          limited to, harassment, bias, or unequal treatment based on any
          protected characteristic.
        </p>
        <p className="text-[1.2rem] text-black">
          <span className="block">Reporting:</span>It is crucial to report any
          instances of discrimination to ensure a safe and inclusive environment
          for all employees, volunteers and all other individuals associated
          with KeelWorks. Reporting such incidents allows the organization to
          address and rectify inappropriate behavior promptly, preventing
          further harm and reinforcing our commitment to diversity and equality.
          Every report contributes to creating a respectful organization where
          everyone feels valued.
        </p>
        <p className="text-[1.2rem] text-black mt-8">
          Any individual who believes they have experienced or witnessed
          discrimination should report the incident to:
        </p>
        <ul className="list-disc pl-8 my-4">
          <li>The Director of HR</li>
          <li>Any member of the HR team</li>
          <li>
            The anonymous reporting hotline{" "}
            <span className="font-medium italic">+1 360 207 4450</span>
          </li>
        </ul>
        <p className="text-[1.2rem] text-black mt-8">
          All reports will be treated confidentially and investigated promptly.
          <span className="block">
            Investigation and Resolution Procedures:
          </span>
          <span className="block">
            - Investigations will be conducted fairly, impartially, and in a
            timely manner.
          </span>
          <span className="block">
            - Appropriate action will be taken according to the organization's
            disciplinary policy and procedures to address and resolve incidents
            of discrimination.
          </span>
          <span className="block">
            - The outcome of the investigation and any resulting actions will be
            communicated to the reporting individual.
          </span>
          <span className="block mt-8">
            Training and Education: KeelWorks Foundation will provide regular
            training and workshops to promote diversity, equity, and inclusion,
            and to ensure employees understand this policy and its implications.
          </span>
          <span className="block mt-8">
            Accountability and Monitoring: The foundation will maintain a system
            to track and monitor incidents, investigations, and resolutions,
            ensuring accountability and continuous improvement.
          </span>
          <span className="block mt-8">
            Inclusive Language: We strive to use inclusive language and respect
            individuals' preferred names, pronouns, and identities.
          </span>
          <span className="block mt-8">
            Intersectionality: We recognize that individuals may face unique
            challenges based on multiple aspects of their identity and will
            consider intersectionality in our policies and practices.
          </span>
          <span className="block mt-8">
            Third-Party Vendors and Partners: We expect all third-party vendors
            and partners to adhere to this non-discrimination policy.
          </span>
          <span className="block mt-8">
            Review and Updates: This policy will be reviewed and updated
            annually, or as needed, to ensure it remains effective, relevant,
            and compliant with evolving legal and social requirements.
          </span>
          <span className="block mt-8">
            Responsibility: All employees, volunteers, interns and third-party
            partners are responsible for adhering to this policy.
          </span>
          <span className="block">
            Acknowledgement: By engaging with KeelWorks Foundation, individuals
            acknowledge that they have read, understood, and will comply with
            this non-discrimination policy.
          </span>
          <span className="block">
            Contact: If you have any questions or concerns about this policy,
            please reach out to the Director of HR or any member of the
            management team.
          </span>
        </p>
      </div>
    );
  };

  return (
    <div className="w-screen bg-white flex justify-center items-start">
      <div className="w-screen max-w-[3000px] my-[5rem] md:mt-[8rem] flex justify-start items-center">
        <div className="mx-[1rem] md:mx-[2rem] lg:mx-[8rem]">
          <div className="w-full flex flex-col md:flex-row justify-start items-start gap-[2rem] mt-[4rem]">
            <div className="w-full text-left flex flex-col gap-2">
              <p className="text-[1.2rem] font-bold text-gray-500">
                Terms of Service
              </p>
              <button
                onClick={() => setActivePolicy("non-discrimination")}
                className={`text-[1.2rem] text-left px-2 py-1 ${
                  activePolicy === "non-discrimination"
                    ? "font-bold text-black underline border border-black"
                    : "text-black hover:text-gray-600"
                }`}
              >
                Non-discrimination Policy
              </button>
              <button
                onClick={() => setActivePolicy("privacy")}
                className={`text-[1.2rem] text-left px-2 py-1 ${
                  activePolicy === "privacy"
                    ? "font-bold text-black underline border border-black"
                    : "text-black hover:text-gray-600"
                }`}
              >
                Privacy Policy
              </button>
              <p className="text-[1.2rem] text-black">
                Accessibility Statements
              </p>
            </div>
            {renderPolicyContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policy;
