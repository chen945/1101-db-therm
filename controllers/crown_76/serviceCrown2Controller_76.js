const Category_76 = require('../../models/crown_76/Category_76')
const Shop_76 = require('../../models/crown_76/Shop_76')
const midproj_76 = require('../../models/midproj_76/midproj_76')
const finalproj_76 = require('../../models/finalproj_76/finalproj_76')

exports.getCategories = async (req, res) => {
  try {
    return await Category_76.fetchAll()
  } catch (err) {
    console.log('getCategories', err)
  }
}

exports.getShop = async (req, res) => {
  try {
    return await Shop_76.fetchAll()
  } catch (err) {
    console.log('getShop', err)
  }
}

exports.getmovie = async (req, res) => {
  try {
    return await midproj_76.fetchAll()
  } catch (err) {
    console.log('getmovie', err)
  }
}

exports.getmovie2 = async (req, res) => {
  try {
    return await finalproj_76.fetchAll()
  } catch (err) {
    console.log('getmovie2', err)
  }
}

exports.getProductsByCategory = async (category) => {
  console.log('service', category)
  try {
    const cid = await Category_76.fetchCatIdByName(category)
    const results = await Shop_76.fetchByCatId(cid)
    console.log('sev getProductsByCategory', JSON.stringify(results))
    return results
  } catch (err) {
    console.log(err)
  }
}
