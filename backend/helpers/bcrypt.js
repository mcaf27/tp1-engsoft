const BCrypt = require('bcryptjs');
const salt = '$2a$10$pqtWN3mjXR6c/xKAz4ykTO';

const hashSync = function hashSync(plaintext) {
  return BCrypt.hashSync(plaintext, salt);
};

module.exports = { ...BCrypt, salt, hashSync }
