const pokemons = [
    { id: 1, name: "Bisasam", type: ["Pflanze", "Gift"], description: "Eine Pflanze wächst auf seinem Rücken.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" },
    { id: 2, name: "Bisaknosp", type: ["Pflanze", "Gift"], description: "Die Knospe auf seinem Rücken blüht, wenn es viel Sonne bekommt.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" },
    { id: 3, name: "Bisaflor", type: ["Pflanze", "Gift"], description: "Die große Blume auf seinem Rücken zieht Energie aus der Sonne.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" },
    { id: 4, name: "Glumanda", type: ["Feuer"], description: "Die Flamme auf seiner Schwanzspitze zeigt seine Lebensenergie.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" },
    { id: 5, name: "Glutexo", type: ["Feuer"], description: "Seine Flamme wird heißer, wenn es kämpft.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png" },
    { id: 6, name: "Glurak", type: ["Feuer", "Flug"], description: "Speit Feuer, das alles schmilzt.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" },
    { id: 7, name: "Schiggy", type: ["Wasser"], description: "Sein Panzer verringert den Wasserwiderstand beim Schwimmen.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" },
    { id: 8, name: "Schillok", type: ["Wasser"], description: "Sein buschiger Schwanz zeigt seine Stärke.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png" },
    { id: 9, name: "Turtok", type: ["Wasser"], description: "Seine Kanonen schießen Wasser mit Hochdruck.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png" },
    { id: 10, name: "Raupy", type: ["Käfer"], description: "Ein sehr gefräßiges Pokémon, das Blätter frisst.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png" },
    { id: 11, name: "Safcon", type: ["Käfer"], description: "Härtet seinen Kokon, um sich zu schützen.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png" },
    { id: 12, name: "Smettbo", type: ["Käfer", "Flug"], description: "Sammelt Honig mit seinen großen Flügeln.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png" },
    { id: 13, name: "Hornliu", type: ["Käfer", "Gift"], description: "Sein Stachel enthält Gift.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png" },
    { id: 14, name: "Kokuna", type: ["Käfer", "Gift"], description: "Bereitet sich auf die Entwicklung vor.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png" },
    { id: 15, name: "Bibor", type: ["Käfer", "Gift"], description: "Ein aggressives Pokémon mit giftigen Stacheln.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png" },
    { id: 16, name: "Taubsi", type: ["Normal", "Flug"], description: "Ein sanftes Vogel-Pokémon, das Samen frisst.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png" },
    { id: 17, name: "Tauboga", type: ["Normal", "Flug"], description: "Wird stärker, wenn es fliegt.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png" },
    { id: 18, name: "Tauboss", type: ["Normal", "Flug"], description: "Ein majestätischer Flieger, der seine Beute jagt.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png" },
    { id: 19, name: "Rattfratz", type: ["Normal"], description: "Ein kleines Nagetier, das überall vorkommt.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png" },
    { id: 20, name: "Rattikarl", type: ["Normal"], description: "Ein großes und aggressives Nagetier.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png" },
    { id: 21, name: "Habitak", type: ["Normal", "Flug"], description: "Ein sehr schnelles, kleines Vogel-Pokémon.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png" },
    { id: 22, name: "Ibitak", type: ["Normal", "Flug"], description: "Fliegt mit hoher Geschwindigkeit und sucht Beute.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png" },
    { id: 23, name: "Rettan", type: ["Gift"], description: "Wickelt sich um Beute, um sie zu ersticken.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png" },
    { id: 24, name: "Arbok", type: ["Gift"], description: "Die Muster auf seinem Körper versetzen Feinde in Angst.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png" },
    { id: 25, name: "Pikachu", type: ["Elektro"], description: "Speichert Elektrizität in seinen Backentaschen.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" },
    { id: 26, name: "Raichu", type: ["Elektro"], description: "Kann mächtige Stromstöße abgeben.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png" },
    { id: 27, name: "Sandan", type: ["Boden"], description: "Gräbt sich in die Erde, um sich abzukühlen.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png" },
    { id: 28, name: "Sandamer", type: ["Boden"], description: "Verwendet seine Krallen zum Angriff und zur Verteidigung.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png" },
    { id: 29, name: "Nidoran♀", type: ["Gift"], description: "Ein vorsichtiges Pokémon mit kleinen Stacheln.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png" },
    { id: 30, name: "Nidorina", type: ["Gift"], description: "Sehr fürsorglich gegenüber seinen Jungen.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png" },
    { id: 31, name: "Nidoqueen", type: ["Gift", "Boden"], description: "Sein harter Körper schützt es im Kampf.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png" },
    { id: 32, name: "Nidoran♂", type: ["Gift"], description: "Ein kämpferisches Pokémon mit scharfen Stacheln.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png" },
    { id: 33, name: "Nidorino", type: ["Gift"], description: "Sein Horn ist stark giftig.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png" },
    { id: 34, name: "Nidoking", type: ["Gift", "Boden"], description: "Ein massives Pokémon mit großem Horn.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png" },
    { id: 35, name: "Piepi", type: ["Fee"], description: "Ein seltenes, mysteriöses Pokémon.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png" },
    { id: 36, name: "Pixi", type: ["Fee"], description: "Lebt tief in den Bergen, fern von Menschen.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png" },
    { id: 37, name: "Vulpix", type: ["Feuer"], description: "Ein hübsches Pokémon mit sechs Schwänzen.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png" },
    { id: 38, name: "Vulnona", type: ["Feuer"], description: "Ein legendäres Pokémon mit neun Schwänzen.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png" },
    { id: 39, name: "Pummeluff", type: ["Normal", "Fee"], description: "Wiegt Gegner mit Gesang in den Schlaf.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png" },
    { id: 40, name: "Knuddeluff", type: ["Normal", "Fee"], description: "Sein Fell ist unglaublich weich.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png" },
    { id: 41, name: "Zubat", type: ["Gift", "Flug"], description: "Lebt in dunklen Höhlen und vermeidet Sonnenlicht.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png" },
    { id: 42, name: "Golbat", type: ["Gift", "Flug"], description: "Trinkt Blut von Lebewesen in der Nacht.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png" },
    { id: 43, name: "Myrapla", type: ["Pflanze", "Gift"], description: "Bewegt sich im Dunkeln, um Licht zu meiden.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png" },
    { id: 44, name: "Duflor", type: ["Pflanze", "Gift"], description: "Seine Blume riecht sehr stark.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png" },
    { id: 45, name: "Giflor", type: ["Pflanze", "Gift"], description: "Der Pollen aus seiner Blume ist giftig.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png" },
    { id: 46, name: "Paras", type: ["Käfer", "Pflanze"], description: "Ein Pilz wächst auf seinem Rücken.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png" },
    { id: 47, name: "Parasek", type: ["Käfer", "Pflanze"], description: "Der Pilz kontrolliert den Körper des Wirts.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png" },
    { id: 48, name: "Bluzuk", type: ["Käfer", "Gift"], description: "Seine Augen können in der Dunkelheit leuchten.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png" },
    { id: 49, name: "Omot", type: ["Käfer", "Gift"], description: "Seine Flügel sind mit Giftstaub bedeckt.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png" },
    { id: 50, name: "Digda", type: ["Boden"], description: "Lebt unter der Erde und lockert den Boden.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png" },
    { id: 51, name: "Digdri", type: ["Boden"], description: "Drei Köpfe, die perfekt zusammenarbeiten.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png" },
    { id: 52, name: "Mauzi", type: ["Normal"], description: "Liebt alles, was glitzert.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png" },
    { id: 53, name: "Snobilikat", type: ["Normal"], description: "Ein elegantes, stolzes Pokémon.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png" },
    { id: 54, name: "Enton", type: ["Wasser"], description: "Leidet oft unter Kopfschmerzen, die psychische Kräfte auslösen.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png" },
    { id: 55, name: "Entoron", type: ["Wasser"], description: "Ein eleganter Schwimmer mit psychischen Fähigkeiten.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png" },
    { id: 56, name: "Menki", type: ["Kampf"], description: "Ein reizbares Pokémon, das schnell wütend wird.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png" },
    { id: 57, name: "Rasaff", type: ["Kampf"], description: "Sein Zorn kennt keine Grenzen.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png" },
    { id: 58, name: "Fukano", type: ["Feuer"], description: "Ein treues und mutiges Pokémon.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png" },
    { id: 59, name: "Arkani", type: ["Feuer"], description: "Ein majestätisches Pokémon, das schnell rennt.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png" },
    { id: 60, name: "Quapsel", type: ["Wasser"], description: "Seine Haut ist so dünn, dass man seine Organe sieht.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png" },
    { id: 61, name: "Quaputzi", type: ["Wasser"], description: "Schwimmt flink mit seinem kräftigen Schweif.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png" },
    { id: 62, name: "Quappo", type: ["Wasser", "Kampf"], description: "Seine Muskeln sind hart wie Stahl.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png" },
    { id: 63, name: "Abra", type: ["Psycho"], description: "Teleportiert sich sofort, wenn es Gefahr spürt.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png" },
    { id: 64, name: "Kadabra", type: ["Psycho"], description: "Ein mysteriöses Pokémon, das Löffel mit Gedanken verbiegt.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png" },
    { id: 65, name: "Simsala", type: ["Psycho"], description: "Besitzt einen IQ von über 5000.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png" },
    { id: 66, name: "Machollo", type: ["Kampf"], description: "Trainiert ständig, um stärker zu werden.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png" },
    { id: 67, name: "Maschock", type: ["Kampf"], description: "Sein Körper ist voll reiner Muskelkraft.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png" },
    { id: 68, name: "Machomei", type: ["Kampf"], description: "Kann mit vier Armen blitzschnell zuschlagen.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png" },
    { id: 69, name: "Knofensa", type: ["Pflanze", "Gift"], description: "Lockt Beute mit süßem Duft an und verschlingt sie.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png" },
    { id: 70, name: "Ultrigaria", type: ["Pflanze", "Gift"], description: "Greift mit seinen Ranken an.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png" },
    { id: 71, name: "Sarzenia", type: ["Pflanze", "Gift"], description: "Lauert auf Beute, um sie mit Säure zu zersetzen.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png" },
    { id: 72, name: "Tentacha", type: ["Wasser", "Gift"], description: "Treibt im Meer und kann mit seinen Fangarmen angreifen.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png" },
    { id: 73, name: "Tentoxa", type: ["Wasser", "Gift"], description: "Hat über 80 Tentakel, die sich regenerieren können.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png" },
    { id: 74, name: "Kleinstein", type: ["Gestein", "Boden"], description: "Liegt oft regungslos in Bergen herum.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png" },
    { id: 75, name: "Georok", type: ["Gestein", "Boden"], description: "Lebt in Gebirgen und rollt oft Berghänge hinab.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png" },
    { id: 76, name: "Geowaz", type: ["Gestein", "Boden"], description: "Sein Körper ist so hart, dass selbst Dynamit ihn kaum beschädigt.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png" },
    { id: 77, name: "Ponita", type: ["Feuer"], description: "Ein flinkes Pferd mit flammender Mähne.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png" },
    { id: 78, name: "Gallopa", type: ["Feuer"], description: "Rennt schneller als ein Auto.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png" },
    { id: 79, name: "Flegmon", type: ["Wasser", "Psycho"], description: "Ein träges Pokémon, das oft ins Leere starrt.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png" },
    { id: 80, name: "Relaxo", type: ["Normal"], description: "Isst täglich über 400 kg Nahrung und schläft fast immer.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png" }
];

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

