document.addEventListener("DOMContentLoaded", () => {
    const wishlistList = document.getElementById("wishlist-list");

    let properties = [
        { id: 1, name: "Luxury Beachfront Villa", price: 25000000, location: "ECR, Chennai", image: "assets/villa.jpg" },
        { id: 2, name: "Modern 3BHK Apartment", price: 8500000, location: "Anna Nagar, Chennai", image: "assets/apartment.jpg" },
        { id: 3, name: "Cozy Independent House", price: 12000000, location: "Velachery, Chennai", image: "assets/house.jpg" },
        { id: 4, name: "Elegant Villa", price: 18000000, location: "Adyar, Chennai", image: "assets/villa2.jpg" },
        { id: 5, name: "Premium 4BHK Apartment", price: 14000000, location: "T. Nagar, Chennai", image: "assets/apartment2.jpg" },
        { id: 6, name: "Spacious Penthouse", price: 22000000, location: "OMR, Chennai", image: "assets/penthouse.jpg" },
        { id: 7, name: "Affordable 2BHK Flat", price: 6000000, location: "Tambaram, Chennai", image: "assets/flat.jpg" },
        { id: 8, name: "Modern Duplex House", price: 20000000, location: "Porur, Chennai", image: "assets/duplex.jpg" },
        { id: 9, name: "Heritage Bungalow", price: 30000000, location: "Mylapore, Chennai", image: "assets/bungalow.jpg" }
    ];

    // Get wishlist property IDs from localStorage
    function getWishlist() {
        let wishlist = [];
        for (let id = 1; id <= 9; id++) { 
            if (localStorage.getItem(`favorite-${id}`) === "true") {
                wishlist.push(id); // Store only the ID of wishlisted properties
            }
        }
        return wishlist;
    }

    // Load wishlist properties and display them
    function loadWishlist() {
        wishlistList.innerHTML = ""; // Clear existing content
        let wishlistIds = getWishlist();

        if (wishlistIds.length === 0) {
            wishlistList.innerHTML = "<p>No properties in your wishlist yet.</p>";
            return;
        }

        let wishlistProperties = properties.filter(property => wishlistIds.includes(property.id));

        wishlistProperties.forEach(property => {
            let imagePath = property.image ? property.image : "assets/default.jpg"; // Fallback image

            wishlistList.innerHTML += `
                <div class="property-card">
                    <img src="${imagePath}" alt="${property.name}" onerror="this.src='assets/default.jpg'">
                    <h3>${property.name}</h3>
                    <p><strong>Location:</strong> ${property.location}</p>
                    <p><strong>Price:</strong> ₹${property.price.toLocaleString()}</p>
                    <button class="remove-favorite-btn" data-id="${property.id}">❌ Remove</button>
                </div>
            `;
        });

        // Add event listeners to remove from wishlist
        document.querySelectorAll(".remove-favorite-btn").forEach(button => {
            button.addEventListener("click", (event) => {
                let propertyId = event.target.getAttribute("data-id");
                localStorage.removeItem(`favorite-${propertyId}`);
                loadWishlist(); // Refresh the wishlist
            });
        });
    }

    loadWishlist();
});
