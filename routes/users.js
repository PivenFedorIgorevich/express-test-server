var express = require('express');
var router = express.Router();
const User = require('../models/User').User
//const result = require('../models/User').result
/* GET users listing. */
router.get('/', async function (req, res, next) {
  let result;
  try {
    result = await User.find({})
  } catch (err) {
    result = {};
  }

  res.send(result);
});

router.post('/create', async function (req, res) {

  const username = req.body.username;
  const password = req.body.password;
  const age = req.body.age;

  let result;

  try {
    result = await User.create({ username, password, age })

  } catch (err) {
    result = 'invalid data'
  }

  res.send(result)
})


router.post('/update', async function (req, res) {

  const id = req.body.id;
  const username = req.body.username;
  const password = req.body.password;
  const age = req.body.age;

  let = result;
  try {
    result = await User.updateOne({ username, password, age })

  } catch (err) {
    result = 'invalid data'
  }

  res.send(result)

});

router.delete('/del/:id', async function (req, res) {
  const id = req.params.id;
  // const id = req.QueryStringSelector.id
  let result;
  try {
    result = await User.remove({_id:id})

  } catch (err) {
    result = 'invalid data'
  }

  res.send(result)

})

module.exports = router;
