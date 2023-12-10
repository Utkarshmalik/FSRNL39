import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import SpinnerComp from '../Common/Spinner/Spinner';


function ProductDetail({show, onClose, selectedProduct}){

  console.log("Prdocut detail component being rendered");

  const [productData, setProductData] = useState(null);

  useEffect(()=>{
    
    console.log("Inside use Effect");

    if(show===false || selectedProduct===null){
      return;
    }

    setProductData(null);

    console.log("making API call");
     fetch(`https://fakestoreapi.com/products/${selectedProduct}`)
        .then(res=>res.json())
        .then((productData)=>{
          console.log(productData);
            setProductData(productData);
        })

  },[selectedProduct]);


    return   <Modal
        size="lg"
        show={show}
        onHide={onClose}
        aria-labelledby="example-modal-sizes-title-lg"
        className='text-center'
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Product Id  : {selectedProduct}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          {
            (productData===null) ? <SpinnerComp/> :
            
            <div className=' d-flex flex-column justify-content-center align-items-center gap-3 text-bold'>
              
              <div> Product Id : {productData.id} </div>
              <div> Product title  : {productData.title} </div>
              <div> Product price : {productData.price} </div>
              <div> Product description : {productData.description} </div>
              <div> Product category : {productData.category} </div>

            </div>

          }

        </Modal.Body>
      </Modal>

}


export default ProductDetail;