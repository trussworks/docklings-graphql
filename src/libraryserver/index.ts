import { ApolloServer, gql } from 'apollo-server'
import { Catalog, Book } from '../bookcatalog'


// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
    publishedYear: Int 
  }

  type Author {
    name: String
    books: [Book]
  }

  input BookInput {
    title: String
    author: String
    publishedYear: Int 
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
    searchAuthors(nameSearch: String): [Author] 
  }

  type Mutation {
    createBook(book: BookInput): Book
  }
`

export function startServer(catalog: Catalog) {
    // Resolvers define the technique for fetching the types defined in the
    // schema.
    const resolvers = {
      Query: {
        books: () => catalog.listBooks(),
        searchAuthors: (_parent: any, args: { nameSearch: string }) => {
            return catalog.searchAuthors(args.nameSearch)
        }
      },
      Mutation: {
        createBook: (_parent: any, args: { book: Book }) => {
            catalog.addBook(args.book)
            return args.book
        }
      }
    };

    // The ApolloServer constructor requires two parameters: your schema
    // definition and your set of resolvers.
    const server = new ApolloServer({ typeDefs, resolvers });

    // The `listen` method launches a web server.
    server.listen().then(({ url }) => {
      console.log(`🚀  Server ready at ${url}`);
    });
}
