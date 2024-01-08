import './js/Components.js';
// Index
if (window.location.href.endsWith('/index.html')) {
	const indexButton = document.querySelector('.index-button');
	indexButton.addEventListener('change', () => {
		console.log('chagg');
	})
}

// Reworked Drawer
const toggleDrawer = () => {
	const sideBar = document.querySelector('#sideBar');
	sideBar.classList.toggle('active');
}

const drawer = document.querySelector('#drawer');
drawer.addEventListener('click', toggleDrawer);
const sideBarOverlay = document.querySelector('.side-bar-overlay');
sideBarOverlay.addEventListener('click', toggleDrawer);

// Generate Anchor
const contentHeading = document.querySelectorAll('.content h2, .content h3, .content h4');
const anchorList = document.createElement('ul');
contentHeading.forEach(heading => {
	if (heading.id) {
		const listItem = document.createElement('li');
		const shortHeading = heading.getAttribute('short')
		listItem.innerHTML = `<a href="#${heading.id}">${shortHeading ? shortHeading : heading.textContent}</a>`;
		listItem.classList.add(`side-nav-${heading.tagName}`);
		anchorList.appendChild(listItem);
	}
});

const activeLink = document.querySelector('#activeLink');
activeLink.classList.toggle('side-bar-anchor')
activeLink.appendChild(anchorList);

// Reworked Dono Menu. Still WIP
const donoMenusContainer = document.querySelectorAll('.donoMenu');
donoMenusContainer.forEach(element => {
	const donoMenuBtn = element.previousElementSibling;
	donoMenuBtn.addEventListener('click', () => {
		element.classList.toggle('hidden');
		setTimeout(() => {
			element.classList.add('hidden');
		}, 5000);
	})
});

// Reworked Expander
const expanderElement = document.querySelectorAll('.expander-title')
expanderElement.forEach((expanderTitle) => {
	expanderTitle.addEventListener('click', () => {
		const expanderInfo = expanderTitle.nextElementSibling;
		const expanderStatus = expanderTitle.lastElementChild;
		expanderInfo.classList.toggle('hidden');
		expanderStatus.textContent = expanderStatus.textContent === 'Show' ? 'Hide' : 'Show';
	})
})

// Arrow Navigation
const openLinkById = (id) => {
	window.open(document.getElementById(id).href, '_self')
}

document.addEventListener('keydown', (pressedKey) => {
	switch (pressedKey.code) {
		case 'ArrowRight':
			openLinkById('next');
			break;
		case 'ArrowLeft':
			openLinkById('previous');
			break
		default:
			break;
	}
});