let currentList = [...pokemons];
let displayedCount = 0;
const perPage = 20;
let enriched = false;

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

        // Fetch German ability names
        const abilityPromises = p.abilities.map(async (a) => {
            try {
                const res = await fetch(a.ability.url);
                if (!res.ok) return a.ability.name;
                const data = await res.json();
                const deName = data.names.find(n => n.language.name === 'de')?.name;
                return deName || a.ability.name;
            } catch {
                return a.ability.name;
            }
        });
        const abilities = await Promise.all(abilityPromises);

        let genus = null;
        if (Array.isArray(s.genera)) {
            const de = s.genera.find(g => g.language && g.language.name === "de");
            const en = s.genera.find(g => g.language && g.language.name === "en");
            genus = de ? de.genus : (en ? en.genus : null);
        }
        const evolutionChainUrl = s.evolution_chain?.url || null;
        return { height, weight, abilities, category: genus, evolutionChainUrl };
    } catch (err) {
        console.warn("PokéAPI fetch error for", id, err);
        return { height: null, weight: null, abilities: [], category: null, evolutionChainUrl: null };
    }
}

async function fetchEvolutionChain(url) {
    if (!url) return [];
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("API error");
        const data = await res.json();
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
    } catch (err) {
        console.warn("Evolution chain fetch error:", err);
        return [];
    }
}

