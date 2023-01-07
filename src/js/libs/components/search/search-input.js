import { searchJSON } from "./searchJSON";

export function initSearchInput() {
  return {
    searchData(e) {
      let searchTerm = e.target.value;
      const batch = searchJSON(searchTerm, "/api/search.json");
    },
  };
}
