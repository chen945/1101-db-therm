const servicefinalCrown2Controller_76 = require('./servicefinalCrown2Controller_76')

/* CREATE*/
exports.createProducts = async (req, res) => {
  console.log('body', req.body)
  //res.json('create body received')

  try {
    let results = await servicefinalCrown2Controller_76.create(req.body)
    console.log('results', JSON.stringify(results))
    res.json('data: {msg: creating successful}')
  } catch (err) {}
}

/* READ */

exports.getCategories = async (req, res) => {
  try {
    let results = await servicefinalCrown2Controller_76.getCategories()
    console.log('results', JSON.stringify(results))
    res.render('finalproj_76/finalproj_76', {
      data: results,
      title: 'finalproj_76',
      name: 'Doris Hsieh',
      id: `207410076`,
    })
  } catch (err) {
    console.log('finalproj_76 getCategories', err)
  }
}

exports.getmovie2 = async (req, res) => {
  try {
    const data = await servicefinalCrown2Controller_76.gemovie2()
    res.render('finalproj_76/finalproj_76', {
      data,
      title: 'All Products',
      name: 'Doris Hsieh',
      id: `207410076`,
    })
  } catch (err) {
    res.status(404).json(err)
  }
}

exports.getProductsByCategory = async (req, res) => {
  console.log('category', req.params.category)
  try {
    const data = await servicefinalCrown2Controller_76.getProductsByCategory(
      req.params.category,
    )
    console.log('getProductsByCategory', JSON.stringify(data))
    res.render('finalproj_76/finalproj_76', {
      data,
      title: req.params.category,
      nname: 'Doris Hsieh',
      id: `207410076`,
    })
  } catch (err) {
    res.status(404).json(err)
  }
}

/* UPDATE */
exports.updateProducts = async (req, res) => {
  console.log('body', req.body)
  //res.json('create body received')

  try {
    let results = await servicefinalCrown2Controller_76.update(req.body)
    console.log('results', JSON.stringify(results))
    res.json('data: {msg: updating successful}')
  } catch (err) {}
}

/* DELETE */

exports.deleteProduct = async (req, res) => {
  console.log('deleteProduct', req.params.id)
  try {
    await servicefinalCrown2Controller_76.deleteById(req.params.id)
    res.redirect('/finalproj_76')
  } catch (err) {
    console.log(err)
  }
}
