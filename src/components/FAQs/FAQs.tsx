// src/components/FAQs/FAQs.tsx
import React, { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

const FAQs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: 'What services do you offer?',
      answer:
        'We specialize in creating high-converting websites tailored for beauty professionals, as well as customer acquisition and marketing services to help grow your business.',
    },
    {
      question: 'How long does it take to build my website?',
      answer:
        'Typically, our process takes about 1-2 weeks from start to finish, depending on your specific needs and requirements.',
    },
    {
      question: 'What if I need changes after my website is live?',
      answer:
        'We offer ongoing support and maintenance packages to ensure your website stays updated and meets your evolving needs.',
    },
    {
      question: 'Do you offer payment plans?',
      answer:
        "Yes! We provide a 'Buy Now, Pay Later' option through third-party services for those who qualify. This allows you to split your payments into manageable installments.",
    },
    {
      question: 'How do I get started with Pro Service Growth?',
      answer:
        "Getting started is easy! Simply reach out through our contact form or send us a DM on instagram, and we'll guide you through the process of launching your new website.",
    },
    {
      question:
        'What kind of support can I expect after my website is launched?',
      answer:
        'We provide comprehensive support options, including training on how to manage your site, as well as ongoing maintenance and updates to keep everything running smoothly.',
    },
  ];

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section className="py-16 px-6 md:px-12 bg-soft-cream">
      <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-elegant-gray text-center">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 border rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left bg-white p-4 flex justify-between items-center focus:outline-none"
            >
              <span className="font-semibold text-lg">{faq.question}</span>
              <span
                className={`transition-transform duration-300 ${
                  openIndex === index ? 'transform rotate-180' : ''
                }`}
              >
                ▼
              </span>
            </button>
            {openIndex === index && (
              <div className="bg-gray-100 p-4">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
