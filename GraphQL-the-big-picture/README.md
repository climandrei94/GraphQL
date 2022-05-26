# GraphQL: The big picture
- ## What is GraphQL?
  - REST (Representational state transfer)
    - Multiple round trips to collect the information from multiple resources
    - Over fetching and under fetching data resources
    - Frontend teams rely heavily on backend teams to deliver the APIs
    - caching is built into HTTP spec
  - GraphQL
    - one single request to collect the information by aggregation of data
    - you only get what you ask for. Tailor made queries to your exact needs
    - frontend and backed teams can work independently
    - Doesn't use HTTP spec for aching (Libraries like Apollo, Relay come with caching options)
- ## GraphQL core concepts
  - GraphQL scalar types
    - Int - A signed 32-bit integer
    - Float - a signed double-precision floating point value
    - String - a UTF-8 character sequence
    - Boolean - true of false values
    - ID - unique identifier. Used to re-fetch an object or as the key for a cache
    - ```
        type Author {
          id: ID
          firstName: String
          rating: Float
          numOfCourses: Int
        }

        enum language {
          ENGLISH
          SPANISH
          FRENCH
        }
      ```
  - Every GraphQL service has a query type. It may or may not have a mutation type. They act as an entry point into the schema
    ```
    schema {
      query: Query
      mutation: Mutation
    }

    type Query {
      author_details: [Author]
    }

    type Mutation {
      addAuthor(firstName: String, lastName: String): Author
    }
    ```
  - By default each of the core scalar types can be set to null. To override this default behavior and ensure that a field cannot be null, the "!" is used.
    ```
      type Author {
          id: ID!
          firstName: String
          rating: Float
          numOfCourses: Int
          courses: [String!]
        }
    ```
  - GraphQL query is all about asking for specific fields on objects
  - You can't query for the same field with different arguments. Hence you need aliases. They let you rename the result of a field with anything you want
    ```
      <alias_name>: <field_name>
    ```
  - Fragments are GraphQL's reusable units. They let you build sets of fields and then include them in multiple queries.
    ```
      fragment <fragment_name> on <Schema_name> {}
    ```
  - A meaningful and explicit name for your operation. Think of it like a function name in a programming language
  - Arguments to fields can be dynamic. GraphQL uses variables to factor dynamic values out of the query, and pass them as a separate dictionary
- ## Why GraphQL?
  - Avoids round-trips to fetch data
  - No more over-fetching or under-fetching of data
  - You specify exactly the data you need and GraphQL gives you exactly what you asked for
  - GraphQL is a strongly-typed language, and its schema should have types for all objects that it uses
  - The schema serves as a contract between client and server
  - Relies on a query language with a type system
  - You can add new fields and types to GraphQL API without breaking changes
- ## GraphQL Ecosystem and tooling
  - GraphQL Client:
    - tools:
      - Apollo Client
      - Relay
  - GraphQL Server:
    - GraphQL execution engine:
      - parses query from client
      - validate schema
      - return JSON response
      - executes resolvers for each field
    - tools:
      - apollo server
      - express graphQL
      - graphQL Yoga
  - Database to GraphQL server
    - Prisma - sits between graphQL server and the database
  - GraphQL tools
    - GraphiQL - an in-browser IDE for writing, validating and testing GraphQL queries
    - GraphQL Voyager - represents any GraphQL API as interactive graph
    - GraphQL Faker - mock your api with realistic data from faker.js
    - GraphQL Visual Editor - Create schemas by joining visual blocks; GraphQL editor transforms them into code
