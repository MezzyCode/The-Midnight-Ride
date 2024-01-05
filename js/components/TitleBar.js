class TitleBar extends HTMLElement {
  render() {
    const type = this.getAttribute('type');
    const sideButtonIcon = `<i class="fa-solid fa-bars"></i>`
    this.innerHTML = `<div class="title-bar ${type ? type : ''}">
    <div class="brand">
        <img src="./img/logo.webp" alt="Logo">
        <a class="tmr-text" href="./index.html">
            <span>THE</span>
            <span>MIDNIGHT</span>
            <span>RIDE</span></a>
    </div>
    <div class="flex-center">
        <button class="drawer" id="sideButton" type="button" aria-label="Open Navigation Drawer">
            ${type !== 'transparent' ? sideButtonIcon : ''}
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
