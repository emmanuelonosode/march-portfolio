import mongoose from "mongoose";

const BlogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: Object, // Store Editor.js JSON output
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  banner: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const BlogPost = mongoose.model("BlogPost", BlogPostSchema);

export default BlogPost;
