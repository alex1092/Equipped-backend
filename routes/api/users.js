const express =require('express')
const router = express.Router()

// @route   GET api/users
// @desc    READ user route 
// @access  public
router.get('/', (req, res) => res.send('GET - User router'))
// @route   POST api/users/create
// @desc    CREATE user route
// @access  public
// router.get('/create', (req, res) => res.send('CREATE - User router'))
// @route   PUT api/users/create
// @desc    UPDATE user route
// @access  public
// router.get('/update', (req, res) => res.send('UPDATE - User router'))
// @route   DELETE api/users/create
// @desc    DELETE user route
// @access  public
// router.get('/delete', (req, res) => res.send('DELETE - User router'))


// router.get('/add', (req, res) => res.send('User router'))

module.exports = router