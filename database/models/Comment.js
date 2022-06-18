module.exports = (sequelize,DataTypes) => { 
    let alias = "Comment"
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unsigned: true,
        },
        textoComentario: {
            type: DataTypes.STRING,
            notNull: true
        },
        fkProductId: {
            type: DataTypes.INTEGER,
            notNull: true
        },
        fkUserId: { //ID del usuario 
            type: DataTypes.INTEGER,
            notNull: true
        },
        createdAt: {
            type: DataTypes.DATE,
        },
        updatedAt: {
            type: DataTypes.DATE,
        }
    }
    let config = {
        tableName: "comments", 
        timestamps: true, 
        underscored: false
    }
    const Comment= sequelize.define( alias, cols, config)
    Comment.associate = function(model){
        Comment.belongsTo(model.User, {
            as: "user",
            foreignKey: "idUsuario",
        })
        Comment.belongsTo(model.Product, {
            as: "product",
            foreignKey: "idProducto",
        })
    }
    return Comment}