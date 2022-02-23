import { searchJSON } from '../../components/search/searchJSON';

export function initDashboard() {
  return {
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
      console.log('clicked mobile', this.$store.app.isMobileActive);
    },

    initCustomChart() {
      const bars = document.querySelectorAll(".animated-bar");
      setTimeout(() => {
        for (let i = 0; i < bars.length; i++) {
          const height = parseInt(bars[i].getAttribute("data-percent"));
          bars[i].style.height = height + "%";
          if (height < 50) {
            bars[i].classList.add("is-lower");
          }
        }
      }, 1200);
    },

    searchData(e) {
        let searchTerm = e.target.value;
        let selector = e.target.getAttribute('data-selector');
        const batch = searchJSON(searchTerm, '/data/search.json', selector);
    },

    isMobileSearchActive: false,
    toggleMobileSearch() {
        this.isMobileSearchActive = !this.isMobileSearchActive;
    }
  };
}
