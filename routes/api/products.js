const express =require('express')
const router = express.Router()

const Product = require('../../models/Product')

// @route   GET api/products
// @desc    READ products route 
// @access  public
router.get('/', (req, res) => res.send('READ - Product route'))

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
        res.json( { message: err} )
    }
})

// @route   PUT api/users/create
// @desc    UPDATE user route
// @access  public
// router.get('/update', (req, res) => res.send('UPDATE - User router'))


// @route   DELETE api/users/create
// @desc    DELETE user route
// @access  public
// router.get('/delete', (req, res) => res.send('DELETE - User router'))

module.exports = router