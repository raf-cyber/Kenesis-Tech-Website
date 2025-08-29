"use client";
import { useState } from "react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQProps {
  className?: string;
  questionClassName?: string;
  answerClassName?: string;
  iconOpen?: React.ReactNode;
  iconClosed?: React.ReactNode;
}

const FAQ = ({
  className = "",
  questionClassName = "",
  answerClassName = "",
  iconOpen = (
    <svg
      className="w-5 h-5 transform rotate-180"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 15l7-7 7 7"
      />
    </svg>
  ),
  iconClosed = (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  ),
}: FAQProps) => {
  const [openId, setOpenId] = useState<string | null>(null);

  const faqData: FAQItem[] = [
    {
      id: "q1",
      question: "What services do you offer?",
      answer:
        "We specialize in web development, UI/UX design, blockchain integration, and performance optimization to help your business succeed online.",
    },
    {
      id: "q2",
      question: "How long does it take to build a website?",
      answer:
        "Timelines vary based on project complexity, but most websites are delivered within 4–12 weeks, with regular updates throughout the process.",
    },
    {
      id: "q3",
      question: "Do you provide support after the website is live?",
      answer:
        "Yes! We offer ongoing maintenance, updates, and troubleshooting to ensure your website remains secure and up-to-date.",
    },
    {
      id: "q4",
      question: "Can you integrate my website with blockchain technologies?",
      answer:
        "Absolutely. We build decentralized applications (dApps) and smart contract integrations tailored to your business needs.",
    },
    {
      id: "q5",
      question: "What industries do you work with?",
      answer:
        "We work with startups, tech companies, e-commerce businesses, and enterprises looking for modern, scalable web solutions.",
    },
    {
      id: "q6",
      question: "How do you ensure my website is secure?",
      answer:
        "We follow best practices in cybersecurity, including SSL encryption, secure coding standards, and regular vulnerability testing to protect your data.",
    },
  ];

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      className={`section-transition non-hero-section pt-36 pb-20 relative ${className}`}
      id="faq"
    >
      <div className="absolute inset-0 w-full h-full grid-bg opacity-10"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-12 text-left">
          <h2 className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-xl lg:text-2xl font-medium leading-relaxed text-gray-400 max-w-3xl">
            Everything you need to know about our{" "}
            <span className="text-white">services</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[faqData.slice(0, 3), faqData.slice(3, 6)].map(
            (column, colIndex) => (
              <div key={colIndex} className="flex flex-col gap-4">
                {column.map((item) => (
                  <div
                    key={item.id}
                    className={`bg-white/10 backdrop-blur-md border border-gray-700 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg ${
                      openId === item.id ? "border-white shadow-lg" : ""
                    }`}
                    style={{ minHeight: "90px" }}
                  >
                    <button
                      className={`w-full h-[90px] flex justify-between items-center px-4 focus:outline-none ${questionClassName}`}
                      onClick={() => toggleFAQ(item.id)}
                      aria-expanded={openId === item.id}
                      aria-controls={`faq-answer-${item.id}`}
                    >
                      <span className="text-base lg:text-lg font-medium text-white text-left">
                        {item.question}
                      </span>
                      <span className="ml-3 flex-shrink-0 transition-transform duration-300">
                        {openId === item.id ? iconOpen : iconClosed}
                      </span>
                    </button>
                    <div
                      id={`faq-answer-${item.id}`}
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        openId === item.id
                          ? "max-h-80 opacity-100"
                          : "max-h-0 opacity-0"
                      } ${answerClassName}`}
                    >
                      <div className="px-4 pb-3 pt-2 text-gray-300 text-sm text-left">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
