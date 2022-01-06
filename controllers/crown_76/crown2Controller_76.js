const serviceCrown2Controller_76 = require('./serviceCrown2Controller_76')

exports.getCategories = async (req, res) => {
  try {
    let results = await serviceCrown2Controller_76.getCategories()
    console.log('results', JSON.stringify(results))
    res.render('crown_76/crown2_76', {
      data: results,
      title: 'Crown2_76',
      name: 'DORIS',
      id: `207410076`,
    })
  } catch (err) {
    console.log('crow2Controller getCategories', err)
  }
}
