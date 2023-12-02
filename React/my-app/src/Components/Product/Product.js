import "./Product.css";

function Product(props){
    console.log(props);
    return <h3> Product : {props.name}  </h3>

}

export default Product;