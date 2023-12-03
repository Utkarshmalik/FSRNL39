import "./Product.css";
import Button from 'react-bootstrap/Button';


function Product(props){
    const productDetails = props.productDetails;

    const {image, id , category, description, price, title, rating} = productDetails;

    return <div className="product" >
        <div className="productImg">
            <img src={image} />
        </div>
        <div className="productDescription">
            <p className="productTitle">
                {title}
            </p>
            <div className="productRatings">
                <span>
                    Ratings:  {rating.rate}/5
                </span>
                <span>
                    {rating.count} reviews 
                </span>
            </div>
            <p className="productCategory">
                Category : {category}
            </p>
            <p className="productPrice">
                Rs. {price}
            </p>

        </div>

        <hr/>

        <Button variant="dark" onClick={()=>props.onDelete(id)} > Delete </Button>

    </div>
}

export default Product;






