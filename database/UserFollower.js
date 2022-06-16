module.exports = function(sequelize,DataTypes){
    let alias = "UserFollower"
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unsigned: true
          },
          fkUserId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unsigned: true
          },
          fkFollowerId: {
            type: DataTypes.INTEGER,
            unsigned: true
          }
        };
        let config = {
            tablename: 'UserFollower',
            timestamps: true,
            underscored: false
        };
          const UserFollower = sequelize.define( alias, cols, config)
        User.associate = function(model){
            User.hasMany(model.User, {
                as: "user",
                foreignKey: "idUsuario",
            })
            User.hasMany(model.Comment, {
                as: "user",
                foreignKey: "idUsuario",
            })
        }
        return UserFollower     
    }