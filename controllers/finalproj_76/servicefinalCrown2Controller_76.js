const finalproj_76 = require('../../models/finalproj_76/finalproj_76')

exports.getmovie2 = async (req, res) => {
  try {
    return await finalproj_76.fetchAll()
  } catch (err) {
    console.log('getmovie2', err)
  }
}

exports.getProductsByCategory2 = async (category) => {
  console.log('service', category)
  try {
    const results = await finalproj_76.fetchByCatId(cid)
    //console.log('sev getProductsByCategory',JSON.stringify(results));
    return results
  } catch (err) {
    console.log(err)
  }
}
