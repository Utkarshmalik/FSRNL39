import { useEffect, useState } from "react";
import NavbarComp from "../Common/Navbar/Navbar";
import Product from "../Product/Product";
import "./ProductList.css";
import SpinnerComp from "../Common/Spinner/Spinner";
import ProductDetail from "../ProductDetail/ProductDetail";

var allProducts=[];


function ProductList(props){
    console.log("Product List getting rendered");
    
    const [productData, setProductsData] = useState(null);
    const [searchValue, setSearchValue] = useState("");
    const [showDetailModel , setShowDetailModel] = useState(false);
    const [selectedProduct , setSelectedProduct] = useState(null);


    //1. ComponentDidMount (After the component has mounted for the first time)
    //2. ComponentDidUpdate (After the componenent's any state has changed)

    useEffect(()=>{

        fetch("https://fakestoreapi.com/products")
        .then(res=>res.json())
        .then((productData)=>{
            allProducts = productData;
            setProductsData(productData);
        })
    
    },[])


    function closeModel(){
        setShowDetailModel(false);
    }

    function openModel(){
        setShowDetailModel(true);
    }

    function onProductClick(id){
        setSelectedProduct(id);
        openModel();
    }


    const onProductDelete=(id)=>{
        
        const updatedData = productData.filter((product)=>{
            return product.id!=id;
        })


        setProductsData(updatedData);
    }


    function renderAllProducts(){

   return productData.map((product)=>{
        return <Product  onDelete={onProductDelete} productDetails={product} onProductClick={onProductClick} />
    })
   }

    function onSearchInputChange(e){
        const searchValue = e.target.value;
        setSearchValue(searchValue);

        const filteredProducts = allProducts.filter((product)=>{
            return product.title.toLowerCase().startsWith(searchValue.toLowerCase())
        });


        setProductsData(filteredProducts);
    }

    
    return <div>

        <NavbarComp onLogout={props.onLogout} />

        <div className="searchBox">

            <input onChange={onSearchInputChange}  value={searchValue} type="text" placeholder="Search Products" />

        </div>

        {
            (productData===null) ? <SpinnerComp/> :       
             <div className="productList" >

                        {
                            renderAllProducts()
                        }
                    </div>   
        }

        <ProductDetail  selectedProduct={selectedProduct} show={showDetailModel} onClose={closeModel} />

    </div>
    
 
}


export default ProductList;
