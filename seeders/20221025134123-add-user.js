'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {


      await queryInterface.bulkInsert('users', [{
        name: 'Cristhian',
        email: 'cilopez@gmail.com',
        password: '1234'
      },
    {
      name: 'Valentina',
      email: 'valen@gmail.com',
      password: '1234V'
    }], {});

  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('users', null, {});
     
  }
};
