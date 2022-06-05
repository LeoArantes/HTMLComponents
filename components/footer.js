// web component
class LFooter extends HTMLElement {
	// connect component
	connectedCallback() {
		this.innerHTML = "<footer>Bye-Bye, World!</footer>";
	}
}

// register component
customElements.define("custom-footer", LFooter);
