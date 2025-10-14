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
    { id: 80, name: "Relaxo", type: ["Normal"], description: "Isst täglich über 400 kg Nahrung und schläft fast immer.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png" },
    { id: 81, name: "Voltobal", type: ["Elektro", "Stahl"], description: "Es schwebt durch die Luft und erzeugt starke Magnetfelder.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png" },
    { id: 82, name: "Magnetilo", type: ["Elektro", "Stahl"], description: "Drei Voltobal verschmelzen zu einem und verstärken ihre Elektrizität.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png" },
    { id: 83, name: "Porenta", type: ["Normal", "Flug"], description: "Es trägt eine Lauch als Waffe und ist ein geschickter Kämpfer.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png" },
    { id: 84, name: "Dodu", type: ["Normal", "Flug"], description: "Es hat zwei Köpfe und rennt unglaublich schnell über die Felder.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png" },
    { id: 85, name: "Dodri", type: ["Normal", "Flug"], description: "Drei Köpfe ermöglichen es, ständig wachsam zu sein und schnell zu fliehen.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png" },
    { id: 86, name: "Jurob", type: ["Wasser"], description: "Es lebt in kalten Gewässern und hat eine dicke Fettschicht.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png" },
    { id: 87, name: "Jugong", type: ["Wasser", "Eis"], description: "Es schwimmt elegant und jagt in eisigen Meeren nach Beute.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png" },
    { id: 88, name: "Sleima", type: ["Gift"], description: "Es entsteht aus verschmutztem Abfall und verursacht schleimige Pfützen.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png" },
    { id: 89, name: "Sleimok", type: ["Gift"], description: "Sein giftiger Schleim ist so klebrig, dass nichts entkommen kann.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png" },
    { id: 90, name: "Muschas", type: ["Wasser"], description: "Es klammert sich an Felsen und wartet auf vorbeiziehende Beute.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png" },
    { id: 91, name: "Austos", type: ["Wasser", "Eis"], description: "Seine Schale ist hart wie Stahl und schützt vor starken Angriffen.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png" },
    { id: 92, name: "Nebulak", type: ["Geist", "Gift"], description: "Es ist ein Gaswesen, das in Friedhöfen umgeht und erschreckt.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png" },
    { id: 93, name: "Alpollo", type: ["Geist", "Gift"], description: "Es leckt an seinen Opfern und saugt langsam ihre Energie ab.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png" },
    { id: 94, name: "Gengar", type: ["Geist", "Gift"], description: "Es versteckt sich in Schatten und bringt Unglück über die Menschen.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png" },
    { id: 95, name: "Onix", type: ["Gestein", "Boden"], description: "Sein langer Körper bohrt sich durch Berge und verursacht Erdbeben.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png" },
    { id: 96, name: "Traumato", type: ["Psycho"], description: "Es hypnotisiert seine Opfer und frisst deren Träume im Schlaf.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png" },
    { id: 97, name: "Hypno", type: ["Psycho"], description: "Mit seiner Pendeluhr versetzt es Feinde in einen tiefen Schlaf.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png" },
    { id: 98, name: "Krabby", type: ["Wasser"], description: "Seine starken Scheren können Kokosnüsse knacken und Boote zerstören.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png" },
    { id: 99, name: "Kingler", type: ["Wasser"], description: "Eine Schere ist so groß wie sein Körper und schwer zu heben.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png" },
    { id: 100, name: "Voltobal", type: ["Elektro"], description: "Es sieht aus wie ein Pokéball und entlädt plötzliche Stromstöße.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png" },
    { id: 101, name: "Lektrobal", type: ["Elektro"], description: "Es rotiert schnell und explodiert bei Gefahr mit hoher Spannung.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png" },
    { id: 102, name: "Owei", type: ["Pflanze", "Psycho"], description: "Sechs Eier bewegen sich telepathisch und wachsen zu einem Baum.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png" },
    { id: 103, name: "Kokowei", type: ["Pflanze", "Psycho"], description: "Drei Köpfe wachsen aus Kokosnüssen und schwingen im tropischen Wind.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png" },
    { id: 104, name: "Tragosso", type: ["Boden"], description: "Es trägt den Schädel seiner Mutter als Helm zum Schutz.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png" },
    { id: 105, name: "Knogga", type: ["Boden"], description: "Mit seinem Knochenclub schlägt es gnadenlos auf Gegner ein.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png" },
    { id: 106, name: "Kicklee", type: ["Kampf"], description: "Seine Beine sind wie Federn und treten mit enormer Kraft.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png" },
    { id: 107, name: "Nockchan", type: ["Kampf"], description: "Es boxte so viel, dass seine Fäuste wie harte Steine wurden.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png" },
    { id: 108, name: "Schlurp", type: ["Normal"], description: "Seine Zunge ist zwei Meter lang und leckt alles sauber.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png" },
    { id: 109, name: "Smogon", type: ["Gift"], description: "Es speit giftigen Rauch aus und verursacht Verschmutzung.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png" },
    { id: 110, name: "Smogmog", type: ["Gift"], description: "Zwei Köpfe erzeugen doppelt so viel giftigen Nebel.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png" },
    { id: 111, name: "Rihorn", type: ["Boden", "Gestein"], description: "Es stürmt mit seinem Horn durch Berge und verursacht Lawinen.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png" },
    { id: 112, name: "Rizeros", type: ["Boden", "Gestein"], description: "Seine Panzerplatte schützt es vor allen Angriffen.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png" },
    { id: 113, name: "Chaneira", type: ["Normal"], description: "Es legt Eier, die glückliche Babys hervorbringen.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png" },
    { id: 114, name: "Tangela", type: ["Pflanze"], description: "Seine blauen Ranken verbergen den Körper vollständig.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png" },
    { id: 115, name: "Kangama", type: ["Normal"], description: "Das Jungtier im Beutel hilft bei Kämpfen mit.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png" },
    { id: 116, name: "Seeper", type: ["Wasser"], description: "Es schwimmt aufrecht und spuckt Tinte zur Verteidigung.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png" },
    { id: 117, name: "Seemon", type: ["Wasser"], description: "Seine Stacheln sind giftig und schützen vor Feinden.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png" },
    { id: 150, name: "Mewtu", type: ["Psycho"], description: "Es wurde künstlich erschaffen und besitzt immense psychische Kräfte.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png" },
    { id: 384, name: "Rayquaza", type: ["Drache", "Flug"], description: "Es lebt in der Ozonschicht und balanciert das Wetter der Welt.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png" },
    { id: 445, name: "Knakrack", type: ["Drache", "Boden"], description: "Es fliegt mit Überschallgeschwindigkeit und gräbt sich durch den Boden.", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png" }
];

