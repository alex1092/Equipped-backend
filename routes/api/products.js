const express =require('express')
const router = express.Router()


// @route   GET api/products
// @desc    READ products route 
// @access  public
router.get('/', (req, res) => res.send('READ - Product router'))

// @route   POST api/users/create
// @desc    CREATE user route
// @access  public
router.post('/', (req,res) => {
    console.log(req.body)
    res.send('product route')
  }
  
)

// @route   PUT api/users/create
// @desc    UPDATE user route
// @access  public
// router.get('/update', (req, res) => res.send('UPDATE - User router'))
// @route   DELETE api/users/create
// @desc    DELETE user route
// @access  public
// router.get('/delete', (req, res) => res.send('DELETE - User router'))

module.exports = router