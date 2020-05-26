// to be used on https://www.heroesofnewerth.com/heroes/
// having the browser set to automatically download JPG files rather than ask whether to save or open them speeds things up considerably
// version: 1.1
// author: Xen0byte, The Opcodemancer

var baseUrl = "https://www.heroesofnewerth.com"
var urlRegEx = new RegExp('(?:.*)[\"](.*)[\"](?:.*)')
var heroNodes = document.querySelectorAll("div.filterObjectGrid.Filter_Agility, div.filterObjectGrid.Filter_Intelligence, div.filterObjectGrid.Filter_Strength")
var heroObjects = []

function sanitizeUrl(url) {
	var match = urlRegEx.exec(url)
	return match[1]
}

function populateHeroList() {
	heroNodes.forEach(node => {
		imgUrl = sanitizeUrl(node.querySelector('div.heroIcon').style.getPropertyValue('background-image'))
		heroObjects.push({ "name": node.querySelector('div.over').innerText, "icon": baseUrl + imgUrl })
	})
}

function downloadHeroIcon(heroName, imgUrl) {
	var element = document.createElement("a")

	element.href = imgUrl
	element.download = heroName.toLowerCase().replace(/ /g, "-") + "-icon-128.jpg"
	element.style.display = "none"

	document.body.appendChild(element);

	element.click();

	document.body.removeChild(element);
}

function downloadAllHeroIcons() {
	if (document.title = "Heroes of Newerth - Heroes") {
		populateHeroList()

		heroObjects.forEach(hero => {
			downloadHeroIcon(hero["name"], hero["icon"])
		})
	}
}
