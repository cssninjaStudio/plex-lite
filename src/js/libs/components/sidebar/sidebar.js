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
  };
}
