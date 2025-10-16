// === DOM Elemente ===
const grid = document.getElementById("pokemonGrid");
const searchInput = document.getElementById("search");
const loadMoreBtn = document.getElementById("loadMoreBtn");
const dialog = document.getElementById("dialog");
const dialogImg = document.getElementById("dialog-img");
const dialogName = document.getElementById("dialog-name");
const dialogNumber = document.getElementById("dialog-number");
const dialogEntry = document.getElementById("dialog-entry");
const dialogHeight = document.getElementById("dialog-height");
const dialogWeight = document.getElementById("dialog-weight");
const dialogTypes = document.getElementById("dialog-types");
const dialogStats = document.getElementById("dialog-stats");
const dialogEvolution = document.getElementById("dialog-evolution");
const closeDialogBtn = document.getElementById("close-dialog");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const spinner = document.getElementById("spinner");

// === Typfarben ===
const typeGradients = {
    Fire: "#f08030", Water: "#6890f0", Grass: "#78c850", Electric: "#f8d030",
    Normal: "#a8a878", Ground: "#e0c068", Fighting: "#c03028", Poison: "#a040a0",
    Flying: "#a8d0f0", Psychic: "#f85888", Bug: "#a8b820", Rock: "#b8a038",
    Ghost: "#705898", Ice: "#98d8d8", Dragon: "#7038f8", Dark: "#705848",
    Steel: "#b8b8d0", Fairy: "#ee99ac"
};

// === Globals ===
let pokemons = [];
let allPokemonNames = [];
let currentList = [];
let displayedCount = 0;
let currentDialogIndex = null;
let nextUrl = "https://pokeapi.co/api/v2/pokemon?limit=20";

