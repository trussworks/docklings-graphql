import { startServer } from './libraryserver'
import { initCatalog } from './bookcatalog'

console.log("hello")

function addFive(i: number): number {
    return i + 5
}

async function main() {
    console.log("Fivbe", addFive(1))

    const catalog = initCatalog()
    startServer(catalog)
}

main()
