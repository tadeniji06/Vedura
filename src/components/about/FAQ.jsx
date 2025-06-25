import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

const faqs = [
  {
    q: "Where is Vedura located?",
    a: "Vedura is located in Arepo, just 15 minutes from the Central Business District, Alausa, Lagos.",
  },
  {
    q: "What kind of project is Vedura?",
    a: "Vedura is a family and business resort, combining comfort, nature, and modern infrastructure.",
  },
  {
    q: "Who is Vedura designed for?",
    a: "Vedura is ideal for families, professionals, business travelers, and investors who value peace, connectivity, and long-term real estate growth.",
  },
  {
    q: "Why should I invest in Vedura?",
    a: "Vedura is a perfect investment for individuals looking to build sustainable wealth. It promises up to 70% ROI within the first year.",
  },
  {
    q: "What makes Vedura different from other real estate projects?",
    a: "Vedura blends the concept of a luxury resort with long-term investment potential. It focuses on serene living, security, and business-friendly facilities—offering both lifestyle and ROI.",
  },
  {
    q: "Is Vedura a secure investment?",
    a: "Yes. Vedura is a registered development with clear documentation, a verified title, and strong growth projections due to its prime location and resort model.",
  },
  {
    q: "What facilities will be available at Vedura?",
    a: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Golf course</li>
        <li>Polo field</li>
        <li>Water park</li>
        <li>Amusement park</li>
        <li>Casino</li>
        <li>Business lounges</li>
        <li>Techhub</li>
        <li>Campus</li>
      </ul>
    ),
  },
  {
    q: "How can I invest in Vedura?",
    a: "You can invest through flexible payment plans or outright purchase. Reach out to our sales team for updated pricing and site tour bookings.",
  },
  {
    q: "Can I request a tour or see site images?",
    a: "Yes. Prospective buyers and investors can schedule a guided site tour or request current photos/videos of the project, including the gatehouse and development progress.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const toggle = (idx) => setOpen(open === idx ? null : idx);

  return (
    <section id="faq" className="py-16 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-green mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Everything you need to know about Vedura, investment, and our unique lifestyle offering.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <div
              key={idx}
              className="border border-gray-100 rounded-xl bg-gray-50 transition-shadow hover:shadow-lg"
            >
              <button
                className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none"
                onClick={() => toggle(idx)}
                aria-expanded={open === idx}
              >
                <span className="font-semibold text-primary-green text-base md:text-lg">
                  {item.q}
                </span>
                <Icon
                  icon={open === idx ? "mdi:chevron-up" : "mdi:chevron-down"}
                  className="text-primary-green text-2xl transition-transform duration-200"
                />
              </button>
              <div
                className={`px-6 pb-5 text-gray-700 text-base md:text-lg transition-all duration-300 overflow-hidden ${
                  open === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
                style={{ willChange: "max-height, opacity" }}
              >
                {typeof item.a === "string" ? <p>{item.a}</p> : item.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;