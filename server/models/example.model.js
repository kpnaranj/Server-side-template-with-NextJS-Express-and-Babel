import mongoose from "mongoose";

const ExampleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 100,
      unique: true,
      index: true,
      lowercase: true,
    },
    details: {
      type: {},
      required: true,
      maxlength: 1000,
    },
  },
  { timestamps: true }
);

const Example = mongoose.model("Example", ExampleSchema);

export default Example;
