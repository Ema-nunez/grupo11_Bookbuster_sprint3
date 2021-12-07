const productController = {
    cart : (req,res)=>{
        return res.render('products/cart');
    },

    productDetail : (req,res)=>{
        res.render('products/productDetail');
    }
}

module.exports = productController;