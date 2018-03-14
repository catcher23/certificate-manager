module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {});

  Customer.associate = (models) => {
    Customer.hasMany(models.Certificate, {
      foreignKey: 'customerId',
      onDelete: 'cascade',
      hooks: true
    })
  };

  return Customer;
};