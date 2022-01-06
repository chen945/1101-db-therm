const serviceCrown2Controller_76 = require('./crown_76/serviceCrown2Controller_76')
const servicemidprojCrown2Controller_76 = require('./midproj_76/servicemidprojCrown2Controller_76')

exports.getCategories = async (req, res) => {
  try {
    const data = await serviceCrown2Controller_76.getCategories()
    return res.json(data)
  } catch (err) {
    console.log('crow2Controller getCategories', err)
  }
}

exports.getShop = async (req, res) => {
  try {
    const data = await serviceCrown2Controller_76.getShop()
    return res.json(data)
  } catch (err) {
    res.status(404).json(err)
  }
}

exports.getmovie = async (req, res) => {
  try {
    const data = await serviceCrown2Controller_76.getmovie()
    return res.json(data)
  } catch (err) {
    res.status(404).json(err)
  }
}

exports.getmovie2 = async (req, res) => {
  try {
    const data = await serviceCrown2Controller_76.getmovie2()
    return res.json(data)
  } catch (err) {
    res.status(404).json(err)
  }
}

exports.getProductsByCategory = async (req, res) => {
  console.log('category', req, params.category)
  try {
    const data = await serviceCrown2Controller_76.getProductsByCategory(
      req.params.category,
    )
    console.log('getProductsByCategory', JSON.stringify(data))

    return res.json(date)
  } catch (err) {
    res.status(404).json(err)
  }
}

exports.getProductsByCategory2 = async (req, res) => {
  console.log('category', req, params.category)
  try {
    const data = await serviceCrown2Controller_76.getProductsByCategory2(
      req.params.category,
    )
    console.log('getProductsByCategory2', JSON.stringify(data))

    return res.json(date)
  } catch (err) {
    res.status(404).json(err)
  }
}
