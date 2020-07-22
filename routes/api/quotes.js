const express =require('express')
const router = express.Router()


// @route   GET api/quotes
// @desc    test route 
// @access  public
router.get('/', (req, res) => res.send('Quotes router'))

module.exports = router