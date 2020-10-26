"use strict";const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('users',
      [
        {
          nome: 'Marcos',
          email: 'marcos@gmail.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Marcos2',
          email: 'marcos2@gmail.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Marcos3',
          email: 'marcos3@gmail.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Marcos4',
          email: 'marcos4@gmail.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ], {});
  },

  down: () => { },
};
