const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "frimu_daniel17", {
  dislect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
