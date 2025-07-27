const headerTemplate = document.createElement("template");
headerTemplate.innerHTML = `
<header style="background-color:rgb(252, 254, 217)">
<table>
<tbody>
<tr>
<td>
<div>
<a><img src="/images/logo.png"
alt="Logo - YogaTrack"
width="100" /></a>
</div>
</td>
<td align="left" valign="bottom"><a href="index.html">Home</a></td>
<td align="left" valign="bottom"><a href="/htmls/instructor.html">Instructor</a></td>
<td align="left" valign="bottom"><a href="index.html">Package</a></td>
<td align="left" valign="bottom"><a href="index.html">Class</a></td>
<td align="left" valign="bottom"><a href="index.html">Customer</a></td>
</tr>
</tbody>
</table>
</header>`;
class Header extends HTMLElement {
  constructor() {
    super();
  }
  // browser calls this method when the element is added to the document
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" }); //attach shadow DOM
    shadowRoot.appendChild(headerTemplate.content);
  }
}
customElements.define("header-component", Header);
