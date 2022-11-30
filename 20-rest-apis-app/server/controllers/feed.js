const { validationResult } = require("express-validator/check");

const Post = require("../models/post");

exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: "1",
        title: "First Post",
        content: "This is the first post!",
        imageUrl: "images/boat.jpg",
        creator: {
          name: "Daniel",
        },
        createdAt: new Date(),
      },
    ],
  });
};

exports.createPost = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      message: "Validation failed, entered data is incorect.",
      errors: errors.array(),
    });
  }

  const title = req.body.title;
  const content = req.body.content;

  const post = new Post({
    title: title,
    content: content,
    imageUrl: "images/boat.jpg",
    creator: { name: "Daniel" },
  });
  post
    .save()
    .then((resutl) => {
      console.log(resutl);
      res.status(201).json({
        message: "Post created successfully!",
        post: resutl,
      });
    })
    .catch((err) => console.log(err));
};
