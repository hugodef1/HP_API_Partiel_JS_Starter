const response = await fetch(`https://hp-api.onrender.com/api/characters`);
const data = await response.json();
const charactersDiv = document.querySelector(".characters");

function displayCharacters(characters) {
  charactersDiv.innerHTML = characters.map(character => `
    <div class="charac" data-charac="${character.name}" house="${character.house}">
      <a href="details.html?char=${encodeURIComponent(character.name)}">
        <img class="${character.house.toLowerCase() + '-img'}" src="${character.image}" alt="${character.name}" />
      </a>
      <p>${character.name}</p>
    </div>
  `).join("");
}

function filterCharacters(house, sorted ) {
    const filtered = house === "All" ? sorted : sorted.filter(character => character.house === house);
    displayCharacters(filtered.slice(0, 12));
}

displayCharacters(data.slice(0, 12));

let currentCharacters = data.slice(0, 12);

document.getElementById("sort-abc").addEventListener("click", () => {
  const sorted = [...currentCharacters].sort((a, b) => a.name.localeCompare(b.name));
  displayCharacters(sorted);
});

const filterButtons = document.querySelectorAll(".filter-button");
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const house = button.getAttribute("data-house");
    const sorted = [...data.slice(0, 12)].sort((a, b) => a.name.localeCompare(b.name));
    filterCharacters(house, sorted);
  });
});