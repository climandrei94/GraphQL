const { ApolloServer, gql } = require('apollo-server')

const sessions = [
  {
    id: 1,
    title: "session 1",
    description: "session description",
    startsAt: '2022-05-20',
    endsAt: '2022-06-20'
  }
] 

const typeDefs = gql`
type Query {
  sessions: [Session]
}

type Session {
  id: ID!
  title: String
  description: String
  startsAt: String
  endsAt: String
}
`

const resolvers = {
  Query: {
    sessions: () => {
      return sessions;
    }
  }
}

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({port: process.env.PORT || 4000})
  .then(({url}) => {
    console.log(`GraphQL running at ${url}`)
  })