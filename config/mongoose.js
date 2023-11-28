const mongoose = require('mongoose');





mongoose.connect('mongodb+srv://shuklarishabhkristi3:fKZlt3RuAMPfrDf6@cluster1.jzdu1qr.mongodb.net/?');

const db = mongoose.connection;

db.once('open', function(){
    console.log('database connected to the server successfully!');
});

module.exports = db;
