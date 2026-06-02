const privacypolicydata = {
  company: "Edvow",
  tagline: "Where Careers Begin",
  effectiveDate: "May 28, 2026",
  lastUpdated: "May 28, 2026",
  intro: [
    "Edvow (\"we\", \"us\", or \"our\") operates the website www.edvow.com (the \"Website\") and provides career counselling, course guidance, and educational consulting services (collectively, the \"Services\"). This Privacy Policy explains how we collect, use, store, share, and protect your personal information when you visit our Website or use our Services.",
    "By accessing or using our Website and Services, you agree to the terms of this Privacy Policy. If you do not agree, please discontinue use of our Website and Services.",
  ],
  note: "This policy is compliant with India's Information Technology Act, 2000 and the IT (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011. If you are located in the European Union, additional GDPR rights may apply to you.",

  sections: [
    {
      id: 1,
      title: "1. Information We Collect",
      intro: "We collect information in the following ways when you interact with Edvow:",
      subsections: [
        {
          id: "1.1",
          title: "1.1 Information You Provide Directly",
          points: [
            "Full name, email address, phone number, and city/state when you fill out a contact or counselling enquiry form.",
            "Academic background, current class/qualification, and career interests shared during counselling sessions.",
            "Parent or guardian name and contact details (for students under 18).",
            "Payment information (if applicable) — processed securely through third-party payment gateways; we do not store card details.",
            "Any messages, feedback, or documents you share with our counsellors.",
          ],
        },
        {
          id: "1.2",
          title: "1.2 Information Collected Automatically",
          points: [
            "IP address, browser type, operating system, and device information.",
            "Pages visited, time spent on pages, and navigation patterns (via cookies and analytics tools).",
            "Referring URL (how you found our website).",
            "Session duration and interaction data.",
          ],
        },
        {
          id: "1.3",
          title: "1.3 Cookies and Tracking Technologies",
          intro: "We use cookies and similar tracking technologies on our Website. Cookies are small text files stored on your device that help us improve your experience.",
          cookieTypes: [
            {
              name: "Essential Cookies",
              description:
                "Required for the Website to function. These cannot be disabled. Examples: session management, security tokens, form submissions.",
            },
            {
              name: "Analytics Cookies",
              description:
                "Help us understand how visitors use our Website (pages viewed, time spent, errors encountered). We use Google Analytics for this purpose. Data is anonymised and aggregated.",
            },
            {
              name: "Functional Cookies",
              description:
                "Remember your preferences such as language, region, or previously filled form data to improve your experience on return visits.",
            },
            {
              name: "Marketing / Targeting Cookies",
              description:
                "Used to show relevant ads on platforms like Google and Meta (Facebook/Instagram). These track your browsing across websites. You can opt out via your browser settings or platform ad preferences.",
            },
          ],
          note: "You can control or disable cookies through your browser settings at any time. Disabling essential cookies may affect the functionality of the Website.",
        },
      ],
    },

    {
      id: 2,
      title: "2. How We Use Your Information",
      intro: "We use the information we collect for the following purposes:",
      points: [
        "To provide, personalise, and improve our career counselling and consulting services.",
        "To respond to your enquiries, schedule sessions, and communicate about your counselling journey.",
        "To send you relevant course recommendations, career resources, and updates from Edvow.",
        "To connect you with our partner institutes and educational platforms based on your interests.",
        "To process payments and maintain billing records.",
        "To analyse website usage and improve our content, navigation, and service offerings.",
        "To send marketing communications (only with your consent; you may opt out at any time).",
        "To comply with legal obligations under applicable Indian laws.",
        "To detect and prevent fraud, security breaches, or misuse of our services.",
      ],
      note: "We will never use your personal information to make automated decisions that significantly affect you without human review.",
    },

    {
      id: 3,
      title: "3. How We Share Your Information",
      intro:
        "Edvow does not sell, rent, or trade your personal information to any third party. We may share your information only in the following circumstances:",
      subsections: [
        {
          id: "3.1",
          title: "3.1 Partner Institutes and Course Providers",
          description:
            "With your explicit consent, we may share relevant academic and contact information with our partner online and offline educational institutes to facilitate course enrolment, admissions, or scholarship enquiries. You will always be informed before any such sharing occurs.",
        },
        {
          id: "3.2",
          title: "3.2 Service Providers",
          description:
            "We work with trusted third-party service providers who assist us in operating our Website and delivering our Services, including:",
          points: [
            "Website hosting and cloud storage providers.",
            "Email and communication platforms (e.g., for sending appointment confirmations).",
            "Payment gateway providers (e.g., Razorpay, PayU, or similar).",
            "Analytics platforms (e.g., Google Analytics).",
            "Video conferencing tools for online counselling sessions (e.g., Google Meet, Zoom).",
          ],
          note: "All third-party service providers are contractually obligated to handle your data securely and only for the purpose of providing services to Edvow.",
        },
        {
          id: "3.3",
          title: "3.3 Legal Requirements",
          description:
            "We may disclose your information if required to do so by law, court order, or government authority, or when we believe in good faith that disclosure is necessary to protect our rights, your safety, or the safety of others.",
        },
        {
          id: "3.4",
          title: "3.4 Business Transfers",
          description:
            "In the event of a merger, acquisition, or sale of all or part of Edvow's assets, your personal information may be transferred to the acquiring entity. You will be notified via email and/or a prominent notice on our Website prior to any such transfer.",
        },
      ],
    },

    {
      id: 4,
      title: "4. Data Storage and Security",
      intro:
        "We take the security of your personal information seriously and implement industry-standard technical and organisational measures to protect it, including:",
      points: [
        "SSL/TLS encryption for all data transmitted between your browser and our Website.",
        "Secure storage of personal data on protected servers with restricted access.",
        "Regular security reviews and vulnerability assessments.",
        "Access controls ensuring only authorised Edvow personnel can access personal data.",
        "Secure, encrypted payment processing — we do not store credit/debit card numbers.",
      ],
      closing:
        "While we take every reasonable precaution, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security but commit to promptly notifying you if a breach occurs that affects your personal data.",
      note: "Your counselling session notes and personal academic information are treated as sensitive data and are accessible only to your assigned counsellor and authorised Edvow staff.",
    },

    {
      id: 5,
      title: "5. Data Retention",
      intro:
        "We retain your personal information only for as long as necessary to provide our Services and comply with our legal obligations:",
      retentionPeriods: [
        { dataType: "Enquiry and contact form data",  period: "12 months from the date of last contact" },
        { dataType: "Counselling session records",    period: "3 years, to support ongoing guidance and follow-up" },
        { dataType: "Payment and billing records",    period: "7 years, as required under Indian tax and accounting laws" },
        { dataType: "Website analytics data",         period: "26 months (as per Google Analytics default retention)" },
        { dataType: "Marketing consent records",      period: "Until you withdraw consent or request deletion" },
      ],
      closing:
        "After the applicable retention period, your data will be securely deleted or anonymised.",
    },

    {
      id: 6,
      title: "6. Your Rights",
      intro:
        "You have the following rights regarding your personal information held by Edvow. To exercise any of these rights, contact us at hello@edvow.com:",
      rights: [
        { right: "Right to Access",             description: "Request a copy of the personal data we hold about you." },
        { right: "Right to Correction",          description: "Request correction of inaccurate or incomplete personal data." },
        { right: "Right to Deletion",            description: "Request deletion of your personal data, subject to legal retention requirements." },
        { right: "Right to Withdraw Consent",    description: "Withdraw consent for marketing communications at any time by clicking 'Unsubscribe' or emailing us." },
        { right: "Right to Data Portability",    description: "Request your data in a structured, machine-readable format." },
        { right: "Right to Restrict Processing", description: "Request that we limit how we use your data in certain circumstances." },
        { right: "Right to Complain",            description: "Lodge a complaint with the relevant data protection authority if you believe your rights have been violated." },
      ],
      closing:
        "We will respond to all valid requests within 30 days. In complex cases, we may extend this period by an additional 30 days and will inform you accordingly.",
    },

    {
      id: 7,
      title: "7. Children's Privacy",
      intro:
        "Edvow's Services are designed to assist students, including those under the age of 18. We take the privacy of minors especially seriously.",
      points: [
        "For students under 18, we require parental or guardian consent before collecting personal information.",
        "Parents or guardians may review, correct, or request deletion of their child's data at any time.",
        "We do not knowingly collect personal data from children under 13 without verified parental consent.",
        "Counselling session notes for minors are shared only with the student and their parent/guardian.",
      ],
      note: "If you believe we have inadvertently collected personal data from a child under 13 without proper consent, please contact us immediately at hello@edvow.com and we will delete it promptly.",
    },

    {
      id: 8,
      title: "8. Third-Party Links and Platforms",
      intro:
        "Our Website may contain links to third-party websites, partner institute portals, or online course platforms. These links are provided for your convenience.",
      points: [
        "Edvow is not responsible for the privacy practices or content of any third-party websites.",
        "We recommend reviewing the privacy policy of any third-party site you visit.",
        "Our tie-up partners have their own independent privacy policies that govern data you provide directly to them.",
      ],
    },

    {
      id: 9,
      title: "9. Marketing Communications",
      intro: "With your consent, we may send you:",
      points: [
        "Career guidance tips, articles, and resources via email or WhatsApp.",
        "Information about new counselling services, workshops, or webinars.",
        "Course and scholarship recommendations relevant to your profile.",
        "Updates from our partner institutes that may be relevant to your goals.",
      ],
      optOut: {
        intro: "You may opt out of marketing communications at any time by:",
        methods: [
          "Clicking the 'Unsubscribe' link in any email we send.",
          "Replying 'STOP' to any WhatsApp message from us.",
          "Emailing hello@edvow.com with the subject line 'Unsubscribe'.",
        ],
      },
      note: "Opting out of marketing communications will not affect transactional messages such as session confirmations, payment receipts, or important service updates.",
    },

    {
      id: 10,
      title: "10. Cookies — Managing Your Preferences",
      intro:
        "When you first visit our Website, you will see a cookie consent banner. You may accept all cookies, reject non-essential cookies, or customise your preferences.",
      browserSettings: [
        { browser: "Google Chrome",    path: "Settings → Privacy and Security → Cookies and other site data" },
        { browser: "Mozilla Firefox",  path: "Settings → Privacy & Security → Cookies and Site Data" },
        { browser: "Safari",           path: "Preferences → Privacy → Manage Website Data" },
        { browser: "Microsoft Edge",   path: "Settings → Cookies and Site Permissions" },
      ],
      closing:
        "You may also opt out of Google Analytics tracking by installing the Google Analytics Opt-out Browser Add-on available at tools.google.com/dlpage/gaoptout.",
    },

    {
      id: 11,
      title: "11. Changes to This Privacy Policy",
      intro:
        "We may update this Privacy Policy from time to time to reflect changes in our Services, technology, or applicable laws. When we make significant changes, we will:",
      points: [
        "Update the 'Last Updated' date at the top of this page.",
        "Post a prominent notice on our Website homepage.",
        "Send an email notification to registered users where required by law.",
      ],
      closing:
        "We encourage you to review this Privacy Policy periodically. Your continued use of our Website and Services after any changes constitutes your acceptance of the updated policy.",
    },

    {
      id: 12,
      title: "12. Contact Us",
      intro:
        "If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact our Privacy Officer:",
      contact: {
        company:      "Edvow — Where Careers Begin",
        email:        "hello@edvow.com",
        website:      "www.edvow.com",
        address:      "[Your registered address, City, State, PIN Code, India]",
        responseTime: "We aim to respond to all privacy-related requests within 30 days.",
      },
    },
  ],
};

export default privacypolicydata;