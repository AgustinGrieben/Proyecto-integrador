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
            notNull: true
        },
        descripcion: {
            type: DataTypes.STRING,
            notNull: true
        },
        tipo: {
            type: DataTypes.STRING,
            notNull: true
        },
        image: {
            type: DataTypes.STRING,
            notNull: true
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