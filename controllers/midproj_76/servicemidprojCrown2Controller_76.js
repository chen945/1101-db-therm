const midproj_76 = require('../../models/midproj_76/midproj_76')

exports.getmovie = async (req, res) => {
  try {
    return await midproj_76.fetchAll()
  } catch (err) {
    console.log('getmovie', err)
  }
}

exports.getProductsByCategory2 = async (category) => {
  console.log('service', category)
  try {
    const results = await midproj_76.fetchByCatId(cid)
    //console.log('sev getProductsByCategory',JSON.stringify(results));
    return results
  } catch (err) {
    console.log(err)
  }
}
