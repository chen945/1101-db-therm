####CRUD/DELETE
```
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
```
可透過delete去刪除資料庫的資料
![](https://i.imgur.com/cTCm38o.jpg)