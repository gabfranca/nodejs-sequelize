const { Model, DataTypes } = require("sequelize");
class CompanyModel extends Model {
    static init(sequelize) {
        super.init({
            id: { type: DataTypes.INTEGER, primaryKey: true },
            companyName: { type: DataTypes.STRING },
            marketCap: { type: DataTypes.STRING },
            marketName: { type: DataTypes.STRING },
            industry: { type: DataTypes.STRING },
            symbol: { type: DataTypes.STRING }
        },
            {
                sequelize: sequelize,
                tableName: 'companies',
                paranoid: true,
            })
    }
}
module.exports = CompanyModel;