// === Helferfunktionen ===
function shadeColor(color, percent) {
    const num = parseInt(color.slice(1), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = (num >> 8 & 0xFF) + amt;
    const B = (num & 0xFF) + amt;
    return "#" + (0x1000000 +
        (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
        (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
        (B < 255 ? (B < 1 ? 0 : B) : 255))
        .toString(16).slice(1);
}

function applyCardColors() {
    document.querySelectorAll(".card").forEach(card => {
        const typesAttr = card.dataset.types;
        const types = typesAttr ? typesAttr.split(",") : [];
        if (!types.length) return;

        if (types.length === 1) {
            const color = typeGradients[types[0]] || "#f7f9fa";
            card.style.background = `linear-gradient(135deg, ${shadeColor(color, 20)}, ${color})`;
        } else {
            const color1 = typeGradients[types[0]] || "#f7f9fa";
            const color2 = typeGradients[types[1]] || "#f7f9fa";
            card.style.background = `linear-gradient(135deg, ${color1}, ${color2})`;
        }
    });
}

// === Fetch Pokémon Details ===
async function fetchPokemons() {
    if (!nextUrl) return [];
    spinner.style.display = "block";
    const res = await fetch(nextUrl);
    const data = await res.json();
    nextUrl = data.next;
    const details = await Promise.all(data.results.map(async p => {
        const info = await (await fetch(p.url)).json();
        return {
            id: info.id,
            name: info.name[0].toUpperCase() + info.name.slice(1),
            image: info.sprites.other["official-artwork"].front_default,
            type: info.types.map(t => t.type.name[0].toUpperCase() + t.type.name.slice(1)),
            height: (info.height / 10).toFixed(1) + " m",
            weight: (info.weight / 10).toFixed(1) + " kg",
            abilities: info.abilities.map(a => a.ability.name),
            speciesUrl: info.species.url
        };
    }));
    spinner.style.display = "none";
    return details;
}


async function fetchAllPokemonNames() {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=2000");
    const data = await res.json();
    allPokemonNames = data.results.map(p => p.name);
}

async function fetchEvolutionChain(speciesUrl) {
    try {
        const res = await fetch(speciesUrl);
        const species = await res.json();
        const evoRes = await fetch(species.evolution_chain.url);
        const evoData = await evoRes.json();

        const chain = [];
        let current = evoData.chain;
        while (current) {
            chain.push(current.species.name.charAt(0).toUpperCase() + current.species.name.slice(1));
            current = current.evolves_to[0];
        }
        return chain;
    } catch {
        return [];
    }
}

async function fetchPokedexEntry(speciesUrl) {
    try {
        const res = await fetch(speciesUrl);
        const data = await res.json();
        const entry = data.flavor_text_entries.find(e => e.language.name === "de") ||
            data.flavor_text_entries.find(e => e.language.name === "en");
        return entry ? entry.flavor_text.replace(/\n|\f/g, " ") : "Kein Eintrag gefunden.";
    } catch {
        return "Fehler beim Laden des Eintrags.";
    }
}

// === UI Funktionen ===
function createCard(pokemon) {
    const card = document.createElement("article");
    card.className = "card";
    card.dataset.types = pokemon.type.join(",");
    card.innerHTML = `
        <img src="${pokemon.image}" alt="${pokemon.name}" class="card-img">
        <h3>${pokemon.name}</h3>
        <p>${pokemon.type.join(", ")}</p>
    `;
    card.addEventListener("click", () => openDialog(pokemon));
    return card;
}

function renderPokemons(list = currentList) {
    grid.innerHTML = "";
    const visible = list.slice(0, displayedCount);
    visible.forEach(p => grid.appendChild(createCard(p)));
    applyCardColors();

    loadMoreBtn.style.display = (displayedCount >= list.length && !nextUrl) ? "none" : "inline-block";
}

// === Dialog ===
async function openDialog(pokemon) {
    currentDialogIndex = currentList.findIndex(p => p.id === pokemon.id);
    dialog.showModal();
    setTimeout(async () => {
        dialogImg.src = pokemon.image;
        dialogName.textContent = pokemon.name;
        dialogNumber.textContent = "#" + String(pokemon.id).padStart(3, "0");
        dialogHeight.textContent = pokemon.height;
        dialogWeight.textContent = pokemon.weight;
        dialogTypes.innerHTML = pokemon.type.map(t => `<span class="type-tag" style="background:${typeGradients[t]}">${t}</span>`).join(" ");
        dialogStats.innerHTML = ""; pokemon.abilities.forEach(a => { const s = document.createElement("span"); s.textContent = a; s.classList.add("fade-in"); dialogStats.appendChild(s) });
        dialogEntry.textContent = await fetchPokedexEntry(pokemon.speciesUrl);
        dialogEvolution.innerHTML = ""; for (const n of await fetchEvolutionChain(pokemon.speciesUrl)) { try { const i = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${n.toLowerCase()}`)).json(); const d = document.createElement("div"); const imgEl = document.createElement("img"); imgEl.src = i.sprites.other["official-artwork"].front_default; imgEl.alt = n; imgEl.style.width = "90px"; imgEl.style.height = "90px"; const sp = document.createElement("span"); sp.textContent = n; sp.style.display = "block"; d.style.display = "inline-block"; d.style.textAlign = "center"; d.style.margin = "0 8px"; d.classList.add("fade-in"); d.appendChild(imgEl); d.appendChild(sp); dialogEvolution.appendChild(d) } catch { } }
    }, 50);
}


// === Search ===
searchInput.addEventListener("input", async e => {
    const term = e.target.value.toLowerCase();
    if (!term) { currentList = [...pokemons]; displayedCount = 20; renderPokemons(); loadMoreBtn.style.display = "inline-block"; return; }
    let found = pokemons.filter(p => p.name.toLowerCase().includes(term));
    if (found.length) { currentList = found; displayedCount = found.length; renderPokemons(); loadMoreBtn.style.display = "inline-block"; }
    else if (allPokemonNames.some(n => n.includes(term))) {
        const matchName = allPokemonNames.find(n => n.includes(term));
        const info = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${matchName}`)).json();
        currentList = [{
            id: info.id, name: info.name[0].toUpperCase() + info.name.slice(1), image: info.sprites.other["official-artwork"].front_default,
            type: info.types.map(t => t.type.name[0].toUpperCase() + t.type.name.slice(1)), height: (info.height / 10).toFixed(1) + " m",
            weight: (info.weight / 10).toFixed(1) + " kg", abilities: info.abilities.map(a => a.ability.name), speciesUrl: info.species.url
        }];
        displayedCount = 1; renderPokemons(); loadMoreBtn.style.display = "inline-block";
    } else { grid.innerHTML = "<p>Kein Pokémon gefunden.</p>"; loadMoreBtn.style.display = "none"; }
});


// === Navigation & Load More ===
closeDialogBtn.addEventListener("click", () => dialog.close());
dialog.addEventListener("click", e => { if (e.target === dialog) dialog.close(); });
prevBtn.addEventListener("click", () => openDialog(currentList[currentDialogIndex > 0 ? currentDialogIndex - 1 : currentList.length - 1]));
nextBtn.addEventListener("click", () => openDialog(currentList[currentDialogIndex < currentList.length - 1 ? currentDialogIndex + 1 : 0]));
loadMoreBtn.addEventListener("click", async () => {
    const newPokes = await fetchPokemons();
    pokemons.push(...newPokes);
    currentList = [...pokemons];
    displayedCount = currentList.length;
    renderPokemons();
});

// === Init ===
(async function init() {
    spinner.style.display = "block";
    await fetchAllPokemonNames();
    const first = await fetchPokemons();
    pokemons = first;
    currentList = [...pokemons];
    displayedCount = 20;
    renderPokemons();
    spinner.style.display = "none";
})();
