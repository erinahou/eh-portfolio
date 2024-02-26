import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="card-hover"
export default class extends Controller {
  static targets = ["cardElement"]

  connect() {
    if (this.cardElementTarget.dataset.projectTitle === "Finspo: Marketing") {
      this.cardElementTarget.classList.add("bg-navy");
    } else if (this.cardElementTarget.dataset.projectTitle === "Finspo: Product") {
      this.cardElementTarget.classList.add("bg-blue");
    } else if (this.cardElementTarget.dataset.projectTitle === "Kiraku") {
      this.cardElementTarget.classList.add("bg-brown");
    } else if (this.cardElementTarget.dataset.projectTitle === "Side projects") {
      this.cardElementTarget.classList.add("bg-cream");
    }
  }


  fire() {
    this.cardElementTarget.classList.add("bg-card-hover");
  }

  reset() {
    this.cardElementTarget.classList.remove("bg-card-hover");
  }
}
