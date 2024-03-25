import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="card-hover"
export default class extends Controller {
  static targets = ["cardElement"]

  connect() {
    if (this.cardElementTarget.dataset.projectTitle === "Finspo: Marketing") {
      this.cardElementTarget.classList.add("bg-cream");
    } else if (this.cardElementTarget.dataset.projectTitle === "Finspo: Product") {
      this.cardElementTarget.classList.add("bg-purple");
    } else if (this.cardElementTarget.dataset.projectTitle === "Kiraku") {
      this.cardElementTarget.classList.add("bg-light-brown");
    } else if (this.cardElementTarget.dataset.projectTitle === "Side projects") {
      this.cardElementTarget.classList.add("bg-aqua");
    } else if (this.cardElementTarget.dataset.projectTitle === "Artsy") {
      this.cardElementTarget.classList.add("bg-steel");
    }
  }


  fire() {
    this.cardElementTarget.classList.add("bg-card-hover");
  }

  reset() {
    this.cardElementTarget.classList.remove("bg-card-hover");
  }
}
