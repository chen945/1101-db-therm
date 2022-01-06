####CRUD/UPDATE
```
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

```

可透過creat去add並update資料庫
![](https://i.imgur.com/KQpAh4r.jpg)

![](https://i.imgur.com/Yxu0WTo.jpg)
