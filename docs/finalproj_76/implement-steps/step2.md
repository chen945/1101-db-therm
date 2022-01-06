####CRUD/CREATE


```
/* CREATE*/

router.post('/create', async (req, res) => {
  const id = req.body.id
  const name = req.body.name
  const length = req.body.length
  const remote_url = req.body.remote_url
  const local_url = req.body.local_url
  //console.log('id,name,length,remote_url,local_url',id,name,length,remote_url,local_url);
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

```

![](https://i.imgur.com/YHdRgvm.jpg)