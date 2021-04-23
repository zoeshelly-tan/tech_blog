const seedUser = require('./userData');
const seedBlog = require('./blogData');
const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });

    await seedUser();

    await seedBlog();

    process.exit(0);
};

seedAll();
