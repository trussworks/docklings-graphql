Dockling GraphQL Interactive
====================

Run the library server:
```bash
yarn install
yarn start
```

visit the server with [Apollo Studio](https://studio.apollographql.com/) (you will have to create an account there) and add a new book to the library

Some queries to run there:

```gql
query ListBooks {
  books {
    title
    author
    publishedYear
  }
}
```

```gql
mutation CreateBook($book: BookInput!) {
  createBook(book: $book) {
    title
    author
    publishedYear
  }
}

Variables:
{
  "book": {
    "title": "The Phantom Tollbooth",
    "author": "Norton Juster",
    "publishedYear": 1961
  }
}
```

```gql
query SearchAuthors($nameSearch: String) {
  searchAuthors(nameSearch: $nameSearch) {
    name
  }
}

Variables:

{
  "nameSearch": "i"
}
```

## Exercises
* add a favorite book to the library
* query for Tolkein and list all the years his books were published
* Add DOB to author
* calculate age of author when their first book was published
* add the concept of checking out a book from the library



#### TODO
* want to show how the resolver chain works a bit more, need multiple queries that resolve to a specific thing
  * maybe do some calculations would help?
* add a react front end that queries these things and displays
  * show how query flexibility gives power to the FE
* add a REST API for comparison
