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
          UserFollower.associate = function(models){
            UserFollower.belongsToMany(models.UserFollower, {
            as: "Followers",
            through: "UserFollower",
            foreignKey: "user_id",
            otherKey: "fkFollowerId",
            timestamps: false
            });
        }
        return UserFollower     
    }