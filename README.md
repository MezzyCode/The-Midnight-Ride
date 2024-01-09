# The Midnight Ride

[![LICENSE](https://img.shields.io/badge/license-MIT-informational.svg)](https://github.com/h5bp/html5-boilerplate/blob/master/LICENSE.txt)

## A Comprehensive Fallout 4 Modding Guide

The Midnight Ride is a modding guide for Fallout 4 that will guide you through the installation of all the necessary mods for a stable, smooth, and enjoyable gaming experience. The guide is designed to be highly accessible for all users, regardless of modding experience. It's crucial to carefully read all instructions, as even experienced users may find important details. While no prior modding experience is required, a general understanding of computer operation is expected.

## Fork Changes

### tmr-component-based branch

**Right Side Bar Navigation:**

- Dynamically generates anchors from content headings (h2, h3, etc.).
  - Modification to include abbreviation options is added on tmr-optimization branch.

**Left Side Bar Navigation:**

- Automatically adds 'active' class to links in the sidebar and extended-background container based on the current page's URL.
- Improved semantic representation by switching from `<a>` to `<button>` for the dono menu.

**HTML Pages:**

- Updated `<script>` tag to include type module.
- Modified related elements like topbar and sidebar into custom elements.

**style.css:**

- Removed specific styles to prevent CSS Reflows - Layout.
- Added styles for right side bar content headings.

### tmr-optimization branch branch (built on top of tmr-component-based branch)

#### Optimizations

**Head:**

- Removed `<meta http-equiv="X-UA-Compatible" content="ie=edge">` for compatibility reasons.

**Main Javascript:**

- Removed `window.addEventListener('resize', sizeChanged)` and related functions due to performance risks.
  - Replaced with CSS-based alternative.
- Reworked `document.addEventListener('keydown')` to use a switch statement.

**Notable Changes:**

- Rewrote the HTML with proper structure (specifically, from Setup to Base Finish page, Bug Fixes page too but only from UFO4 to SprintFix).
- Combined Left and Right Nav into one for a unified experience, allowing mobile users to enjoy both navigation features.
- Remade the arrow navigation feature to automatically retrieve prev and next page names and href.
- Redesigned CSS from ground-up for responsive design.
- Switched out the fa-icon with Iconify's icon generator feature, making it accessible even when offline.
