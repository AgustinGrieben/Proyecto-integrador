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
        image: {
            type: DataTypes.STRING,
        },
        fkUserId: {
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
        timestamps: true, 
        underscored: false
    }
    const Product= sequelize.define( alias, cols, config)
    Product.associate = function(model){
        Product.belongsTo(model.User, {
            as: "user",
            foreignKey: "fkUserId",
        })
        Product.hasMany(model.Comment, {
            as: "comments",
            foreignKey: "idProducto",
        })
    }
    return Product}