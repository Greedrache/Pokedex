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

// Typübersetzung Englisch → Deutsch
const typeMap = {
    Water: "Wasser",
    Fire: "Feuer",
    Grass: "Pflanze",
    Electric: "Elektro",
    Normal: "Normal",
    Ground: "Boden",
    Fighting: "Kampf",
    Poison: "Gift",
    Flying: "Flug",
    Psychic: "Psycho",
    Bug: "Käfer",
    Rock: "Gestein",
    Ghost: "Geist",
    Ice: "Eis",
    Dragon: "Drache",
    Dark: "Unlicht",
    Steel: "Stahl",
    Fairy: "Fee"
};

function translateType(type) {
    if (!type) return "";
    const t = String(type).trim();
    // Prüfe erst Map, sonst unverändert
    return typeMap[t] || t.charAt(0).toUpperCase() + t.slice(1);
}

// --- Beim Anreichern: ---
async function enrichSingle(p) {
    try {
        const official = await fetchPokemonOfficialData(p.id);
        p.height = official.height || p.height || null;
        p.weight = official.weight || p.weight || null;
        p.abilities = official.abilities.length ? official.abilities : (p.abilities || ["Keine bekannt"]);
        p.category = official.category || p.category || null;
        p.evolutionChainUrl = official.evolutionChainUrl;
        p.evolutions = await fetchEvolutionChain(p.evolutionChainUrl);

        // Typen priorisieren: db.json → sonst PokéAPI → sonst Normal
        let types = (p.type && p.type.length) ? p.type : (official.types.length ? official.types : ["Normal"]);
        // Übersetze alle Typen auf Deutsch
        p.type = types.map(translateType);

        p.image = p.image || `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`;
    } catch (e) {
        console.warn("Enrich failed for", p.id, e);
        if (!p.type || !p.type.length) p.type = ["Normal"];
        p.abilities = p.abilities || ["Keine bekannt"];
        p.image = p.image || `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`;
    }
}

// --- Beim Rendern von Cards wird type schon korrekt gesetzt ---
function addTypesToCard(card, types) {
    if (!types) return;
    card.dataset.types = Array.isArray(types) ? types.join(",") : types;
}
// Pokémon-Daten
let pokemons = [];
let currentList = [];
let displayedCount = 0;
const perPage = 20;
let enriched = false;
let currentDialogIndex = null;

// Typfarben
const typeGradients = {
    Feuer: "#f08030", Wasser: "#6890f0", Pflanze: "#78c850",
    Elektro: "#f8d030", Normal: "#a8a878", Boden: "#e0c068",
    Kampf: "#c03028", Gift: "#a040a0", Flug: "#a8d0f0",
    Psycho: "#f85888", Käfer: "#a8b820", Gestein: "#b8a038",
    Geist: "#705898", Eis: "#98d8d8", Drache: "#7038f8",
    Unlicht: "#705848", Stahl: "#b8b8d0", Fee: "#ee99ac"
};

// Hilfsfunktionen
function typeToClassName(type) {
    if (!type) return "";
    return String(type).replace(/[^\wäöüÄÖÜß-]/g, "");
}
function debounce(fn, wait = 200) {
    let t;
    return (...args) => {
        clearTimeout(t);
        t = setTimeout(() => fn(...args), wait);
    };
}
async function getAbilityName(a) {
    try {
        const res = await fetch(a.ability.url);
        if (!res.ok) return a.ability.name;
        const data = await res.json();
        return data.names.find(n => n.language.name === 'de')?.name || a.ability.name;
    } catch {
        return a.ability.name;
    }
}
async function getAbilityNames(abilities) {
    return Promise.all(abilities.map(getAbilityName));
}
function getGenus(s) {
    if (!Array.isArray(s.genera)) return null;
    const de = s.genera.find(g => g.language.name === 'de');
    const en = s.genera.find(g => g.language.name === 'en');
    return de?.genus || en?.genus || null;
}
async function fetchPokemonOfficialData(id) {
    const base = "https://pokeapi.co/api/v2";
    try {
        const [pokemonRes, speciesRes] = await Promise.all([
            fetch(`${base}/pokemon/${id}`),
            fetch(`${base}/pokemon-species/${id}`)
        ]);
        if (!pokemonRes.ok || !speciesRes.ok) throw new Error("API error");

        const p = await pokemonRes.json();
        const s = await speciesRes.json();
        const height = typeof p.height === "number" ? `${(p.height / 10).toFixed(1)} m` : null;
        const weight = typeof p.weight === "number" ? `${(p.weight / 10).toFixed(1)} kg` : null;
        const abilities = await getAbilityNames(p.abilities);
        const category = getGenus(s);
        const evolutionChainUrl = s.evolution_chain?.url || null;
        const types = Array.isArray(p.types) ? p.types.map(t => t.type.name.charAt(0).toUpperCase() + t.type.name.slice(1)) : [];

        return { height, weight, abilities, category, evolutionChainUrl, types };
    } catch (err) {
        console.warn("PokéAPI fetch error for", id, err);
        return { height: null, weight: null, abilities: [], category: null, evolutionChainUrl: null, types: [] };
    }
}
function buildChain(data) {
    const chain = [];
    let current = data.chain;
    while (current) {
        const speciesName = current.species.name;
        const idMatch = current.species.url.match(/\/(\d+)\/$/);
        const id = idMatch ? parseInt(idMatch[1]) : null;
        const localP = pokemons.find(p => p.id === id);
        chain.push({
            id,
            name: localP ? localP.name : speciesName,
            image: localP ? localP.image : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
        });
        current = current.evolves_to[0];
    }
    return chain;
}
async function fetchEvolutionChain(url) {
    if (!url) return [];
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("API error");
        const data = await res.json();
        return buildChain(data);
    } catch (err) {
        console.warn("Evolution chain fetch error:", err);
        return [];
    }
}

