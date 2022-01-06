####CRUD/READ

```
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

```
