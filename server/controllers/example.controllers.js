import Example from "../models/example.model";

export const getExample = (req, res) => {
  res.status(200).json({ hello: "Hello, this is a example" });
};

export const postExample = (req, res) => {
  Example.findOne({ _id: req.body._id }).exec((err, example) => {
    //If user already exists then execute
    if (example) {
      return res.status(400).json({
        error: "Example already exists",
      });
    }
    //if not it means it is a new example
    //take values from req.body
    const { name, details } = req.body;

    let newExample = new Example({ name, details });
    //it has two parameters
    //1. error and data
    newExample.save((err, success) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      /* res.json({
        user: success,
      }); */
      res.json({
        message: "Example succesfully added",
      });
    });
  });
};