// Enrichment
async function enrichSingle(p) {
    try {
        const official = await fetchPokemonOfficialData(p.id);
        p.height = official.height || p.height || null;
        p.weight = official.weight || p.weight || null;
        p.abilities = official.abilities.length ? official.abilities : (p.abilities || ["Keine bekannt"]);
        p.category = official.category || p.category || null;
        p.evolutionChainUrl = official.evolutionChainUrl;
        p.evolutions = await fetchEvolutionChain(p.evolutionChainUrl);

        // db.json Typen haben Priorität
        if (!p.type || !p.type.length) {
            p.type = official.types.length ? official.types : ["Normal"];
        }

        p.image = p.image || `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`;
    } catch (e) {
        console.warn("Enrich failed for", p.id, e);
        if (!p.type || !p.type.length) p.type = ["Normal"];
        p.abilities = p.abilities || ["Keine bekannt"];
        p.image = p.image || `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`;
    }
}
async function enrichAll(maxConcurrent = 6) {
    if (enriched) return;
    const queue = [...pokemons];
    const workers = Array.from({ length: maxConcurrent }, async () => {
        while (queue.length) {
            const p = queue.shift();
            await enrichSingle(p);
        }
    });
    await Promise.all(workers);
    enriched = true;
}

// Farb-Logik
function applyCardColors() {
    document.querySelectorAll('.card').forEach(card => {
        const typesAttr = card.dataset.types;
        const types = typesAttr ? typesAttr.split(",") : [];
        if (!types.length) {
            card.style.background = "#f7f9fa"; 
            return;
        }
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
function shadeColor(color, percent) {
    const num = parseInt(color.slice(1),16),
          amt = Math.round(2.55 * percent),
          R = (num >> 16) + amt,
          G = (num >> 8 & 0x00FF) + amt,
          B = (num & 0x0000FF) + amt;
    return "#" + (
      0x1000000 + 
      (R<255?R<1?0:R:255)*0x10000 + 
      (G<255?G<1?0:G:255)*0x100 + 
      (B<255?B<1?0:B:255)
    ).toString(16).slice(1);
}

// Karten
function addTypesToCard(card, types) {
    if (!types) return;
    card.dataset.types = Array.isArray(types) ? types.join(",") : types;
}
function createCard(p) {
    const card = document.createElement("article");
    card.className = "card";
    addTypesToCard(card, p.type);
    card.tabIndex = 0;
    card.innerHTML = `
        <img src="${p.image}" alt="${p.name}" class="card-img">
        <h3>${p.name}</h3>
        <p>${(p.type || []).join(", ")}</p>
    `;
    card.addEventListener("click", () => openDialog(p));
    card.addEventListener("keydown", e => e.key === "Enter" && openDialog(p));
    return card;
}
function renderPokemons(list = currentList) {
    if (!grid) return;
    grid.innerHTML = "";
    const visible = list.slice(0, displayedCount);
    if (!visible.length) {
        grid.innerHTML = `<p>Keine Pokémon gefunden.</p>`;
        loadMoreBtn.style.display = "none";
        return;
    }
    const frag = document.createDocumentFragment();
    visible.forEach(p => frag.appendChild(createCard(p)));
    grid.appendChild(frag);
    applyCardColors();
    loadMoreBtn.style.display = (displayedCount >= list.length) ? "none" : "inline-block";
}

// Dialog, Suche und Events bleiben unverändert
function setDialogBasic(p) {
    dialogImg.src = p.image;
    dialogImg.alt = p.name;
    dialogName.textContent = p.name;
    dialogNumber.textContent = `#${String(p.id).padStart(3, "0")}`;
}
function setDialogEntry(p) {
    const meta = [];
    if (p.category) meta.push(`Kategorie: ${p.category}`);
    dialogEntry.textContent = `${p.description || ""}${meta.length ? `\n\n${meta.join(" • ")}` : ""}`;
}
function setDialogTypes(p) {
    dialogTypes.innerHTML = "";
    if (!p.type || !p.type.length) return;
    p.type.forEach(t => {
        const tag = document.createElement("span");
        tag.className = `type-tag ${typeToClassName(t)}`;
        tag.textContent = t;
        dialogTypes.appendChild(tag);
    });
}
function createAbilityCell(a) { const td = document.createElement("td"); td.textContent = a; return td; }
function setDialogAbilities(p) {
    dialogStats.innerHTML = "";
    if (!p.abilities || !p.abilities.length) { dialogStats.textContent = "Keine Fähigkeiten bekannt."; return; }
    const table = document.createElement("table"); table.className = "ability-table"; const row = document.createElement("tr"); p.abilities.forEach(a => row.appendChild(createAbilityCell(a))); table.appendChild(row); dialogStats.appendChild(table);
}
function createEvoItem(evo) { const evoItem = document.createElement("div"); evoItem.className = "evo-item"; const img = document.createElement("img"); img.src = evo.image; img.alt = evo.name; img.className = "evo-sprite"; const nameSpan = document.createElement("span"); nameSpan.textContent = evo.name; evoItem.appendChild(img); evoItem.appendChild(nameSpan); return evoItem; }
function setDialogEvolutions(p) { dialogEvolution.innerHTML = ""; if (!p.evolutions || p.evolutions.length <= 1) { dialogEvolution.textContent = "Keine Evolutionen."; return; } const evoRow = document.createElement("div"); evoRow.className = "evo-row"; p.evolutions.forEach(evo => evoRow.appendChild(createEvoItem(evo))); dialogEvolution.appendChild(evoRow); }
function setDialogHeightWeight(p) { dialogHeight.textContent = p.height || "—"; dialogWeight.textContent = p.weight || "—"; }
function openDialog(pokemon) { currentDialogIndex = currentList.findIndex(p => p.id === pokemon.id); if (!dialog) return; setDialogBasic(pokemon); setDialogEntry(pokemon); setDialogTypes(pokemon); setDialogAbilities(pokemon); setDialogEvolutions(pokemon); setDialogHeightWeight(pokemon); dialog.showModal(); const content = dialog.querySelector(".dialog-content"); if (content) content.focus(); }
function showDialogByIndex(index) { if (index < 0 || index >= currentList.length) return; openDialog(currentList[index]); }
function closeDialog() { if (!dialog) return; dialog.close(); currentDialogIndex = null; }

const handleSearch = debounce((term) => {
    term = (term || "").trim().toLowerCase();
    currentList = pokemons.filter(p => {
        const inName = p.name.toLowerCase().includes(term);
        const inType = (p.type || []).join(" ").toLowerCase().includes(term);
        const inCategory = (p.category || "").toLowerCase().includes(term);
        const inDesc = (p.description || "").toLowerCase().includes(term);
        return inName || inType || inCategory || inDesc;
    });
    displayedCount = Math.min(perPage, Math.max(0, currentList.length));
    renderPokemons();
}, 180);

function setupEventListeners() {
    if (searchInput) searchInput.addEventListener("input", e => handleSearch(e.target.value));
    if (loadMoreBtn) loadMoreBtn.addEventListener("click", () => { displayedCount = Math.min(currentList.length, displayedCount + perPage); renderPokemons(); });
    if (closeDialogBtn) closeDialogBtn.addEventListener("click", closeDialog);
    if (prevBtn) prevBtn.addEventListener("click", () => { if (currentDialogIndex === null) return; const newIndex = (currentDialogIndex - 1 + currentList.length) % currentList.length; showDialogByIndex(newIndex); });
    if (nextBtn) nextBtn.addEventListener("click", () => { if (currentDialogIndex === null) return; const newIndex = (currentDialogIndex + 1) % currentList.length; showDialogByIndex(newIndex); });
    if (dialog) dialog.addEventListener("click", e => { if (e.target === dialog) closeDialog(); });
    document.addEventListener("keydown", e => { if (e.key === "Escape") closeDialog(); });
}

async function init() {
    if (!grid || !searchInput || !loadMoreBtn) { console.error("Fehlende DOM-Elemente: pokemonGrid, search oder loadMoreBtn."); return; }
    setupEventListeners();
    try {
        const response = await fetch('http://localhost:3000/pokemons');
        if (!response.ok) throw new Error('Fehler beim Laden der Pokémon-Daten');
        pokemons = await response.json();
        console.log('Pokémon-Daten geladen:', pokemons.length);
    } catch (error) {
        console.error('Fetch-Fehler:', error);
        grid.innerHTML = '<p>Fehler beim Laden der Daten. Bitte überprüfe den Server.</p>';
        return;
    }
    displayedCount = perPage;
    currentList = [...pokemons];
    renderPokemons();
    try { await enrichAll(); renderPokemons(); } catch (e) { console.warn("Anreichern fehlgeschlagen:", e); }
}

init();
