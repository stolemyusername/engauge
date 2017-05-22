module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    email: DataTypes.STRING,
  }, {
    classMethods: {
      associate: (models) => {
        User.hasMany(models.study);
      },
    },
    tableName: 'Users',
  });

  return User;
};
