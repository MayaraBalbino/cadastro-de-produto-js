const productForm = document.getElementById("productForm");
const listSection = document.getElementById("listSection");
const formSection = document.getElementById("formSection");
const productList = document.getElementById("productList").querySelector("tbody");
const backToFormButton = document.getElementById("backToForm");

const products = [];


function showForm() {
    listSection.style.display = "none";
    formSection.style.display = "block";
}

function showList() {
    formSection.style.display = "none";
    listSection.style.display = "block";
}


productForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("productName").value;
    const description = document.getElementById("productDescription").value;
    const value = parseFloat(document.getElementById("productValue").value).toFixed(2);
    const available = document.querySelector('input[name="available"]:checked').value;

    
    products.push({ name, description, value, available });

    
    updateProductList();

    
    productForm.reset();

    
    showList();
});


function updateProductList() {
    productList.innerHTML = "";

    products.forEach(product => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.description}</td>
            <td>R$ ${product.value}</td>
            <td>${product.available}</td>
        `;
        productList.appendChild(row);
    });
}


backToFormButton.addEventListener("click", showForm);