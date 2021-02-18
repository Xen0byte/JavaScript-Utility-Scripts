// to be used on https://www.heroesofnewerth.com/heroes/
// version: 1.0
// author: Xen0byte, The Opcodemancer

function banHeroes() {
    const heroPoolSize = 139;
    var heroesToKeep = 24;

    for (i = 0; i < heroPoolSize - heroesToKeep; i++) {
        var heroNodes = document.querySelectorAll("div.filterObjectGrid.Filter_Agility.select, div.filterObjectGrid.Filter_Intelligence.select, div.filterObjectGrid.Filter_Strength.select");

        if (heroNodes.length > 0) {
            var randomindex = Math.floor(Math.random() * heroNodes.length);
            var randomHero = heroNodes[randomindex];
            randomHero.classList.remove("select");
            randomHero.classList.add("noSelect");
        }
    }
}
