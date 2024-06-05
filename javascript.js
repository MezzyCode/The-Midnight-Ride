const currentPathname = window.location.pathname;
const tmrePage = [
	'/tweaks.html',
	'/hud.html',
	'/gameplay.html',
	'/content.html',
	'/visuals.html',
	'/finish.html'];
const lsBar = () => document.getElementById('lsBar');
const sectionHNodes = () => document.querySelectorAll('.section h2, .section h3, .section h4');

function linkUtil() {
	const page = {};
	const navLinksNode = lsBar().querySelectorAll('a');
	navLinksNode.forEach((node, index) => {
		const { href } = node;

		if (href.endsWith(currentPathname)) {
			page.current = node;
			page.before = navLinksNode[index - 1];
			page.after = navLinksNode[index + 1];
		}
	});
	return page;
}

function setActiveLink() {
	const { href, classList } = linkUtil().current;
	classList.toggle('active', href.endsWith(currentPathname));
}

function pageIsTmre() {
	if (tmrePage.includes(currentPathname)) {
		document.documentElement.setAttribute('tmre', true)
	}
}

function stylizeLocalLinks() {
	const nodes = sectionHNodes();
	nodes.forEach(node => {
		nodeLink = node.querySelector('a');
		if (nodeLink) {
			nodeHref = nodeLink.getAttribute('href');
			if (nodeHref.startsWith('#')) {
				node.classList.add('local-link');
			}
		}
	})
}

function enableDrawer() {
	const drawerToggle = document.getElementById('lsToggle');
	drawerToggle.addEventListener('change', function () {
		lsBar().setAttribute('expand', this.checked)
	})
}

document.addEventListener('DOMContentLoaded', () => {
	enableDrawer();
	setActiveLink();
	pageIsTmre();
	stylizeLocalLinks();
});

class RightSideNav extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		const nav = document.createElement('nav');
		nav.ariaLabel = 'Page section navigation';
		const ul = document.createElement('ul');

		sectionHNodes().forEach((element) => {
			const { id, localName, textContent } = element;
			if (id) {
				const li = document.createElement('li');
				const short = element.getAttribute('short');
				const content = short ? short : textContent
				li.classList.add(`li-item`, localName);
				li.innerHTML = `<a href="#${id}">${content}</a>`;
				ul.appendChild(li);
			}
		})

		nav.appendChild(ul);
		this.appendChild(nav);
	}
}

customElements.define('right-side-nav', RightSideNav);

class ArrowNav extends HTMLElement {
	constructor() {
		super();
	}

	createArrow = (node, isLeft) => {
		const arrowTemplate = () => {
			const arrow = document.createElement('span');
			arrow.classList.add('icon-park-outline--arrow');
			if (!isLeft) arrow.classList.add('mirror');
			return arrow;
		};

		if (isLeft) node.prepend(arrowTemplate());
		else node.appendChild(arrowTemplate());
	};

	connectedCallback() {
		const { before, after } = linkUtil();
		const beforeClone = before.cloneNode(true);
		const afterClone = after.cloneNode(true);
		this.createArrow(beforeClone, true);
		this.createArrow(afterClone);
		this.appendChild(beforeClone);
		this.appendChild(afterClone);
		this.ariaLabel = 'Previous and Next page navigation';
	}
}

customElements.define('arrow-nav', ArrowNav);

document.addEventListener('keydown', (e) => {
	const { before, after } = linkUtil();
	switch (e.code) {
		case "ArrowRight":
			window.open(after, "_self")
			break;
		case "ArrowLeft":
			window.open(before, "_self")
			break;
		default:
			break;
	}
});

// Temp Script
function generateSection() {
	const sectionNodes = sectionHNodes();
	const article = document.createElement('article');
	sectionNodes.forEach(node => {
		const { id, outerHTML } = node;
		if (id) {
			const section = document.createElement('section');
			section.innerHTML = outerHTML;
			article.appendChild(section);
		}
	})
	return article.outerHTML;
}