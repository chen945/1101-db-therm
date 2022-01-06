####step6
新增add、edit、index

routes/finalproj_76
新增一個router
```
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

```

去控制整個CRUD

![](https://i.imgur.com/ODyMsmr.jpg)