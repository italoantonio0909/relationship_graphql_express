const Schema = `
    type Query{
        getUsers:[User]
        getPost:[Post]
    }
    type Mutation{
        createUser(username:String!,email:String!,password:String!):User
        createPost(title:String!,content:String!,user:String!):Post
    }
    type User{
        username:String
        email:String
        password:String
        post:[Post]
    }
    type Post{
        title:String!
        content:String!
        user:User
    }
`;
module.exports = Schema;
