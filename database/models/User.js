module.exports = (sequelize,DataTypes) => { 
    let alias = "User"
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unsigned: true,
        }
    }
    const User = sequelize.define( alias, cols, config)
    return User
}