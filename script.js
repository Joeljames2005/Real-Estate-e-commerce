document.addEventListener("DOMContentLoaded", () => {
    const propertyList = document.getElementById("property-list");
    const sortOptions = document.getElementById("sort-options");
    const nameFilter = document.getElementById("location-filter");

    let properties = [
        { id: 1, name: "Luxury Beachfront Villa", price: 25000000, location: "ECR, Chennai", image: "assets/villa.jpg" },
        { id: 2, name: "Modern 3BHK Apartment", price: 8500000, location: "Anna Nagar, Chennai", image: "assets/apartment.jpg" },
        { id: 3, name: "Cozy Independent House", price: 12000000, location: "Velachery, Chennai", image: "assets/house.jpg" },
        { id: 4, name: "Elegant Villa", price: 18000000, location: "Adyar, Chennai", image: "assets/villa2.jpg" },
        { id: 5, name: "Premium 4BHK Apartment", price: 14000000, location: "T. Nagar, Chennai", image: "assets/apartment2.jpg" },
        { id: 6, name: "Spacious Penthouse", price: 22000000, location: "OMR, Chennai", image: "assets/penthouse.jpg" },
        { id: 7, name: "Affordable 2BHK Flat", price: 6000000, location: "Tambaram, Chennai", image: "assets/flat.jpg" },
        { id: 8, name: "Modern Duplex House", price: 20000000, location: "Porur, Chennai", image: "assets/duplex.jpg" },
        { id: 9, name: "Heritage Bungalow", price: 30000000, location: "Mylapore, Chennai", image: "assets/bungalow.jpg" },
    
        // New 11 Areas
        { id: 10, name: "Royal Mansion", price: 35000000, location: "Alwarpet, Chennai", image: "assets/royal_mansion.jpg" },
        { id: 11, name: "Grand Empire Villa", price: 27000000, location: "Kotturpuram, Chennai", image: "assets/grand_empire_villa.jpg" },
        { id: 12, name: "Beachside Villa", price: 24000000, location: "Neelankarai, Chennai", image: "assets/beachside_villa.jpg" },
        { id: 13, name: "Skyline Apartment", price: 15000000, location: "Perungudi, Chennai", image: "assets/skyline_apartment.jpg" },
        { id: 14, name: "Urban Heights", price: 18000000, location: "Kodambakkam, Chennai", image: "assets/urban_heights.jpg" },
        { id: 15, name: "Green Paradise", price: 25000000, location: "Sholinganallur, Chennai", image: "assets/green_paradise.jpg" },
        { id: 16, name: "Royal Residency", price: 22000000, location: "Nungambakkam, Chennai", image: "assets/royal_residency.jpg" },
        { id: 17, name: "Sapphire Mansion", price: 28000000, location: "Poes Garden, Chennai", image: "assets/sapphire_mansion.jpg" },
        { id: 18, name: "Golden Nest", price: 32000000, location: "Boat Club Road, Chennai", image: "assets/golden_nest.jpg" },
        { id: 19, name: "Lakeview Retreat", price: 20000000, location: "Madhavaram, Chennai", image: "assets/lakeview_retreat.jpg" },
        { id: 20, name: "Elite Haven", price: 26000000, location: "Injambakkam, Chennai", image: "assets/elite_haven.jpg" }
    ];
    

    // Function to display properties
    function displayProperties(propertyArray) {
        propertyList.innerHTML = "";
        propertyArray.forEach(property => {
            propertyList.innerHTML += `
                <div class="property-card">
                    <img src="${property.image}" alt="${property.name}" onerror="this.src='assets/default.jpg'">
                    <h3>${property.name}</h3>
                    <p><strong>Location:</strong> ${property.location}</p>
                    <p><strong>Price:</strong> ₹${property.price.toLocaleString()}</p>
                    <a href="property.html?id=${property.id}" class="view-details">View Details</a>
                    <button class="favorite-btn" data-id="${property.id}">🤍 Add to Wishlist</button>
                </div>
            `;
        });
    }

    // Initial Display
    displayProperties(properties);

    // Sort by Price
    sortOptions.addEventListener("change", () => {
        let sortedProperties = [...properties];
        if (sortOptions.value === "low-to-high") {
            sortedProperties.sort((a, b) => a.price - b.price);
        } else if (sortOptions.value === "high-to-low") {
            sortedProperties.sort((a, b) => b.price - a.price);
        }
        displayProperties(sortedProperties);
    });

    // Filter by Location
    nameFilter.addEventListener("input", () => {
        const filterValue = nameFilter.value.toLowerCase();
        const filteredProperties = properties.filter(property =>
            property.location.toLowerCase().includes(filterValue)
        );

        displayProperties(filterValue === "all" ? properties : filteredProperties);
    });
});
