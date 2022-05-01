import React, { useState } from "react";

const Faqs = ({ faqs,faq_title }) => {
  return (
    <section className="py-[48px] px-[15px] text-[#343a40] sm:max-w-[720px] md:max-w-[960px] lg:max-w-[1140px]  sm:mx-auto">
      <h3 className="text-center mb-5 font-medium text-xl sm:text-[32px] sm:mb-12">
        {faq_title}
      </h3>
      {faqs.map((faq) => (
        <div
          key={faq.id}
          id="accordion-arrow-icon"
          data-accordion="open"
          className="rounded-xl mb-4"
        >
          <h2 id="accordion-arrow-icon-heading-1">
            <button
              type="button"
              className="flex justify-between items-center py-[12px] px-[20px]  w-full  text-left text-white bg-[#fd0054] rounded-t-[2px]"
              data-accordion-target="#accordion-arrow-icon-body-1"
              aria-expanded="true"
              aria-controls="accordion-arrow-icon-body-1"
              onClick={() =>
                (document.getElementById(
                  `accordion-arrow-icon-body-${faq.id}`
                ).style.display =
                  document.getElementById(`accordion-arrow-icon-body-${faq.id}`)
                    .style.display == "none"
                    ? "block"
                    : "none")
              }
            >
              <span>{faq.title}</span>
            </button>
          </h2>
          <div
            id={`accordion-arrow-icon-body-${faq.id}`}
            aria-labelledby="accordion-arrow-icon-heading-1"
          >
            <div className="p-5 border border-t-0 border-gray-200  bg-white-900 rounded-b-[2px]">
              <p className=" text-[#343a40]">{faq.description}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Faqs;
