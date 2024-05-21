document.addEventListener('DOMContentLoaded', () => {
    // Create elements
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const sectionHome = document.createElement('section');
    const sectionServices = document.createElement('section');
    const sectionPricing = document.createElement('section');
    const sectionTestimonials = document.createElement('section');
    const sectionContact = document.createElement('section');
    const footer = document.createElement('footer');

    // Set attributes and innerHTML
    document.title = "410 Haulers - Junk Removal Services";
    document.body.style.fontFamily = "Arial, sans-serif";
    document.body.style.margin = "0";
    document.body.style.padding = "0";

    header.style.backgroundColor = "#4CAF50";
    header.style.color = "white";
    header.style.padding = "1em 0";
    header.style.textAlign = "center";
    header.innerHTML = `
        <h1>Welcome to 410 Haulers</h1>
        <p>Your Reliable Junk Removal Service</p>
    `;

    nav.style.margin = "0";
    nav.style.padding = "1em 0";
    nav.style.textAlign = "center";
    nav.style.background = "#333";
    nav.innerHTML = `
        <a href="#home" style="color: white; margin: 0 1em; text-decoration: none;">Home</a>
        <a href="#services" style="color: white; margin: 0 1em; text-decoration: none;">Services</a>
        <a href="#pricing" style="color: white; margin: 0 1em; text-decoration: none;">Pricing</a>
        <a href="#testimonials" style="color: white; margin: 0 1em; text-decoration: none;">Testimonials</a>
        <a href="#contact" style="color: white; margin: 0 1em; text-decoration: none;">Contact Us</a>
    `;

    sectionHome.id = "home";
    sectionHome.style.padding = "2em";
    sectionHome.innerHTML = `
        <h2>About Us</h2>
        <p>410 Haulers is dedicated to providing fast, friendly, and reliable junk removal services. Whether you need to clear out a garage, remove old furniture, or clean up after a renovation, we're here to help.</p>
    `;

    sectionServices.id = "services";
    sectionServices.className = "services";
    sectionServices.style.background = "#f4f4f4";
    sectionServices.style.margin = "1em 0";
    sectionServices.style.padding = "1em";
    sectionServices.innerHTML = `
        <h2>Our Services</h2>
        <ul>
            <li>Junk Removal</li>
            <li>Moving Services</li>
            <li>Demolition Services</li>
            <li>Backyard Cleanups</li>
        </ul>
    `;

    sectionPricing.id = "pricing";
    sectionPricing.className = "pricing";
    sectionPricing.style.background = "#f4f4f4";
    sectionPricing.style.margin = "1em 0";
    sectionPricing.style.padding = "1em";
    sectionPricing.innerHTML = `
        <h2>Pricing</h2>
        <p>Our pricing is competitive and transparent. Contact us for a quote!</p>
        <ul>
            <li>Full Load: $150</li>
            <li>Half Load: $75</li>
            <li>Labor: $50/hour</li>
        </ul>
    `;

    sectionTestimonials.id = "testimonials";
    sectionTestimonials.className = "testimonials";
    sectionTestimonials.style.background = "#f4f4f4";
    sectionTestimonials.style.margin = "1em 0";
    sectionTestimonials.style.padding = "1em";
    sectionTestimonials.innerHTML = `
        <h2>Testimonials</h2>
        <p>"410 Haulers did an amazing job cleaning out our garage. Highly recommend!" - Jane D.</p>
        <p>"Fast and professional service. Will definitely use them again." - John S.</p>
    `;

    sectionContact.id = "contact";
    sectionContact.className = "contact";
    sectionContact.style.background = "#f4f4f4";
    sectionContact.style.margin = "1em 0";
    sectionContact.style.padding = "1em";
    sectionContact.innerHTML = `
        <h2>Contact Us</h2>
        <p>Phone: 410-960-7557</p>
        <p>Email: info@410haulers.com</p>
        <form action="mailto:info@410haulers.com" method="post" enctype="text/plain">
            <label for="name">Name:</label><br>
            <input type="text" id="name" name="name" required><br><br>
            <label for="email">Email:</label><br>
            <input type="email" id="email" name="email" required><br><br>
            <label for="message">Message:</label><br>
            <textarea id="message" name="message" rows="4" required></textarea><br><br>
            <input type="submit" value="Send">
        </form>
    `;

    footer.style.textAlign = "center";
    footer.style.padding = "1em 0";
    footer.style.background = "#333";
    footer.style.color = "white";
    footer.innerHTML = `
        <p>&copy; 2024 410 Haulers. All rights reserved.</p>
    `;

    // Append elements to the body
    document.body.appendChild(header);
    document.body.appendChild(nav);
    document.body.appendChild(sectionHome);
    document.body.appendChild(sectionServices);
    document.body.appendChild(sectionPricing);
    document.body.appendChild(sectionTestimonials);
    document.body.appendChild(sectionContact);
    document.body.appendChild(footer);
});

