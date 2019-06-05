
exports.up = function (knex, Promise) {
    return knex.schema.createTable('roles', function (table) {
        table.increments();
        table.string('name', 128)
            .notNullable()
            .unique();
        table.timestamps();
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('roles');
};
