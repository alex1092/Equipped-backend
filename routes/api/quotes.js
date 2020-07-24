const express =require('express')
const router = express.Router()

const Quote = require('../../models/Quote')

// @route   GET api/quotes
// @desc    READ quotes route 
// @access  public
router.get('/', async (req, res) => {
    // res.send('READ - Product route')
    try{
        const quote = await Quote.find()
        res.json(product)
    }catch(err){
        res.json({ message: err })
    }
})

// @route   POST api/product/
// @desc    CREATE product route
// @access  public
router.post('/', async (req,res) => {
    const quote = new Quote({ //Datatype for username&product currently mongoose.Schema.Types.ObjectId
        username: req.body.username,
        product: req.body.product,
        length: req.body.length
    })

    try{
        const savedQuote = await quote.save()
        res.json(savedQuote)
    } catch(err){
        res.json( { message: err} )
    }
})

module.exports = router