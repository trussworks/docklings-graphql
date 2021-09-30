
export interface Book {
    title: string,
    author: string,
    publishedYear: number, 
}

export interface Author {
    name: string,
    books: Book[],
}

function newBook(title: string, author: string, publishedYear: number): Book {
    return {
        title,
        author,
        publishedYear,
    }
}

function initialInventory(): Book[] {
    return [
        newBook('A Wrinkle In Time', 'Madeleine L\'Engle', 1962),
        newBook('A Little Princess', 'Frances Hodgson Burnett', 1905),
        newBook('The Secret Garden', 'Frances Hodgson Burnett', 1911),
        newBook('The Hobbit', 'J. R. R. Tolkein', 1937),
        newBook('The Fellowship of the Ring', 'J. R. R. Tolkein', 1954),
        newBook('The Two Towers', 'J. R. R. Tolkein', 1954),
        newBook('The Return of the King', 'J. R. R. Tolkein', 1955),
        newBook('Le Petit Prince', 'Antoine de Saint-Exupéry', 1943),
        newBook('Black Beauty', 'Anna Sewell', 1877),
        newBook('Ramona the Brave', 'Beverly Cleary', 1975),
    ]
}

export interface Catalog {
    listBooks: () => Book[],
    addBook: (b: Book) => void,
    searchAuthors: (search: string) => Author[],
}

export function initCatalog(): Catalog {
    const inventory = initialInventory()

    return {
        listBooks: () => {
            return inventory
        },
        addBook: (b: Book) => {
            inventory.push(b)
        },
        searchAuthors: (search: string) => {
            // take the inventory and collect all the books who's author match the search string
            const matchingBooks = inventory.filter(b => b.author.includes(search))
            const authors: { [name: string]: Author} = {}
            for (const book of matchingBooks) {
                if (authors[book.author] === undefined) {
                    authors[book.author] = {
                        name: book.author,
                        books: [],
                    }
                }
                authors[book.author].books.push(book)
            }

            return Object.values(authors)
        }
    }

}
