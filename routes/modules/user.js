// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 引用 model
const UserDate = require('../../model/userDate')


//creat
router.post('/', (req, res) => {
  console.log(req.body)
  UserDate.find(
    { $and: [{ email: req.body.email }, { password: req.body.password }] })
    .lean()
    .then(user => {
      if (user.length === 0) {
        res.render('index', { alert: true })
      } else {
        res.render('welcome', { firstName: user[0].firstName })
      }
    }

    )
})




// 匯出路由模組
module.exports = router