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

// @route   GET api/products/getLatest
// @desc    Returns most recently posted product
// @access  public
router.get('/getLatest', async (req, res) => {
    try{
        const product = await Product.findOne().sort({_id: -1})
        res.json(product)
    }catch(err){
        res.json( { message: err } )
    }
})

// @route   POST api/products/
// @desc    CREATE product route
// @access  public
router.post('/', async (req,res) => {
    const product = new Product({
        product: req.body.product,
        user: req.body.user
    })
    // res.send('CREATE - Product route')
    try{
        const savedProduct = await product.save()
        res.json(savedProduct)
    } catch(err){
        res.json( { message: err } )
    }
})


// @route   GET api/products/productId
// @desc    GET specific product route
// @access  public
router.get('/:productid', async (req, res) => {
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
            { $set: { accepted: req.body.accepted } }
        )
        res.json(updatedProduct)
    } catch(err){
        res.json({ message: err })
    }
})

module.exports = router 