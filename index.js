"use strict";
const faqTitle = document.querySelectorAll(".faq-title");

function revealFAQ() {
  faqTitle.forEach((title) => {
    title.addEventListener("click", function () {
      faqTitle.forEach((title) => {
        title.parentElement
          .querySelector(".faq-description")
          .classList.add("hidden");
        title.classList.remove("clicked-title");
        title.querySelector("img").classList.remove("arrow-up");
      });
      title.parentElement
        .querySelector(".faq-description")
        .classList.remove("hidden");
      title.classList.add("clicked-title");
      title.querySelector("img").classList.add("arrow-up");
    });
  });
}
revealFAQ();
