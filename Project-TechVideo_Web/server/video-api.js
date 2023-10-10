/* eslint-disable no-undef */
import express, { urlencoded, json } from "express";
import cors from "cors";
import { MongoClient as mongoClient } from "mongodb";

var constr = "mongodb://127.0.0.1:27017";
var app = express();
app.use(cors());
app.use(
  urlencoded({
    extended: true,
  })
);
app.use(json());

app.get("/admin", (req, res) => {
  mongoClient.connect(constr).then((clientObj) => {
    var database = clientObj.db("reactdb");
    database
      .collection("admin")
      .find({})
      .toArray()
      .then((documents) => {
        res.send(documents);
        res.end();
      });
  });
});

app.get("/categories", (req, res) => {
  mongoClient.connect(constr).then((clientObj) => {
    var database = clientObj.db("reactdb");
    database
      .collection("categories")
      .find({})
      .toArray()
      .then((document) => {
        res.send(document);
        res.end();
      });
  });
});

app.get("/users", (req, res) => {
  mongoClient.connect(constr).then((clientOjb) => {
    var database = clientOjb.db("reactdb");
    database
      .collection("users")
      .find({})
      .toArray()
      .then((document) => {
        res.send(document);
        res.end();
      });
  });
});

app.get("/videos", (req, res) => {
  mongoClient.connect(constr).then((clientObj) => {
    var database = clientObj.db("reactdb");
    database
      .collection("videos")
      .find({})
      .toArray()
      .then((document) => {
        res.send(document);
        res.end();
      });
  });
});

app.get("/videos/:id", (req, res) => {
  var id = parseInt(req.params.id);
  mongoClient.connect(constr).then((clientObj) => {
    var database = clientObj.db("reactdb");
    database
      .collection("videos")
      .find({ VideoId: id })
      .toArray()
      .then((documents) => {
        res.send(documents);
        res.end();
      });
  });
});

app.get("/getvideos/:catid", (req, res) => {
  var id = parseInt(req.params.catid);
  mongoClient.connect(constr).then((clientObj) => {
    var database = clientObj.db("reactdb");
    database
      .collection("videos")
      .find({ CategoryId: id })
      .toArray()
      .then((documents) => {
        res.send(documents);
        res.end();
      });
  });
});

app.post("/addcategory", (req, res) => {
  var category = {
    CategoryId: parseInt(req.body.CategoryId),
    CategoryName: req.body.CategoryName,
  };

  mongoClient.connect(constr).then((clientObj) => {
    var database = clientObj.db("reactdb");
    database
      .collection("categories")
      .insertOne(category)
      .then(() => {
        res.redirect("/catgories");
        res.end();
      });
  });
});

app.post("/registeruser", (req, res) => {
  var user = {
    UserId: req.body.UserId,
    UserName: req.body.UserName,
    Password: req.body.Password,
    Email: req.body.Email,
    Mobile: req.body.Mobile,
  };
  mongoClient.connect(constr).then((clientObj) => {
    var database = clientObj.db("reactdb");
    database
      .collection("users")
      .insertOne(user)
      .then(() => {
        console.log("User Inserted");
        res.redirect("/users");
        res.end();
      });
  });
});

app.post("/addvideo", (req, res) => {
  var vidoe = {
    VidoeId: parseInt(req.body.VideoId),
    Title: req.body.Title,
    Url: req.body.Url,
    Likes: parseInt(req.body.Like),
    Dislike: parseInt(req.body.Dislike),
    Views: parseInt(req.body.Views),
    CategroyId: parseInt(req.body.CategoryId),
  };
  mongoClient.connect(constr).then((clientObj) => {
    var database = clientObj.db("reactdb");
    database
      .collection("videos")
      .insertOne(vidoe)
      .then(() => {
        console.log("Video Inserted");
        res.redirect("/videos");
        res.end();
      });
  });
});

app.put("/updatevideo/:id", (req, res) => {
  var id = parseInt(req.params.id);

  var video = {
    VideoId: parseInt(req.body.VideoId),
    Title: req.body.Title,
    Url: req.body.Url,
    Likes: parseInt(req.body.Likes),
    Dislikes: parseInt(req.body.Dislikes),
    Views: parseInt(req.body.Views),
    CategoryId: parseInt(req.body.CategoryId),
  };

  mongoClient.connect(constr).then((clientObj) => {
    var database = clientObj.db("reactdb");
    database
      .collection("videos")
      .updateOne({ VideoId: id }, { $set: video })
      .then(() => {
        console.log(`Video Updated`);
        res.end();
      });
  });
});
app.delete("/deletevideo/:id", (req, res) => {
  var id = parseInt(req.params.id);

  mongoClient.connect(constr).then((clientObj) => {
    var database = clientObj.db("reactdb");
    database
      .collection("videos")
      .deleteOne({ VideoId: id })
      .then(() => {
        console.log(`Video Deleted`);
        res.end();
      });
  });
});

app.listen(5000);
console.log(`Server Started : http://127.0.0.1:5000`);
