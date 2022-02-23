export function initCompressedSidebar() {
    return {
        toggleSidebar() {
            this.$store.app.isLayoutExpanded = false;
        }
    }
}