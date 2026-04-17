// Source of truth for Async Digital brand constants loaded by every page
// across async-digital.com and demo.async-digital.com. Mailto links marked
// with data-brand-mailto have their href set from BRAND.email at load time,
// so changing the contact email here updates every page. Legal footer text
// and LocalBusiness JSON-LD stay static in each page for robustness.
window.BRAND = Object.freeze({
  email: "h.nash1@async-digital.com",
  companyName: "Async Digital Ltd",
  companyNumber: "16950485",
  registeredOffice: "167\u2013169 Great Portland Street, London, W1W 5PF"
});

function applyBrandMailto() {
  var links = document.querySelectorAll("a[data-brand-mailto]");
  for (var i = 0; i < links.length; i++) {
    links[i].href = "mailto:" + window.BRAND.email;
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", applyBrandMailto);
} else {
  applyBrandMailto();
}
