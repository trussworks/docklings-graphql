
export interface Book {
    title: string,
    author: string,
    publishedYear: number, 
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
    listBooks: () =>Book[],
    addBook: (b: Book) => void,
}

export function initCatalog(): Catalog {
    const inventory = initialInventory()

    return {
        listBooks: () => {
            return inventory
        },
        addBook: (b: Book) => {
            inventory.push(b)
        } 
    }

}
