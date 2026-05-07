import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      maxlength: [200, 'Title cannot exceed 200 characters']
    },
    content: {
      type: String,
      required: [true, 'Content is required'],
      minlength: [10, 'Content must be at least 10 characters']
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    blogImage: {
      type: String,
      required: true
    },
    isPublished: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);



const Blog = mongoose.model("BLog", blogSchema);

export default Blog
