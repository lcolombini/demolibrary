'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Books', [{
            title: '1000 modi di cucinare con il barbecue',
            author: 'Chef Tony',
            isbn: '978-1-56619-909-4',
            plot: 'Dopo il grande successo del primo volume dedicato al pesce, il nuovo capolavoro di Chef Tony',
            readingsNumber:3,
            userId:1,
            dateAdded: new Date(),
            createdAt: new Date(),
            updatedAt: new Date()
        },
            {
                title: 'Non sei mai stato a Firenze se...',
                author: 'Wikipedro',
                isbn: '928-1-51219-902-7',
                plot: 'Ogni settimana, con i suoi video itineranti fa scoprire i piccoli e i grandi segreti di una delle città più visitate al mondo. Nel 2019 ha esordito in tv nel programma Turisti per Dmax. Nel 2020 ha pubblicato con Mondadori Non sei mai stato a Firenze se... 4 passeggiate fuori dai soliti giri turistici. ',
                readingsNumber: 1,
                userId:1,
                dateAdded: new Date(),
                createdAt: new Date(),
                updatedAt: new Date()
            },
        {
            title: 'Guerra e Pace',
            author: 'Lev Tolstoj',
            isbn: '928-1-56619-902-7',
            plot: 'Tolstoj cominciò a pensare a un vasto romanzo storico dopo la guerra di Crimea, nel 1856, quando i decabristi, promotori della rivolta del dicembre 1825, tornarono dalla deportazione. Così scrisse 3 capitoli, I decabristi, ambientati nel 1825: il protagonista del racconto doveva essere un uomo che aveva partecipato alla campagna contro Napoleone nel 1812, nel quale si investigavano le cause dei moti antizaristi. Per farlo, Tolstoj doveva ricostruire la sua infanzia, risalendo al 1805. ',
            readingsNumber: 0,
            userId:2,
            dateAdded: new Date(),
            createdAt: new Date(),
            updatedAt: new Date()

        },
            {
                title: 'Simporama',
                author: 'Matt Groening',
                isbn: '699-8-51119-752-5',
                userId: 3,
                plot: ' Il volume è una raccolta di quattro albi usciti in edicola sui Simpson, i cartoni animati che, dopo aver esordito quasi in sordina alla televisione italiana il 1° ottobre 1991, hanno ottenuto in breve tempo un enorme successo di pubblico.',
                readingsNumber: 0,
                dateAdded: new Date(),
                createdAt: new Date(),
                updatedAt: new Date()
            },
        {
            title: 'Il Principe',
            author: 'Nicolo Machiavelli',
            isbn: '419-1-51119-902-5',
            userId: 1,
            plot: 'Il Principe viene composto in pochissimi mesi nel 1513, durante il periodo in cui Machiavelli viene allontanato da Firenze al ritorno dei Medici. Il manoscritto viene dedicato a Lorenzo de Mediciduca di Urbino: Machiavelli sta cercando in questo modo di dimostrare il suo appoggio ai regnanti dopo il periodo repubblicano',
            readingsNumber: 0,
            dateAdded: new Date(),
            createdAt: new Date(),
            updatedAt: new Date()
        },
            {
                title: 'Lorem Ipsum',
                author: 'Demo Author',
                isbn: '419-1-58819-902-5',
                userId: 2,
                plot: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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