exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        title: "First Post",
        content:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, unde.",
      },
    ],
  });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  // CREATE POST IN DB
  res.status(201).json({
    message: "POST CREATED SUCCESSFULLY!",
    post: { id: Math.random(), title, content },
  });
};
