import { startServer } from './libraryserver'
import { initCatalog } from './bookcatalog'

async function main() {
    console.log('Make way for docklings 🦆🦆🦆🦆')

    const catalog = initCatalog()
    startServer(catalog)
}

main()
