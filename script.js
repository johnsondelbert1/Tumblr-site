document.addEventListener("DOMContentLoaded", function () {
    const adminToggle = document.getElementById("admin-toggle");
    const adminPanel = document.getElementById("admin-panel");
    const saveLinksBtn = document.getElementById("save-links");

    const socialLinks = document.getElementById("social-links");
    const donationLinks = document.getElementById("donation-links");

    function loadLinks() {
        const links = JSON.parse(localStorage.getItem("links")) || {
            twitter: "https://twitter.com",
            facebook: "https://facebook.com",
            instagram: "https://instagram.com",
            tumblr: "https://tumblr.com",
            venmo: "https://venmo.com",
            paypal: "https://paypal.com",
            cashapp: "https://cash.app",
            crypto: "https://your-crypto-address.com"
        };

        socialLinks.innerHTML = `
            <a href="${links.twitter}" target="_blank">Twitter</a>
            <a href="${links.facebook}" target="_blank">Facebook</a>
            <a href="${links.instagram}" target="_blank">Instagram</a>
            <a href="${links.tumblr}" target="_blank">Tumblr</a>
        `;

        donationLinks.innerHTML = `
            <h3>Support Us</h3>
            <a href="${links.venmo}" target="_blank">Venmo</a>
            <a href="${links.paypal}" target="_blank">PayPal</a>
            <a href="${links.cashapp}" target="_blank">Cash App</a>
            <a href="${links.crypto}" target="_blank">Crypto</a>
        `;
    }

    adminToggle.addEventListener("click", () => {
        adminPanel.classList.toggle("hidden");
    });

    saveLinksBtn.addEventListener("click", () => {
        const links = {
            twitter: document.getElementById("twitter").value,
            facebook: document.getElementById("facebook").value,
            instagram: document.getElementById("instagram").value,
            tumblr: document.getElementById("tumblr").value,
            venmo: document.getElementById("venmo").value,
            paypal: document.getElementById("paypal").value,
            cashapp: document.getElementById("cashapp").value,
            crypto: document.getElementById("crypto").value
        };
        localStorage.setItem("links", JSON.stringify(links));
        loadLinks();
        adminPanel.classList.add("hidden");
    });

    loadLinks();
});
