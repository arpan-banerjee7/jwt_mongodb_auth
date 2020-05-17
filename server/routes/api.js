const express = require("express");
const router = express.Router();
const User = require("../models/user");
const mongoose = require("mongoose");

const db =
  "mongodb+srv://userArpan:passwordArpan@cluster0-3pvdp.mongodb.net/test?retryWrites=true&w=majority";
//   mongoose.set('useNewUrlParser', true);
//   mongoose.set('useFindAndModify', false);
//   mongoose.set('useCreateIndex', true);
//   mongoose.set('useUnifiedTopology', true);

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected."))
  .catch((err) => console.error(err));
// mongoose.connect(
//   db,
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   (err) => {
//     if (err) {
//       console.error("Error! " + error);
//     } else {
//       console.log("Connected to mongodb");
//     }
//   }
// );
router.get("/", (req, res) => {
  res.send("From API route");
});

//registering a user
router.post("/register", (req, res) => {
  let userData = req.body;
  let user = new User(userData);
  user.save((error, registeredUser) => {
    if (error) {
      console.log(error);
    } else {
      res.status(200).send(registeredUser);
    }
  });
});

//logging in a user
router.post("/login", (req, res) => {
  let userData = req.body;

  User.findOne({ email: userData.email }, (error, user) => {
    if (error) {
      console.log(error);
    } else {
      if (!user) {
        res.status(401).send("Invalid Email");
      } else {
        if (user.password !== userData.password) {
          res.status(401).send("Invalid Password");
        } else {
          res.status(200).send(user);
        }
      }
    }
  });
});

//hardcoded events
router.get("/events", (req, res) => {
  let events = [
    {
      _id: "1",
      name: "Puja Banerjee",
      description: "CTS",
      date: "2012-04-23T18:45:511z",
    },
    {
      _id: "2",
      name: "Pralok Kakarla",
      description: "Accenture",
      date: "2012-04-23T18:45:511z",
    },
    {
      _id: "3",
      name: "Ashish Kumar Singh",
      description: "Infosys",
      date: "2012-04-23T18:45:511z",
    },
    {
      _id: "4",
      name: "",
      description: "",
      date: "2012-04-23T18:45:511z",
    },
    {
      _id: "5",
      name: "Harsh Nagelia",
      description: "Hindustan Unilever",
      date: "2012-04-23T18:45:511z",
    },
  ];
  res.json(events);
});

router.get("/events", (req, res) => {
  let events = [
    {
      _id: "1",
      name: "Puja Banerjee",
      description: "CTS",
      date: "2012-04-23T18:45:511z",
    },
    {
      _id: "2",
      name: "Pralok Kakarla",
      description: "Accenture",
      date: "2012-04-23T18:45:511z",
    },
    {
      _id: "3",
      name: "Ashish Kumar Singh",
      description: "Infosys",
      date: "2012-04-23T18:45:511z",
    },
    {
      _id: "4",
      name: "",
      description: "",
      date: "2012-04-23T18:45:511z",
    },
    {
      _id: "5",
      name: "Harsh Nagelia",
      description: "Hindustan Unilever",
      date: "2012-04-23T18:45:511z",
    },
  ];
  res.json(events);
});
module.exports = router;
