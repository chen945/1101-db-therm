const { query } = require('express')
const db = require('../../utils/database')

const midproj_76 = class midproj_76 {
  constructor(id, name, length, remote_url, local_url) {
    this.id = id
    this.name = name
    this.length = length
    this.remote_url = remote_url
    this.local_url = local_url
  }

  // get all categories
  static async fetchAll() {
    try {
      const results = await db.query(`SELECT * from midproj_76`)
      return results.rows
    } catch (e) {
      console.log('error', e)
    }
  }

  static async fetchByCatId(id) {
    const query = {
      text: `select*from midproj_76 where id= $1`,
      values: [id],
    }
    try {
      const results = await db.query(query)
      return results.rows
    } catch (err) {
      console.log(err)
    }
  }
}

// const test = async () => {
//   let results = await Category_xx.fetchAll();
//   console.log('results', JSON.stringify(results.rows));
// }

// test();
module.exports = midproj_76
