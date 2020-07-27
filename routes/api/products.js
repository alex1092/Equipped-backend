const express =require('express')
const router = express.Router()

const Product = require('../../models/Product')

// @route   GET api/products
// @desc    READ all products route 
// @access  public
router.get('/', async (req, res) => {
    // res.send('READ - Product route')
    try{
        const product = await Product.find()
        res.json(product)
    }catch(err){
        res.json({ message: err })
    }
})

// @route   POST api/product/
// @desc    CREATE product route
// @access  public
router.post('/', async (req,res) => {
    const product = new Product({
        product: req.body.product,
        image: req.body.image
    })
    // res.send('CREATE - Product route')
    try{
        const savedProduct = await product.save()
        res.json(savedProduct)
    } catch(err){
        res.json( { message: err } )
    }
})

// Test route for image upload
router.get('/getLatest', async (req, res) => {
    const getImage = await Product.findOne().sort({_id: -1})
    res.json(getImage.image)
})

// CLOUDINARY_URL=cloudinary://796658682685464:njgPGLuJctzK0xa3gSNIiN-SVnk@dgeizgzdw

// @route   GET api/products/productId
// @desc    GET specific product route
// @access  public
router.get('/:productId', async (req, res) => {
    try{
        const product = await Product.findById(req.params.productId)
        res.json(product)
    } catch(err){
        res.json( { message: err } )
    }
})

// @route   DELETE api/users/create
// @desc    DELETE user route
// @access  public
// router.get('/delete', (req, res) => res.send('DELETE - User router'))
router.delete('/:productId', async (req, res) => {
    try{
        const removedProduct = await Product.remove({ _id: req.params.productId })
        res.json(removedProduct)
    } catch{
        res.json({ message: err })
    }
})

// @route   UPDATE api/products/productId
// @desc    UPDATE specific product route
// @access  public
router.patch('/:productId', async (req, res) => {
    try{
        const updatedProduct = await Product.updateOne(
            { _id: req.params.productId }, 
            { $set: { product: req.body.product } }
        )
        res.json(updatedProduct)
    } catch(err){
        res.json({ message: err })
    }
})

module.exports = router 