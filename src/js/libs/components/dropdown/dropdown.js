export function initDropdown() {
  return {
    open: false,

    toggle() {
      this.open = !this.open;
    },

    close() {
      this.open = false;
    },
  };
}
