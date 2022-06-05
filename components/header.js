// web component
class LHeader extends HTMLElement {
	// connect component
	connectedCallback() {
		this.innerHTML = "<h1>Hello, World!</h1>";
	}
}

// register component
customElements.define("custom-header", LHeader);
