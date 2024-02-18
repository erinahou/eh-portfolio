import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="card-hover"
export default class extends Controller {
  static targets = ["cardElement"]
  fire() {
    // console.log("Hello from card_hover_controller.js")
    this.cardElementTarget.classList.add("bg-card-hover");
  }

  reset() {
    this.cardElementTarget.classList.remove("bg-card-hover");
  }
}
