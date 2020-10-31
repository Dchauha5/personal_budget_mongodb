//Budget API
const express = require('express');
const mongoose = require("mongoose");
const namesModel = require("./models/names_schema");

const port = 3000;
let url = 'mongodb://localhost:27017/mongodb_demo';

const app = express();
app.use('/',express.static('public'));
app.use(express.json());

app.get("/budget", (req, res) => {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        namesModel.find({}).then(data => {
        res.json(data);
        mongoose.connection.close();
      }).catch(err => {
        console.log(err);
      });
    }).catch(err => {
        console.log(err);
    });
  });


  app.post("/budget", (req, res) => {
    mongoose.connect(url).then(() => {
      var chartData = 
      [
        new namesModel({ "title": "", "budget": 25, "backgroundColor": "black" }),
        new namesModel({ "title": "Rent", "budget": 375, "backgroundColor": "red" }),
        new namesModel({ "title": "Grocery", "budget": 0, "backgroundColor": "blue" })
      ];
      namesModel.insertMany(chartData).then((data) => {
        res.json(data);
      
        mongoose.connection.close();
      }).catch(err => {
        console.log(err);
      });
    }).catch(err => {
        console.log(err);
    });
  })

app.listen(port, () => {
    console.log(`API served  at http://localhost:${port}`);
});