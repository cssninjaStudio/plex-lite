"use strict";

//Alpine JS and plugins import
import Alpine from "alpinejs";
import intersect from "@alpinejs/intersect";
import Fern from "@ryangjchandler/fern";

window.Alpine = Alpine;
//Init intersect plugin
Alpine.plugin(intersect);
//Init Fern plugin
Alpine.plugin(Fern);
//Init Fern persisted store
Alpine.persistedStore("app", {
  isDark: false,
});
//Start Alpine JS
Alpine.start();

import { insertBgImages } from "./libs/utils/utils";
import { initLazyLoading } from "./libs/utils/lazyload";
import "./libs/components";
import "./libs/pages";

document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    //Lazy Loading
    const lazy = initLazyLoading();

    //Switch backgrounds
    const changeBackgrounds = insertBgImages();
  }
};
