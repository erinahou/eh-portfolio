import { Controller } from "@hotwired/stimulus"
import Typed from "typed.js"

// Connects to data-controller="typed"
export default class extends Controller {
  static values = { strings: Array }
  connect() {
    new Typed(this.element, {
      strings: this.stringsValue,
      typeSpeed: 50,
      fadeOut: true,
      fadeOutClass: 'typed-fade-out',
      fadeOutDelay: 500,
      loop: true,
    })
  }

  disconnect() {
    if (this.typed) {
      this.typed.destroy() // Destroy the Typed instance when the controller is disconnected
    }
  }
}