async function enrichAll(maxConcurrent = 6) {
    if (enriched) return;
    const queue = [...pokemons];
    const workers = Array.from({ length: maxConcurrent }, async () => {
        while (queue.length) {
            const p = queue.shift();
            try {
                const official = await fetchPokemonOfficialData(p.id);
                p.height = official.height || p.height || null;
                p.weight = official.weight || p.weight || null;
                p.abilities = (official.abilities && official.abilities.length) ? official.abilities : (p.abilities || []);
                p.category = official.category || p.category || null;
                p.evolutionChainUrl = official.evolutionChainUrl;
                p.evolutions = await fetchEvolutionChain(p.evolutionChainUrl);
            } catch (e) {
                console.warn("Enrich failed for", p.id, e);
            }
        }
    });
    await Promise.all(workers);
    enriched = true;
}

function createCard(pokemon) {
    const card = document.createElement("article");
    card.className = "card";
    if (Array.isArray(pokemon.type)) {
        pokemon.type.forEach(t => {
            const cls = typeToClassName(t);
            if (cls) card.classList.add(cls);
        });
    } else if (pokemon.type) {
        const cls = typeToClassName(pokemon.type);
        if (cls) card.classList.add(cls);
    }
    card.tabIndex = 0;
    card.innerHTML = `
        <img class="sprite" src="${pokemon.image}" alt="${pokemon.name} sprite" loading="lazy" />
        <div class="card-body">
            <h3 class="p-name">${pokemon.name}</h3>
            <p class="p-types">${(pokemon.type || []).join(", ")}</p>
        </div>
    `;
    card.addEventListener("click", () => openDialog(pokemon));
    card.addEventListener("keydown", (e) => {
        if (e.key === "Enter") openDialog(pokemon);
    });
    return card;
}

