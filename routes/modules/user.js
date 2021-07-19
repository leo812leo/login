// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 引用 model
const UserDate = require('../../model/userDate')
// 定義路由
router.get('/', (req, res) => {
  res.render('index')
})


//creat
router.post('/', (req, res) => {
  const { email, password } = req.body
  return UserDate.create({ email, password })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})




// 匯出路由模組
module.exports = router