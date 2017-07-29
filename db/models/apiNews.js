const db = require('../');

//fix
const ApiNews = db.Model.extend({
  tableName: 'api_news',
  user: function() {
    return this.hasOne('user');
  },
  likes: function() {
    return this.hasMany('nothing');
  }
});

module.exports = db.model('ApiNews', ApiNews);
