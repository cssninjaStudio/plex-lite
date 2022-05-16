import { searchJSON } from "../search/searchJSON";

export function initTheme() {
  return {
    dark: false,
    toggleTheme() {
      this.$store.app.isDark = !this.$store.app.isDark;
    },
    scrolled: false,
    height: 60,
    mobileOpen: false,
    scroll() {
      let scrollValue = window.scrollY;
      if (scrollValue >= this.height) {
        this.scrolled = true;
      } else {
        this.scrolled = false;
      }
      this.searchExpanded = false;
    },

    toggleMobileMenu() {
      if (this.$store.app.isMobileActive === false) {
        this.$store.app.isMobileActive = true;
      } else {
        this.$store.app.isMobileActive = false;
      }
      console.log("clicked mobile", this.$store.app.isMobileActive);
    },

    searchData(e) {
      let searchTerm = e.target.value;
      let selector = e.target.getAttribute("data-selector");
      const batch = searchJSON(searchTerm, "/data/search.json", selector);
    },

    isMobileSearchActive: false,
    toggleMobileSearch() {
      this.isMobileSearchActive = !this.isMobileSearchActive;
    },
  };
}
