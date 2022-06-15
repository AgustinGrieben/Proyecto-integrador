
module.exports = (sequelize,DataTypes) => { 
    let alias = "Product"
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unsigned: true,
        },
        nombre: {
            type: DataTypes.STRING,
        },
        descripcion: {
            type: DataTypes.STRING,
        },
        tipo: {
            type: DataTypes.STRING,
        },
        imagen: {
            type: DataTypes.STRING,
        },
        idUsuario: { //ID del usuario 
            type: DataTypes.INTEGER,
        },
        createdAt: {
            type: DataTypes.DATE,
        },
        updatedAt: {
            type: DataTypes.DATE,
        }
    }
    let config = {
        tableName: "products", 
    }
    const Product= sequelize.define( alias, cols, config)
    Product.associate = function(model){
        Product.belongsTo(model.User, {
            as: "user",
            foreignKey: "idUsuario",
        })
        Product.hasMany(model.Comment, {
            as: "comments",
            foreignKey: "idProducto",
        })
    }
    return Product}