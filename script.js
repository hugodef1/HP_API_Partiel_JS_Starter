const response = await fetch(`https://hp-api.onrender.com/api/characters`);
const data = await response.json();

const charactersDiv = document.querySelector(".characters");
charactersDiv.innerHTML = data.slice(0,12).map(character => `
  <div class="charac" data-charac="${character.name}" house="${character.house}">
    <a href="details.html?char=${encodeURIComponent(character.name)}">
      <img class="${character.house.toLowerCase()}-img" src="${character.image}" alt="${character.name}" />
    </a>
    <p>${character.name}</p>
  </div>
`).join("");