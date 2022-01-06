var express = require('express')
var router = express.Router()
const db = require('../utils/database')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('finalproj_76/finalproj_76', {
    title: 'Express',
    name: 'Doris HSIEH',
    id: `207410076`,
  })
})

router.get('/read', async function (req, res, next) {
  const results = await db.query(`SELECT * from finalproj_76`)
  data = results.rows
  //console.log('data',JSON.stringify(data));
  res.render('finalproj_76/index', {
    data,
    title: 'Express',
    name: 'Doris HSIEH',
    id: `207410076`,
  })
})

/* CREATE*/

router.post('/create', async (req, res) => {
  const id = req.body.id
  const name = req.body.name
  const length = req.body.length
  const remote_url = req.body.remote_url
  const local_url = req.body.local_url
  console.log(
    'id,name,length,remote_url,local_url',
    id,
    name,
    length,
    remote_url,
    local_url,
  )
  try {
    const query = {
      text: `INSERT INTO finalproj_76(id,name,length,remote_url,local_url) VALUES ($1,$2,$3,$4,$5);`,
      values: [id, name, length, remote_url, local_url],
    }
    await db.query(query)
    res.redirect('/finalproj_76')
  } catch (err) {
    console.log(err)
  }
})

/* READ */

router.get('/', async function (req, res, next) {
  let data
  try {
    const results = await db.query(`SELECT * from finalproj_76`)
    data = results.rows
    //console.log('data',JSON.stringify(data));
    //res.json(data);
    res.render('finalproj_76', { data })
  } catch (err) {
    //console.log('Errors on getting books!');
    res.render('finalproj_76', { data: '' })
  }
  next()
})

/* change page to edit */
router.get('/edit/:id', async (req, res) => {
  const id = req.params.id
  console.log('id', id)
  try {
    const query = {
      text: `SELECT * FROM finalproj_76 where id = $1;`,
      values: [id],
    }
    const results = await db.query(query)
    data = results.rows
    res.render('finalproj_76/edit_76', {
      id: data[0].id,
      name: data[0].name,
      length: data[0].length,
      remote_url: data[0].remote_url,
      local_url: data[0].local_url,
    })
  } catch (err) {
    console.log(err)
  }
})

/* UPDATE */

router.post('/update', async (req, res, next) => {
  try {
    const query = {
      text: `UPDATE finalproj_76 SET name= $1, length = $2, remote_url= $3, local_url=$4 where id = $5 ;`,
      values: [
        req.body.name,
        req.body.length,
        req.body.remote_url,
        req.body.local_url,
        req.body.id,
      ],
    }
    await db.query(query)
    res.redirect('/finalproj_76')
  } catch (err) {
    console.log
  }
})

/* click add to change page to add */
router.get('/create', async (req, res) => {
  try {
    res.render('finalproj_76/add_76')
  } catch (err) {
    console.log(err)
  }
})

/* DELETE */
router.get('/delete/:id', async (req, res, next) => {
  try {
    console.log('id', req.params.id)
    const id = req.params.id
    const query = {
      text: `DELETE FROM finalproj_76 where id = $1;`,
      values: [req.params.id],
    }
    const results = await db.query(query)
    res.redirect('/finalproj_76')
  } catch (err) {
    console.log(err)
  }
})

module.exports = router
