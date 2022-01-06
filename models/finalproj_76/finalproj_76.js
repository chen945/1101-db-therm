const db = require('../../utils/database')

const finalproj_76 = class finalproj_76 {
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
      const results = await db.query(`SELECT * from finalproj_76`)
      return results.rows
    } catch (e) {
      console.log('error', e)
    }
  }

  static async fetchCatIdByName(name) {
    try {
      const results = await db.query(
        `select id from finalproj_76 where name = $1`,
        [name],
      )
      return results.rows[0].id
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
module.exports = finalproj_76
