
const products = [
    {
        name: "Laptop",
        category: "Electronics",
        price: 55000
    },
    {
        name: "Smartphone",
        category: "Electronics",
        price: 25000
    },
    {
        name: "Headphones",
        category: "Electronics",
        price: 2000
    },
    {
        name: "T-Shirt",
        category: "Clothing",
        price: 800
    },
    {
        name: "Jeans",
        category: "Clothing",
        price: 1500
    },
    {
        name: "Jacket",
        category: "Clothing",
        price: 2500
    },
    {
        name: "JavaScript Book",
        category: "Books",
        price: 600
    },
    {
        name: "HTML and CSS Book",
        category: "Books",
        price: 500
    },
    {
        name: "Novel",
        category: "Books",
        price: 400
    },
    {
        name: "Watch",
        category: "Accessories",
        price: 3000
    },
    {
        name: "Wallet",
        category: "Accessories",
        price: 1000
    },
    {
        name: "Sunglasses",
        category: "Accessories",
        price: 1200
    }
];



const searchBox = document.getElementById("searchBox");
const category = document.getElementById("category");
const productList = document.getElementById("productList");
const errorMessage = document.getElementById("errorMessage");
const noProducts = document.getElementById("noProducts");
const clearBtn = document.getElementById("clearBtn");
const filterForm = document.getElementById("filterForm");



displayProducts(products);



function displayProducts(productArray) {


    productList.innerHTML = "";


    if (productArray.length === 0) {
        noProducts.style.display = "block";
        return;
    }

    noProducts.style.display = "none";


    productArray.forEach(function(product) {

        const productDiv = document.createElement("div");

        productDiv.classList.add("product");

        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p class="price">Price: ₹${product.price}</p>
        `;

        productList.appendChild(productDiv);
    });
}



function validateSearch() {

    const searchValue = searchBox.value.trim();

    // Empty search
    if (searchValue === "") {
        errorMessage.textContent = "Search box cannot be empty.";
        return false;
    }


    const validPattern = /^[A-Za-z\s]+$/;

    if (!validPattern.test(searchValue)) {
        errorMessage.textContent =
            "Only letters and spaces are allowed.";
        return false;
    }

    errorMessage.textContent = "";
    return true;
}



function filterProducts() {

    const searchValue = searchBox.value.trim().toLowerCase();
    const selectedCategory = category.value;

    // If search box is empty
    if (searchValue === "") {
        errorMessage.textContent = "";
        
        // Filter only by category
        if (selectedCategory === "all") {
            displayProducts(products);
        } else {
            const filtered = products.filter(function(product) {
                return product.category === selectedCategory;
            });

            displayProducts(filtered);
        }

        return;
    }

    // Validate search input
    if (!validateSearch()) {
        productList.innerHTML = "";
        noProducts.style.display = "none";
        return;
    }

    // Filter by search text and category
    const filteredProducts = products.filter(function(product) {

        const matchesSearch =
            product.name.toLowerCase().includes(searchValue);

        const matchesCategory =
            selectedCategory === "all" ||
            product.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    displayProducts(filteredProducts);
}



searchBox.addEventListener("input", function() {
    filterProducts();
});




category.addEventListener("change", function() {
    filterProducts();
});



clearBtn.addEventListener("click", function() {

    searchBox.value = "";
    category.value = "all";
    errorMessage.textContent = "";

    displayProducts(products);
});


filterForm.addEventListener("submit", function(event) {

    event.preventDefault();

    if (validateSearch()) {
        filterProducts();
    }
});
