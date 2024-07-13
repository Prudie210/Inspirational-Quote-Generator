function displayQuote(response) {
  new Typewriter("#quotes", {
    strings: response.data.answer,
    autoStart: true,
    delay: 75,
    cursor: "",
  });
}

function generateQuote(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "b02cdaf1f9add7t3c4aa64e6o08007b0";
  let context =
    "You are a Quote expert and love to write short quotes. Your mission is to generate a 2 line quote in basic HTML and separate each line with a <br />. Make sure to follow user instructions. Sign the quote with 'SheCodes AI' inside a <strong> element at the end of the quote and NOT at the beginning and separate with a <br />";
  let prompt = `User instructions: Generate an inspirational quote about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let quoteElement = document.querySelector("#quotes");
  quoteElement.classList.remove("hidden");
  quoteElement.innerHTML = `<div class="generating">⏳ Generating a Quote about ${instructionsInput.value}...</div>`;

  axios.get(apiUrl).then(displayQuote);
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);
