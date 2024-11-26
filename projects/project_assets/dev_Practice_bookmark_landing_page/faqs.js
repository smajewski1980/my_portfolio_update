const faqs = document.querySelectorAll(".faq");
const answers = document.querySelectorAll(".answer");
const faqSVGs = document.querySelectorAll(".faq svg");

let clickedFaq;

function showFaqAnswer() {
  faqs.forEach((faq, index) => {
    if (faq === this) clickedFaq = index;
  });

  if (this.classList.contains("answer-open")) {
    closeAnswers();
  } else {
    closeAnswers();
    this.classList.toggle("answer-open");

    faqSVGs.forEach((svg, index) => {
      if (index === clickedFaq) {
        svg.style.rotate = "180deg";
      } else {
        svg.style.rotate = "0deg";
      }
    });
  }
}

function closeAnswers() {
  faqSVGs.forEach((svg) => {
    svg.style.rotate = "0deg";
  });
  faqs.forEach((answer) => {
    answer.classList.remove("answer-open");
  });
}

faqs.forEach((faq) => {
  faq.addEventListener("click", showFaqAnswer);
});
