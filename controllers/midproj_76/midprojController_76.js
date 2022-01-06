const servicemidprojCrown2Controller_76 = require('./servicemidprojCrown2Controller_76')

exports.getCategories = async (req, res) => {
  try {
    let results = await servicemidprojCrown2Controller_76.getCategories()
    console.log('results', JSON.stringify(results))
    res.render('midproj_76/midproj_76', {
      data: results,
      title: 'midproj_76',
      name: 'DORIS HSIEH',
      id: `207410076`,
    })
  }
}
