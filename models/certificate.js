module.exports = (sequelize, DataTypes) => {
  const Certificate = sequelize.define('Certificate', {
    active: DataTypes.BOOLEAN,
    privateKey: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: DataTypes.TEXT
  }, {});

  Certificate.associate = (models) => {
    Certificate.belongsTo(models.Customer, {
      foreignKey: 'id',
      as: 'customerId',
    })
  };

  return Certificate;
};