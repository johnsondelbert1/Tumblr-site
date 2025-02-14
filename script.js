document.addEventListener("DOMContentLoaded", function () {
    const socialLinks = document.getElementById("social-links");
    const donationLinks = document.getElementById("donation-links");

    function loadConfig() {
        fetch("config.json")
            .then(response => response.json())
            .then(data => {
                // Set links
                const links = data.links;
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
            });
    }

    loadConfig();
});
