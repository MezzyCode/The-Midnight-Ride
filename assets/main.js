import './js/Components.js';
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
const donoMenuOverlay = document.querySelector('.side-bar-footer-overlay');
function toggleDonoMenus(element) {
	element.classList.toggle('hidden');
	donoMenuOverlay.classList.toggle('hidden');

	const currentTo = setTimeout(() => {
		element.classList.add('hidden');
		donoMenuOverlay.classList.add('hidden');
	}, 10000);

	return currentTo;
}

donoMenusContainer.forEach(element => {
	const donoMenuBtn = element.previousElementSibling;
	let currentTo;

	donoMenuBtn.addEventListener('click', () => {
		clearTimeout(currentTo);
		currentTo = toggleDonoMenus(element);
	});

	donoMenuOverlay.addEventListener('click', () => {
		if (!element.classList.contains('hidden')) {
			clearTimeout(currentTo);
			currentTo = toggleDonoMenus(element);
		}
	});
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