function generateQoute(event) {
  event.preventDefault();

  new Typewriter("#quotes", {
    strings: "If you cannot do great things, do small things in a great way",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQoute);
