
const db = require('../models');

module.exports = async () => {
    console.log((await db.CompanyModel.findOne({ where: { id: 20 } })).toJSON());
}