class SideBar extends HTMLElement {
  render() {
    this.innerHTML = `<div class="side-bar-overlay"></div>
<div class="side-bar-content">
  <div>
    <ul>
      <li>
        <a href="./index.html">Home</a>
      </li>
      <li>
        <a href="./intro.html">Introduction</a>
      </li>
      <li>
        <a href="./setup.html">Setup</a>
      </li>
      <li>
        <a href="./mo2.html">MO2</a>
      </li>
      <li>
        <a href="./utilities.html">Utilities</a>
      </li>
      <li>
        <a href="./bugfix.html">Bug Fixes</a>
      </li>
      <li>
        <a href="./basefinish.html">Base Finish</a>
      </li>
    </ul>
  </div>
  <div class="extended-background">
    <ul>
      <li>
        <strong id="extended-separator">TMR Extended</strong>
      </li>
      <li>
        <a href="./tweaks.html">Tweaks</a>
      </li>
      <li>
        <a href="./hud.html">User Interface</a>
      </li>
      <li>
        <a href="./gameplay.html">Gameplay</a>
      </li>
      <li>
        <a href="./visuals.html">Visuals</a>
      </li>
      <li>
        <a href="./finish.html">TMRE Finish</a>
      </li>
    </ul>
  </div>
  <div>
    <ul>
      <li>
        <a href="./changelog.html">Changelog</a>
      </li>
      <li>
        <a href="./resources.html">Resources</a>
    </li>
      <li>
        <a href="./avoid-tools.html">Tools to Avoid</a>
      </li>
      <li>
        <a href="./avoid-mods.html">Mods to Avoid</a>
      </li>
    </ul>
  </div>
  <div class="side-bar-guide-links">
    <ul>
      <li>
        <a href="https://vivanewvegas.moddinglinked.com" target="_blank" rel="nofollow">Fallout New Vegas</a>
      </li>
      <li>
        <a href="https://thebestoftimes.moddinglinked.com" target="_blank" rel="nofollow">Tale of Two Wastelands</a>
      </li>
      <li>
        <a href="https://dragonbornsfate.moddinglinked.com" target="_blank" rel="nofollow">Skyrim Special Edition</a>
      </li>
    </ul>
  </div>
  <div>
    <ul class="side-bar-footer">
      <li>
        <a href="https://discord.gg/S99Ary5eba" target="_blank" aria-label="Go to TMR Discord">
          <span class="icon i-discord"></span>
        </a>
      </li>
      <li>
        <button aria-label="Open Paypal dono menu" type="button"><span class="icon i-paypal"></span></button>
        <div class="donoMenu hidden">
          <a href="https://www.paypal.com/paypalme/VishVadeva" target="_blank">
            VishVadeva
          </a>
          <a href="https://www.paypal.com/paypalme/wallsogb" target="_blank">
            Wall SoGB
          </a>
        </div>
      </li>
      <li>
        <button aria-label="Open Dono by Ko-fi menu" type="button"><span class="icon i-kofi"></span></button>
        <div class="donoMenu hidden">
          <a href="https://ko-fi.com/vishvadeva" target="_blank">
            VishVadeva
          </a>
          <a href="https://ko-fi.com/wall_sogb" target="_blank">
            Wall SoGB
          </a>
        </div>
      </li>
      <li>
        <a aria-label="TMR Github Links" href="https://github.com/ModdingLinked/The-Midnight-Ride" target="_blank">
          <span class="icon i-github"></span>
        </a>
      </li>
    </ul>
    <div class="side-bar-footer-overlay hidden"></div>
  </div>
</div>`;
    this.id = 'sideBar';
    this.classList.add('side-bar');
  };

  setActiveLink(currentPage) {
    this.querySelectorAll('a').forEach((link) => {
      const href = link.getAttribute('href').substring(1);
      if (currentPage.endsWith(href)) {
        link.classList.add('active');
        link.parentElement.id = 'activeLink';
      }
    });

    const extendedBackground = this.querySelector('.extended-background');
    extendedBackground.querySelectorAll('a').forEach((link) => {
      if (link.classList.contains('active')) {
        extendedBackground.classList.toggle('activeExtended')
      }
    });
  }

  connectedCallback() {
    if (!this.rendered) {
      this.render();
      this.rendered = true;
    }

    const path = window.location.pathname
    const currentPage = path === '/' ? '/index.html' : path;
    this.setActiveLink(currentPage);
  }
}

customElements.define('side-bar', SideBar, { extends: 'aside' });

