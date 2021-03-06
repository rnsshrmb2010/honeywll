const express = require('express');
const dotenv = require('dotenv');
const models = require('../models');
console.log(models.User);

const router = express.Router();
dotenv.config();

router.get('/users', async (req, res, next) => {
  const users = await models.User.findAll();
  res.status(200).json({ status: 200, data: users });
});
router.post('/users', async (req, res, next) => {
  const params = req.body;
  const users = await models.User.create(params);
  res.status(200).json({ status: 200, data: users });
});
router.put('/users/:id', async (req, res, next) => {
  const params = req.body;
  const id = req.params.id;
  await models.User.update(params, { where: { id } });
  const user = await models.User.findOne({ where: { id } });
  res.status(200).json({ status: 200, data: user });
});

module.exports = router;
