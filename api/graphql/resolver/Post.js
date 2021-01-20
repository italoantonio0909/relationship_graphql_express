const User = require("../../models/User");
const Post = require("../../models/Post");

const PostResolver = {
  Query: {
    getPost: async () => {
      return await Post.find();
    },
  },
  Mutation: {
    createPost: async (_, { title, content, user }) => {
      const post = new Post({ title, content, user });
      await post.save();
      return post;
    },
  },
  Post: {
    user(parent) {
      const user = parent.user;
      return User.findById({ _id: user });
    },
  },
};
module.exports = PostResolver;
