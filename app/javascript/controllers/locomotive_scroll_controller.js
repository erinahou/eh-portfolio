import { Controller } from "@hotwired/stimulus";
import LocomotiveScroll from "locomotive-scroll";

// Connects to data-controller="locomotive-scroll"
export default class extends Controller {
  connect() {
    console.log('Connected to locomotive_scroll.js');
    new LocomotiveScroll({
      el: this.element,
      smooth: true,
      multiplier: 0.75,
      scrollFromAnywhere: true,
    });

    // Update scroll after 5 seconds
    setTimeout(() => {
      scroll.update();
    }, 5000);
  }
}
