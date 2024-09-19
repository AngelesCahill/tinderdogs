import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
    'dogsdb',
    'postgres',
    'mao9684',
    {
        host: 'localhost',
        dialect: 'postgres'
    }
);
