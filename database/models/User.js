module.exports = (sequelize,DataTypes) => { 
    let alias = "User"
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unsigned: true,
        },
        email: {
            type: DataTypes.STRING,
        },
        username: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        },
        nacimiento: {
            type: DataTypes.DATE,
        },
        fotoPerfil: {
            type: DataTypes.STRING,
        },
        createdAt: {
            type: DataTypes.DATE,
        },
        updatedAt: {
            type: DataTypes.DATE,
        }
    }
    let config = {
        tableName: "users", 
        timestamps: true, 
        underscored: false
    }
    const User = sequelize.define( alias, cols, config)
    User.associate = function(model){
        User.hasMany(model.Product, {
            as: "products",
            foreignKey: "idUsuario",
        })
        User.hasMany(model.Comment, {
            as: "comments",
            foreignKey: "idUsuario",
        })
    }
    return User
}

