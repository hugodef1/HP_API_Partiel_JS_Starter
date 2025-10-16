const urlParams = new URLSearchParams(window.location.search);
const characterName = urlParams.get("char");

const response = await fetch(`https://hp-api.onrender.com/api/characters?name=${encodeURIComponent(characterName)}`);
const data = await response.json();
const character = data.find(c => c.name === characterName);
const characterNameHeader = document.querySelector(".perso__left");
const detailsDiv = document.querySelector(".perso__right");

function displayCharacterDetails(character) {
    detailsDiv.innerHTML = `
        <p><strong>Gender:</strong> ${character.gender || 'N/A'}</p>
        <p><strong>Date of Birth:</strong> ${character.dateOfBirth || 'N/A'}</p>
        <p><strong>Eye Colour:</strong> ${character.eyeColour || 'N/A'}</p>
        <p><strong>Hair Colour:</strong> ${character.hairColour || 'N/A'}</p>
        <p><strong>Patronus:</strong> ${character.patronus || 'N/A'}</p>
`;
    characterNameHeader.innerHTML = `
        <img class="${character.house ? character.house.toLowerCase() + '-img' : ''}" src="${character.image || './images/characters/default.png'}" alt="${character.name}" />
        <figcaption>${character.name}</figcaption>
`;
}

displayCharacterDetails(character);