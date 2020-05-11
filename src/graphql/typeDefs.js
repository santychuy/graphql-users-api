export const typeDefs = `
    type Query {
        seeUsers: [User]!
        seeUser(id: ID!): User!
    }

    type Mutation {
        createUser(name: String!, email: String!): User!
        deleteUser(id: ID!): User!
        updateUser(id: ID!, name: String, email: String): User!
    }

    type User {
        id: ID!
        name: String!
        email: String!
        created: String!
    }
`;
