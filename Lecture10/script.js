const productList = document.querySelector(".productList");
const searchInput = document.querySelector(".searchInput");
const categorySelectList = document.querySelector(".categoryList");

var allProducts = [];

async function fetchProductsData(){
        try{
    const httRes = await fetch('https://fakestoreapi.com/products');
    const productsData = await httRes.json();
    allProducts = productsData;
    return productsData;
    }
    catch(err){
        console.log("Error "+err);
        return [];
    }
}


 async function  displayProductsAndCategories(){

    const productsData = await fetchProductsData();

    renderCategories(productsData);

    renderProducts(productsData);
 
}


function renderCategories(productData){

    const categories= getCategories(productData);

    const select = document.createElement("select");
    select.setAttribute("name","category");
    select.id = "category"

       const option = document.createElement("option");
        option.setAttribute("value","");
        option.textContent = "None";

        select.appendChild(option);


    select.addEventListener("change",onCategoryChange);

    categories.forEach((category)=>{

        const option = document.createElement("option");
        option.setAttribute("value",category);
        option.textContent = category;

        select.appendChild(option);

    })

    categorySelectList.appendChild(select);
  
}


function onCategoryChange(e){
        const selectedCategory = e.target.value;


        if(selectedCategory===""){
            renderProducts(allProducts);
            return;
        }

        const filteredProducts = allProducts.filter((product)=>{
             return product.category == selectedCategory
        })

        renderProducts(filteredProducts);

 };


function getCategories(productData){
  const categories = new Set();

    productData.forEach((product)=>{
        categories.add(product.category);
    })

    return Array.from(categories);

}

function renderProducts(productsData){

    productList.innerHTML='';

       productsData.forEach((productData)=>{

        //create a new product 
        const product = createProduct(productData);
    


        //append the product in the DOM 
        productList.appendChild(product);
    })
}


function createProduct(productData){

    const product = document.createElement("div");
    product.className = "product";


    const productImg = document.createElement("div");
    productImg.className = "productImg";

    const img = document.createElement("img");
    img.setAttribute("src",productData.image);
    productImg.appendChild(img);

    const productDescription = document.createElement("div");
    productDescription.className = "productDescription";

    const productTile = document.createElement("p");
    productTile.className = "productTile";

    productTile.textContent=productData.title;
    

    const productRatings = document.createElement("div");
    productRatings.className = "productRatings";
    const ratings = document.createElement("span");
    const count = document.createElement("span");
    ratings.textContent = `Ratings ${productData.rating.rate}/5`
    count.textContent = `${productData.rating.count} reviews`
    productRatings.appendChild(ratings);
    productRatings.appendChild(count);


    const productCategory = document.createElement("p");
    productCategory.textContent =  `Category : ${productData.category}`
    productCategory.className = "productCategory";

    const productPrice = document.createElement("p");
    productPrice.className = "productPrice";
    productPrice.textContent =  `Rs.  ${productData.price}`


    productDescription.appendChild(productTile);
    productDescription.appendChild(productRatings);
    productDescription.appendChild(productCategory);
    productDescription.appendChild(productPrice);


    product.appendChild(productImg);
    product.appendChild(productDescription);


    return product;

}


displayProductsAndCategories();



searchInput.addEventListener("input",(event)=>{

    //what is the text that the user entered 
    const searchValue = event.target.value.toLowerCase();


    //out of all the products , fitler the prdocuts that starts with this 

    const filteredProducts = allProducts.filter((product)=>{
        return product.title.toLowerCase().startsWith(searchValue)
    })

    console.log(filteredProducts);

    renderProducts(filteredProducts);

 
})