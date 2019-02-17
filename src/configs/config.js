module.exports = {
    api: {
        host: process.env.API_HOST || 'localhost',
        port: process.env.API_PORT || 3000
    },
    sql: {
        host: process.env.SQL_HOST || 'localhost',
        database: process.env.SQL_DB || 'parking',
        user: process.env.SQL_USER || 'root',
        password: process.env.SQL_PWD || null,
        dialect: process.env.SQL_DIALECT || 'mysql'
    }
}