function renderPokemons(list = currentList) {
    if (!grid) return;
    grid.innerHTML = "";
    const visible = list.slice(0, displayedCount);
    if (visible.length === 0) {
        grid.innerHTML = `<p class="empty">Keine Pokémon gefunden.</p>`;
        loadMoreBtn.style.display = "none";
        return;
    }
    const frag = document.createDocumentFragment();
    visible.forEach(p => frag.appendChild(createCard(p)));
    grid.appendChild(frag);
    loadMoreBtn.style.display = (displayedCount >= list.length) ? "none" : "inline-block";
}

function openDialog(p) {
    if (!dialog) return;
    dialogImg.src = p.image;
    dialogImg.alt = p.name;
    dialogName.textContent = p.name;
    dialogNumber.textContent = `#${String(p.id).padStart(3, "0")}`;

    const meta = [];
    if (p.category) meta.push(`Kategorie: ${p.category}`);
    dialogEntry.textContent = `${p.description || ""}${meta.length ? `\n\n${meta.join(" • ")}` : ""}`;

    dialogTypes.innerHTML = "";
    if (p.type && p.type.length) {
        p.type.forEach(t => {
            const tag = document.createElement("span");
            const cls = typeToClassName(t);
            tag.className = `type-tag ${cls}`;
            tag.textContent = t;
            dialogTypes.appendChild(tag);
        });
    }

    dialogStats.innerHTML = "";
    if (p.abilities && p.abilities.length) {
        const table = document.createElement("table");
        table.className = "ability-table";
        const row = document.createElement("tr");
        p.abilities.forEach(a => {
            const td = document.createElement("td");
            td.textContent = a;
            row.appendChild(td);
        });
        table.appendChild(row);
        dialogStats.appendChild(table);
    } else {
        dialogStats.textContent = "Keine Fähigkeiten bekannt.";
    }

    dialogEvolution.innerHTML = "";
    if (p.evolutions && p.evolutions.length > 1) {
        const evoRow = document.createElement("div");
        evoRow.className = "evo-row";
        p.evolutions.forEach(evo => {
            const evoItem = document.createElement("div");
            evoItem.className = "evo-item";
            const img = document.createElement("img");
            img.src = evo.image;
            img.alt = evo.name;
            img.className = "evo-sprite";
            const nameSpan = document.createElement("span");
            nameSpan.textContent = evo.name;
            evoItem.appendChild(img);
            evoItem.appendChild(nameSpan);
            evoRow.appendChild(evoItem);
        });
        dialogEvolution.appendChild(evoRow);
    } else {
        dialogEvolution.textContent = "Keine Evolutionen.";
    }

    dialogHeight.textContent = p.height || "—";
    dialogWeight.textContent = p.weight || "—";

    dialog.showModal();
    const content = dialog.querySelector(".dialog-content");
    if (content) content.focus();
}

function closeDialog() {
    if (!dialog) return;
    dialog.close();
}

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

if (searchInput) {
    searchInput.addEventListener("input", (e) => handleSearch(e.target.value));
}

if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {
        displayedCount = Math.min(currentList.length, displayedCount + perPage);
        renderPokemons();
    });
}

if (closeDialogBtn) {
    closeDialogBtn.addEventListener("click", closeDialog);
}

async function init() {
    if (!grid || !searchInput || !loadMoreBtn) {
        console.error("Fehlende DOM-Elemente: pokemonGrid, search oder loadMoreBtn.");
        return;
    }
    dialog.addEventListener("click", (e) => {
        if (e.target === dialog) closeDialog();
    });
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeDialog();
    });
    displayedCount = perPage;
    currentList = [...pokemons];
    renderPokemons();
    try {
        await enrichAll();
        renderPokemons();
    } catch (e) {
        console.warn("Anreichern fehlgeschlagen:", e);
    }
}

init();