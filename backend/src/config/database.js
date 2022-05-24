module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'peartree15',
    database: 'book',
    define: {
        timestamps: true, //created_at, updated_at
        underscored: true, //snake case ( user_group )
    },
};