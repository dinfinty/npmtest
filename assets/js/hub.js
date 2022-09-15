var firefly_client_doc_navbar = `
<div class="firefly-doc-nav">
    <a href="https://firefly.exchange/">
        <img class="logo" 
            src="assets/images/firefly-logo.svg"
            alt="Firefly Client Documentation1">
        <h2 class="headerTitleWithLogo">Client Docs</h2>
    </a>
</div>
`;

function addFireflyClientDocHubNavBar() {
  var nav_container = document.createElement("div");
  nav_container.innerHTML = firefly_client_doc_navbar;
  let sidebar = document.getElementsByClassName("sidebar");
  sidebar[0].insertBefore(nav_container, sidebar[0].firstChild);
}

window.onload = function () {
  addFireflyClientDocHubNavBar();
};
