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
            notNull: true
        },
        username: {
            type: DataTypes.STRING,
            notNull: true
        },
        password: {
            type: DataTypes.STRING,
            notNull: true
        },
        nacimiento: {
            type: DataTypes.DATE,
            notNull: true
        },
        fotoPerfil: {
            type: DataTypes.STRING,
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

