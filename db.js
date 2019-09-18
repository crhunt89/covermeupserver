const Sequelize= require('sequelize');

const sequelize = new Sequelize('coverMeUp', 'postgres', 'Knights1989!', {
  host: 'localhost',
  dialect: 'postgres'
});
sequelize.authenticate().then(
  function(){
    console.log('Connected to coverMeUp postgres database');
  },
  function(err){
    console.log(err);
  }
);
module.exports = sequelize;