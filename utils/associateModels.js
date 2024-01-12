const User = require('../models/user');
const Book = require('../models/book');

User.hasMany(Book, { foreignKey: 'user_id' });
Book.belongsTo(User, { foreignKey: 'user_id' });