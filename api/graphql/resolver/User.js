const User = require("../../models/User");
const Post = require("../../models/Post");

const UserResolver = {
  Query: {
    getUsers: async () => {
      return await User.find();
    },
  },
  Mutation: {
    createUser: async (_, { username, email, password }) => {
      const user = new User({ username, email, password });
      const passwordSecure = await user.encryptPassword(password);
      user.password = passwordSecure;
      await user.save();
      return user;
    },
  },
  User: {
    post: async (parent) => {
      const user = parent._id;
      return await Post.find({ user: user });
    },
  },
};

module.exports = UserResolver;
