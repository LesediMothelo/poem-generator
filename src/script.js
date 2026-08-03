function displayPoem(response) {
    let poem = response.data.answer;
  let poemContainer = document.querySelector("#poem-container");

  if (!poemContainer) return;

  poemContainer.innerHTML = "";

  new Typewriter("#poem-container", {
    strings: [poem],
    autoStart: true,
    delay: 20,
    cursor: "▍",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let userInput = document.querySelector("#user-input");
  let poemContainer = document.querySelector("#poem-container");

  if (!userInput || !poemContainer) return;

  let prompt = `Write a short English poem about ${userInput.value}`;
  let context = "Keep it rhyming, friendly, and no longer than 5 lines.";
  let apiKey = "fc574fe29888cce2e4c5b0fo603ta3bc";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  poemContainer.innerHTML = "Generating your poem...⌛";

  poemContainer.classList.remove("hidden");

  axios.get(apiUrl)
    .then(displayPoem);
}

let poemGenerator = document.querySelector("#poem-generator");

if (poemGenerator) {
  poemGenerator.addEventListener("submit", generatePoem);
}