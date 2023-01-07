export function initCompressedSidebar() {
  return {
    toggleSidebar() {
      this.$store.app.isLayoutExpanded = false;
    },
  };
}

export function initSidebar() {
  return {
    toggleSidebar() {
      this.$store.app.isLayoutExpanded = true;
    },

    toggleMobileMenu() {
      if (this.$store.app.isMobileActive === false) {
        this.$store.app.isMobileActive = true;
      } else {
        this.$store.app.isMobileActive = false;
      }
    },
  };
}
