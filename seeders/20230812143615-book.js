'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Books', [{
            title: '1000 modi di cucinare con il barbecue',
            author: 'Chef Tony',
            isbn: '978-1-56619-909-4',
            plot: 'Dopo il grande successo del primo volume dedicato al pesce, il nuovo capolavoro di Chef Tony',
            readingsNumber:0,
            dateAdded: new Date(),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            title: 'Guerra e Pace',
            author: 'Lev Tolstoj',
            isbn: '928-1-56619-902-7',
            plot: 'Un grande classico',
            readingsNumber: 0,
            dateAdded: new Date(),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            title: 'Il Principe',
            author: 'Nicolo Machiavelli',
            isbn: '419-1-51119-902-5',
            plot: 'De principatibus',
            readingsNumber: 0,
            dateAdded: new Date(),
            createdAt: new Date(),
            updatedAt: new Date()
        }
    ], {});
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Books', null, {});
    }
};