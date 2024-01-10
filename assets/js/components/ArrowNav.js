class ArrowNav extends HTMLElement {
  getLinks() {
    const sideBarLinks = document.querySelector('#sideBar').querySelectorAll('a');
    let linkIndex = -1;
    sideBarLinks.forEach((link, index) => {
      if (link.classList.contains('active')) {
        linkIndex = index;
      }
    })

    if (linkIndex !== -1) {
      const activeLink = sideBarLinks[linkIndex];
      const prevLink = linkIndex > 0 ? sideBarLinks[linkIndex - 1] : null;
      const nextLink = linkIndex < sideBarLinks.length - 1 ? sideBarLinks[linkIndex + 1] : null;

      return { activeLink, prevLink, nextLink };
    } else {
      console.log('No active link found');
    }
  }

  arrowTemplate(href, id, rel, text, icon) {
    return `<a class="arrow-nav-link" href="${href ? href : './index.html'}" id="${id}" rel="${rel}">
  ${rel === 'prev' ? `<span class="icon ${icon}"></span>` : ''}
  <span>${text}</span>
  ${rel === 'next' ? `<span class="icon ${icon}"></span>` : ''}
</a>`
  }

  render() {
    const links = this.getLinks();
    if (links.prevLink) {
      const prevLink = links.prevLink;
      this.innerHTML += prevLink ? this.arrowTemplate(prevLink.href, 'previous', 'prev', prevLink.innerText, 'i-arrow-left-bold') : '<div></div>';
    }

    if (links.nextLink) {
      const nextLink = links.nextLink;
      this.innerHTML += nextLink ? this.arrowTemplate(nextLink.href, 'next', 'next', nextLink.innerText, 'i-arrow-right-bold') : '<div></div>';
    }
    this.classList.add('arrow-nav')
  }

  connectedCallback() {
    if (!this.rendered) {
      this.render();
      this.rendered = true;
    }
  }
}

customElements.define('arrow-nav', ArrowNav);