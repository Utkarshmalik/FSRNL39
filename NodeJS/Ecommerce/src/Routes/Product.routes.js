const { createProduct, getProducts, getProduct, updateProduct, deleteProduct } = require("../Controllers/product.controllers")



module.exports  = (app) =>{
app.post("/ecomm/api/v1/products", createProduct);
app.get("/ecomm/api/v1/products", getProducts);
app.get("/ecomm/api/v1/products/:id", getProduct);
app.put("/ecomm/api/v1/products/:id", updateProduct);
app.delete("/ecomm/api/v1/products/:id",deleteProduct)

}