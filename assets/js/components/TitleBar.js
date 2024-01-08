class TitleBar extends HTMLElement {
  render() {
    const type = this.getAttribute('type');
    this.innerHTML = `<div class="title-bar ${type ? type : ''}">
    <div class="brand">
        <img src="./img/logo.webp" alt="Logo">
        <a class="tmr-text" href="./index.html"> The Midnight Ride</a>
    </div>
    <div class="flex-center">
        <button class="drawer ${type ? type : ''}" id="drawer" type="button" aria-label="Open Navigation Drawer">
            <span class="icon i-menu"></span>
        </button>
        <nav class="guide-links">
            <a href="https://vivanewvegas.moddinglinked.com" target="_blank" rel="nofollow">Viva New Vegas</a>
            <a href="https://thebestoftimes.moddinglinked.com" target="_blank" rel="nofollow">The Best of Times</a>
            <a href="https://dragonbornsfate.moddinglinked.com" target="_blank" rel="nofollow">Dragonborns Fate</a>
        </nav>
    </div>
</div>`;
  }

  connectedCallback() {
    if (!this.rendered) {
      this.render();
      this.rendered = true;
    }
  }
}

customElements.define('title-bar', TitleBar);
