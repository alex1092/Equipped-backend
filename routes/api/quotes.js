const express = require("express");
const router = express.Router();

const Quote = require("../../models/Quote");

// @route   GET api/quotes
// @desc    READ quotes route
// @access  public
router.get("/", async (req, res) => {
  // res.send('READ - Product route')
  try {
    const quote = await Quote.find();
    res.json(quote);
  } catch (err) {
    res.json({ message: err });
  }
});

// @route   GET api/products/getLatest
// @desc    Returns most recently posted product
// @access  public
router.get('/getLatest', async (req, res) => {
  try{
      const quote = await Quote.findOne().sort({_id: -1})
      res.json(quote)
  }catch(err){
      res.json( { message: err } )
  }
})

// @route   POST api/quotes
// @desc    CREATE quote route
// @access  public
router.post("/", async (req, res) => {
  const quote = new Quote({
    //Datatype for username&product currently mongoose.Schema.Types.ObjectId
    // username: req.body.username,
    user: req.body.user,
    product: req.body.product,
    length: req.body.length,
    location: req.body.location,
    price: req.body.price
  });

  try {
    const savedQuote = await quote.save();
    res.json(savedQuote);
  } catch (err) {
    res.json( { message: err } );
  }
});

// @route   GET api/products/productId
// @desc    GET specific product route
// @access  public
router.get('/:quoteId', async (req, res) => {
  try{
      const quote = await Quote.findById(req.params.quoteId)
      res.json(quote)
  } catch(err){
      res.json( { message: err } )
  }
})

// @route   DELETE api/users/create
// @desc    DELETE user route
// @access  public
// router.get('/delete', (req, res) => res.send('DELETE - User router'))
router.delete('/:quoteId', async (req, res) => {
  try{
      const removedQuote = await Quote.remove({ _id: req.params.quoteId })
      res.json(removedQuote)
  } catch{
      res.json({ message: err })
  }
})

// @route   UPDATE api/products/productId
// @desc    UPDATE specific product route
// @access  public
router.patch('/:quoteId', async (req, res) => {
  try{
      const updatedQuote = await Quote.updateOne(
          { _id: req.params.quoteId }, 
          { $set: { product: req.body.quote } }
      )
      res.json(updatedQuote)
  } catch(err){
      res.json({ message: err })
  }
})

module.exports = router;
