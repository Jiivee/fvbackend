/**
  This is only for testing purposes. Inserts ad and user collections to the db.
**/

var mongoose = require('mongoose');
var Schema  = mongoose.Schema;
var fs = require('fs');

mongoose.connect('mongodb://localhost/fv', function(err, db) {
if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    console.log('Connection established');
  }
});

//load all files in models dir
fs.readdirSync('../models/').forEach(function(filename){
  if(~filename.indexOf('.js')) {
    require('../models/' + filename)
  }
})

//Greate Teams
var MatchBet = mongoose.model('matchbet');
var PlayoffBet = mongoose.model('playoffbet');
var TopscorerBet = mongoose.model('topscorerbet');
var TopScorer = mongoose.model('topscorer');
var Playoff = mongoose.model('playoff');
var User = mongoose.model('user');
var Points = mongoose.model('points');
var Tournament = mongoose.model('tournament');



if (process.argv.slice(2)[0] == 'tournament') {
  Tournament.remove('tournament', function(err, result) {
    if (err) return err;
  });
  console.log('Deleted tournaments');
}

if (process.argv.slice(2)[0] == 'user') {
  User.remove('user', function(err, result) {
    if (err) return err;
  });
  console.log('Deleted users');
}

if (process.argv.slice(2)[0] == 'matchbet') {
  MatchBet.remove('matchbet', function(err, result) {
    if (err) return err;
  });
  console.log('Deleted matchbets');
}


if (process.argv.slice(2)[0] == 'all_all_all') {
  User.remove('user', function(err, result) {
    if (err) return err;
  });
  Tournament.remove('tournament', function(err, result) {
    if (err) return err;
  });
  MatchBet.remove('matchbet', function(err, result) {
    if (err) return err;
  });
  PlayoffBet.remove('playoffbet', function(err, result) {
    if (err) return err;
  });
  TopscorerBet.remove('topscorerbet', function(err, result) {
    if (err) return err;
  });
  TopScorer.remove('topscorer', function(err, result) {
    if (err) return err;
  });
  Playoff.remove('playoff', function(err, result) {
    if (err) return err;
  });
  Points.remove('points', function(err, result) {
    if (err) return err;
  });
  console.log('Deleted all');
}

mongoose.connection.close()
