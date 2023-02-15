require('dotenv').config()

const config = {
    api: {
        port: process.env.PORT || 9000,
        nodeEnv: process.env.NODE_ENV || 'development',
        host: process.env.HOST || 'http://localhost:9000',
        jwtSecret: process.env.JWT_SECRET,
    },
    db: {
        development: {
            dialect: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'Saskia5683',
            database: 'chat',
            define: {
                timestamps: true,
                underscored: true,
                underscoredAll: true
            },
        },
        production: {
            dialect: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'Saskia5683',
            database: 'chat',
            define: {
                timestamps: true,
                underscored: true,
                underscoredAll: true
            },
            dialectOptions: {
                ssl: {
                    require: true,
                    rejectUnauthorized: false
                }
            }
        },
        testing: {
            dialect: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'Saskia5683',
            database: 'chat',
            define: {
                timestamps: true,
                underscored: true,
                underscoredAll: true
            }
        },
    }
}

module.exports = config