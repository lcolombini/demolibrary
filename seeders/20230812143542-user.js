'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [{
            firstName: 'Luca',
            lastName: 'Colombini',
            email: 'lucacolombini81@gmail.com',
            createdAt: new Date(),
            updatedAt: new Date()
        },
            {
                firstName: 'Hastega',
                lastName: 'Demo',
                email: 'demo@hastega.com',
                createdAt: new Date(),
                updatedAt: new Date()
            },
        {
            firstName: 'Homer',
            lastName: 'Simpson',
            email: 'hjsimpson@springfield.com',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            firstName: 'Ned',
            lastName: 'Flanders',
            email: 'nedflanders@paradise.com',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            firstName: 'Bart',
            lastName: 'Simpson',
            email: 'elbarto@fox.com',
            createdAt: new Date(),
            updatedAt: new Date()
        }
            
        ], {});
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    }
};