document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const propertyId = params.get("id");

    const properties = {
        "1": { name: "Luxury Beachfront Villa", price: "₹2.5 Crore", location: "ECR, Chennai", image: "assets/villa.jpg", description: "A stunning villa with sea views, private pool, and modern interiors." },
        "2": { name: "Modern 3BHK Apartment", price: "₹85 Lakh", location: "Anna Nagar, Chennai", image: "assets/apartment.jpg", description: "A spacious 3BHK apartment in a prime location, close to schools and malls." },
        "3": { name: "Cozy Independent House", price: "₹1.2 Crore", location: "Velachery, Chennai", image: "assets/house.jpg", description: "A cozy independent house with a garden, perfect for families." },
        "4": { name: "Elegant Villa", price: "₹1.8 Crore", location: "Adyar, Chennai", image: "assets/villa2.jpg", description: "A luxurious villa in Adyar with premium amenities and a beautiful garden." },
        "5": { name: "Premium 4BHK Apartment", price: "₹1.4 Crore", location: "T. Nagar, Chennai", image: "assets/apartment2.jpg", description: "A high-end 4BHK apartment with spacious rooms and modern interiors." },
        "6": { name: "Spacious Penthouse", price: "₹2.2 Crore", location: "OMR, Chennai", image: "assets/penthouse.jpg", description: "A breathtaking penthouse with a rooftop terrace and ocean view." },
        "7": { name: "Affordable 2BHK Flat", price: "₹60 Lakh", location: "Tambaram, Chennai", image: "assets/flat.jpg", description: "A budget-friendly 2BHK flat with excellent connectivity." },
        "8": { name: "Modern Duplex House", price: "₹2 Crore", location: "Porur, Chennai", image: "assets/duplex.jpg", description: "A stylish duplex house with a contemporary design and garden space." },
        "9": { name: "Heritage Bungalow", price: "₹3 Crore", location: "Mylapore, Chennai", image: "assets/bungalow.jpg", description: "A beautiful heritage bungalow with classic architecture and modern facilities." }
    };

    const property = properties[propertyId];

    if (property) {
        document.getElementById("property-container").innerHTML = `
            <img src="${property.image}" alt="${property.name}" class="property-image">
            <h2>${property.name}</h2>
            <p><strong>Location:</strong> ${property.location}</p>
            <p><strong>Price:</strong> ${property.price}</p>
            <p><strong>Description:</strong> ${property.description}</p>
        `;
    } else {
        document.getElementById("property-container").innerHTML = "<p>Property not found.</p>";
    }
});
