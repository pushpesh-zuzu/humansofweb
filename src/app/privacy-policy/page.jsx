
import ContainerWrapper from "../components/common/Container/ContainerWrapper";
import PaddingWrapper2 from "../components/common/Container/PaddingWrapper2";
import TrustedBy from "../components/common/TrustedBy/TrustedBy";

export const metadata = {
  title: "Privacy Policy | Humans of Web",
  description: "Privacy Policy for Humans of Web – how we collect, use, and protect your data.",
};

const SECTIONS = [
  {
    id: "information-we-collect",
    title: "Section 1: Information We Collect",
    content: [
      {
        type: "paragraph",
        text: `When you visit our website or use our services, Humans of Web ("we", "our", or "us") may collect certain information about you. This includes information you provide directly, such as your name, email address, phone number, and company details when you fill out a contact form, request a proposal, or communicate with us.`,
      },
      {
        type: "paragraph",
        text: `We also automatically collect certain device and usage information — including your IP address, browser type, pages visited, and time spent on our site. This helps us understand how visitors interact with our content and continuously improve your experience.`,
      },
      {
        type: "list",
        heading: "The types of data we may collect include:",
        items: [
          "Contact information (name, email, phone, company name)",
          "Communication history and enquiry details",
          "Device information (IP address, browser, operating system)",
          "Usage data (pages visited, referral source, session duration)",
          "Cookies and similar tracking technologies",
        ],
      },
    ],
  },
  {
    id: "how-we-use-information",
    title: "Section 2: How We Use Your Information",
    content: [
      {
        type: "bold-intro",
        text: "We use the information we collect only for legitimate business purposes:",
      },
      {
        type: "list",
        items: [
          "To respond to your enquiries and provide the services you have requested",
          "To send you proposals, reports, and project-related communications",
          "To improve and personalise your experience on our website",
          "To analyse traffic patterns and optimise our marketing efforts",
          "To comply with legal and regulatory obligations",
        ],
      },
      {
        type: "paragraph",
        text: `We do not sell, rent, or trade your personal information to third parties. All data is handled with care and in line with the human-first values that define how we work.`,
      },
    ],
  },
  {
    id: "disclaimers",
    title: "Section 3: Disclaimers",
    content: [
      {
        type: "bold-intro",
        text: "With respect to our services, Clients must acknowledge the following terms:",
      },
      {
        type: "list",
        items: [
          "All fees, services, documents, recommendations, and reports are confidential.",
          "Humans of Web has no control over the policies of search engines with respect to the types of sites and/or content they accept.",
          "We have no control over website and blog owners removing links and content; such placements will not be refunded or replaced.",
          "Under no circumstances shall Humans of Web be liable for any incidental or consequential damages, loss of profits, or any claims arising from the use of our services.",
          "Humans of Web reserves the right to adjust delivery details to ensure successful results on your behalf.",
        ],
      },
    ],
  },
  {
    id: "cookies",
    title: "Section 4: Cookies",
    content: [
      {
        type: "paragraph",
        text: `Our website uses cookies — default text files stored on your device — to enhance functionality and gather analytics. By continuing to use our site, you consent to our use of cookies in accordance with this policy.`,
      },
      {
        type: "list",
        heading: "We use cookies to:",
        items: [
          "Remember your preferences and settings",
          "Understand how users navigate our website",
          "Measure the effectiveness of our marketing campaigns",
          "Provide a more personalised browsing experience",
        ],
      },
      {
        type: "paragraph",
        text: `You can choose to disable cookies through your browser settings at any time. However, doing so may affect certain features of our website.`,
      },
    ],
  },
  {
    id: "non-disclosure",
    title: "Section 5: Non-Disclosure",
    content: [
      {
        type: "paragraph",
        text: `Humans of Web treats all client information with strict confidentiality. While we do not sign individual NDAs for every project, our service agreement inherently includes full Non-Disclosure obligations for all parties involved.`,
      },
      {
        type: "paragraph",
        text: `We undertake not to use any Confidential Information disclosed by the client for any purpose other than delivering the agreed scope of work, without first obtaining written consent.`,
      },
      {
        type: "paragraph",
        text: `We guarantee not to disclose any confidential information to any third party, except to employees or professional advisers who need access to carry out the work.`,
      },
    ],
  },
  {
    id: "personal-data",
    title: "Section 6: Personal Data & Your Rights",
    content: [
      {
        type: "paragraph",
        text: `Under applicable data protection laws (including GDPR where relevant), you have the following rights regarding your personal data:`,
      },
      {
        type: "list",
        items: [
          "The right to access the personal data we hold about you",
          "The right to request correction of inaccurate or incomplete data",
          "The right to request deletion of your data (subject to legal obligations)",
          "The right to object to or restrict how we process your data",
          "The right to data portability where technically feasible",
        ],
      },
      {
        type: "paragraph",
        text: `To exercise any of these rights, please contact us at hello@humansofweb.com. We will respond to all requests within 30 days.`,
      },
    ],
  },
  {
    id: "restrictions",
    title: "Section 7: Restrictions",
    content: [
      {
        type: "paragraph",
        text: `Humans of Web reserves the right to refuse or cancel any orders placed for websites operating in illegal, offensive, or ethically objectionable industries. This includes, but is not limited to, content that is hateful, discriminatory, or harmful to individuals or communities.`,
      },
      {
        type: "paragraph",
        text: `If you are unsure whether your project falls within our working guidelines, please reach out to us before placing an order and we will be happy to advise.`,
      },
      {
        type: "paragraph",
        text: `If you do not agree with any part of this Privacy Policy, please discontinue use of our website and services immediately.`,
      },
    ],
  },
  {
    id: "updates",
    title: "Section 8: Updates to This Policy",
    content: [
      {
        type: "paragraph",
        text: `We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The most current version will always be available on this page. We encourage you to review this policy periodically.`,
      },
      {
        type: "paragraph",
        text: `This policy was last updated in January 2026. For any questions, please contact us at hello@humansofweb.com.`,
      },
    ],
  },
];