// Hinweis: Dein bestehendes Array hat einen Fehler bei ID 80 (Relaxo ist eigentlich ID 143). Du könntest das korrigieren, indem du id: 80 zu id: 143 änderst und die image passt schon.


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

async function getAbilityName(a) {
    try {
        const res = await fetch(a.ability.url);
        if (!res.ok) return a.ability.name;
        const data = await res.json();
        const deName = data.names.find(n => n.language.name === 'de')?.name;
        return deName || a.ability.name;
    } catch {
        return a.ability.name;
    }
}

async function getAbilityNames(abilities) {
    const promises = abilities.map(getAbilityName);
    return Promise.all(promises);
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
        const [pokemonRes, speciesRes] = await Promise.all([fetch(`${base}/pokemon/${id}`), fetch(`${base}/pokemon-species/${id}`)]);
        if (!pokemonRes.ok || !speciesRes.ok) throw new Error("API error");
        const p = await pokemonRes.json();
        const s = await speciesRes.json();
        const height = typeof p.height === "number" ? `${(p.height / 10).toFixed(1)} m` : null;
        const weight = typeof p.weight === "number" ? `${(p.weight / 10).toFixed(1)} kg` : null;
        const abilities = await getAbilityNames(p.abilities);
        const category = getGenus(s);
        const evolutionChainUrl = s.evolution_chain?.url || null;
        return { height, weight, abilities, category, evolutionChainUrl };
    } catch (err) {
        console.warn("PokéAPI fetch error for", id, err);
        return { height: null, weight: null, abilities: [], category: null, evolutionChainUrl: null };
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

async function enrichSingle(p) {
    try {
        const official = await fetchPokemonOfficialData(p.id);
        p.height = official.height || p.height || null;
        p.weight = official.weight || p.weight || null;
        p.abilities = official.abilities.length ? official.abilities : (p.abilities || []);
        p.category = official.category || p.category || null;
        p.evolutionChainUrl = official.evolutionChainUrl;
        p.evolutions = await fetchEvolutionChain(p.evolutionChainUrl);
    } catch (e) {
        console.warn("Enrich failed for", p.id, e);
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

function addTypesToCard(card, types) {
    if (!types) return;
    const t = Array.isArray(types) ? types : [types];
    t.forEach(type => {
        const cls = typeToClassName(type);
        if (cls) card.classList.add(cls);
    });
}

function createCard(pokemon) {
    const card = document.createElement("article");
    card.className = "card";
    addTypesToCard(card, pokemon.type);
    card.tabIndex = 0;
    card.innerHTML = `<img class="sprite" src="${pokemon.image}" alt="${pokemon.name} sprite" loading="lazy" /><div class="card-body"><h3 class="p-name">${pokemon.name}</h3><p class="p-types">${(pokemon.type || []).join(", ")}</p></div>`;
    card.addEventListener("click", () => openDialog(pokemon));
    card.addEventListener("keydown", e => e.key === "Enter" && openDialog(pokemon));
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
        const cls = typeToClassName(t);
        tag.className = `type-tag ${cls}`;
        tag.textContent = t;
        dialogTypes.appendChild(tag);
    });
}

function createAbilityCell(a) {
    const td = document.createElement("td");
    td.textContent = a;
    return td;
}

function setDialogAbilities(p) {
    dialogStats.innerHTML = "";
    if (!p.abilities || !p.abilities.length) {
        dialogStats.textContent = "Keine Fähigkeiten bekannt.";
        return;
    }
    const table = document.createElement("table");
    table.className = "ability-table";
    const row = document.createElement("tr");
    p.abilities.forEach(a => row.appendChild(createAbilityCell(a)));
    table.appendChild(row);
    dialogStats.appendChild(table);
}

function createEvoItem(evo) {
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
    return evoItem;
}

function setDialogEvolutions(p) {
    dialogEvolution.innerHTML = "";
    if (!p.evolutions || p.evolutions.length <= 1) {
        dialogEvolution.textContent = "Keine Evolutionen.";
        return;
    }
    const evoRow = document.createElement("div");
    evoRow.className = "evo-row";
    p.evolutions.forEach(evo => evoRow.appendChild(createEvoItem(evo)));
    dialogEvolution.appendChild(evoRow);
}

function setDialogHeightWeight(p) {
    dialogHeight.textContent = p.height || "—";
    dialogWeight.textContent = p.weight || "—";
}

function openDialog(p) {
    if (!dialog) return;
    setDialogBasic(p);
    setDialogEntry(p);
    setDialogTypes(p);
    setDialogAbilities(p);
    setDialogEvolutions(p);
    setDialogHeightWeight(p);
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

function setupEventListeners() {
    if (searchInput) searchInput.addEventListener("input", e => handleSearch(e.target.value));
    if (loadMoreBtn) loadMoreBtn.addEventListener("click", () => {
        displayedCount = Math.min(currentList.length, displayedCount + perPage);
        renderPokemons();
    });
    if (closeDialogBtn) closeDialogBtn.addEventListener("click", closeDialog);
    if (dialog) dialog.addEventListener("click", e => { if (e.target === dialog) closeDialog(); });
    document.addEventListener("keydown", e => { if (e.key === "Escape") closeDialog(); });
}

async function init() {
    if (!grid || !searchInput || !loadMoreBtn) {
        console.error("Fehlende DOM-Elemente: pokemonGrid, search oder loadMoreBtn.");
        return;
    }
    setupEventListeners();
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