const renderContent = (item, idx) => {
  switch (item.type) {
    case "paragraph":
      return (
        <p key={idx} className="p-default  leading-relaxed">
          {item.text}
        </p>
      );
    case "bold-intro":
      return (
        <p key={idx} className="p-default font-semibold ">
          {item.text}
        </p>
      );
    case "list":
      return (
        <div key={idx}>
          {item.heading && (
            <p className="p-default font-semibold  mb-2">{item.heading}</p>
          )}
          <ul className="list-disc pl-5 space-y-1.5">
            {item.items.map((li, i) => (
              <li key={i} className="p-default  leading-relaxed">
                {li}
              </li>
            ))}
          </ul>
        </div>
      );
    default:
      return null;
  }
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#fafafa] ">
      {/* Hero */}
        <ContainerWrapper background="#48179C">
      <PaddingWrapper2>
          <h1 className="text-h1 font-semibold text-center uppercase tracking-widest text-white">
            Privacy Policy
          </h1>
          <p className="p-default text-center text-white/70 mt-3 max-w-2xl mx-auto">
            At Humans of Web, we believe in transparency. Here is how we handle your data — honestly, responsibly, and with a human touch.
          </p>
      </PaddingWrapper2>
        </ContainerWrapper>

      {/* Trusted By */}
      

      {/* Intro */}
            <TrustedBy padding={false} />
      <div className="max-w-[1200px] mx-auto">
      <PaddingWrapper2>
        <ContainerWrapper background="#fafafa">
          <p className="p-default  leading-relaxed">
            Thank you for using or accessing the services, website, or other web assets of Humans of Web Ltd., a company registered in the United Kingdom. This Privacy Policy is effective between Humans of Web (hereafter referred to as "Humans of Web", "we", "our", or "us") and you ("Client", "Customer", or "the end user").
          </p>
          <p className="p-default  leading-relaxed mt-4">
            Use of our site is subject to the following terms. By navigating within the site, or clicking on any object on the site, you are agreeing to be bound by these terms and conditions.
          </p>
        </ContainerWrapper>
      </PaddingWrapper2>

      {/* Policy Sections */}
        <ContainerWrapper background="#fafafa">
      <PaddingWrapper2 padding="pb-10 px-8.75 md:pb-[50px] md:px-12.5 xl:pb-18 xl:px-20">
          <div className=" space-y-10 md:space-y-[50px] xl:space-y-18 ">
            {SECTIONS.map((section) => (
              <div key={section.id} id={section.id} className="">
                <h2 className="text-h2 font-semibold  mb-4">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.content.map((item, idx) => renderContent(item, idx))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 rounded-2xl bg-[#eaf7ff] p-6 md:p-8">
            <h3 className="text-h5 font-semibold ">Still have questions?</h3>
            <p className="p-default  mt-2 leading-relaxed">
              We are always happy to help. If you have any questions about this Privacy Policy or how we handle your data, feel free to reach out.
            </p>
            <a
              href="mailto:hello@humansofweb.com"
              className="mt-4 inline-flex h-11 items-center rounded-full bg-primary px-6 p-default font-semibold text-white transition hover:bg-secondary"
            >
              hello@humansofweb.com
            </a>
          </div>
      </PaddingWrapper2>
        </ContainerWrapper>
        </div>
    </main>
  );
}