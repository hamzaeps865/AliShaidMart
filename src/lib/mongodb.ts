// This approach is taken from https://authjs.dev/reference/adapter/mongodb
import { MongoClient, MongoClientOptions } from "mongodb"

if (!process.env.MONGODB_URI) {
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
}

// Fix for Windows + Node.js 18+ OpenSSL TLS handshake error with MongoDB Atlas
// SSL alert number 80 = TLS internal error caused by OpenSSL 3 incompatibility on Windows
if (process.env.NODE_ENV === "development") {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
}

const uri = process.env.MONGODB_URI
const options: MongoClientOptions = {
    tls: true,
    tlsInsecure: true,
}

let client
let clientPromise: Promise<MongoClient>

if (process.env.NODE_ENV === "development") {
    // In development mode, use a global variable so that the value
    // is preserved across module reloads caused by HMR (Hot Module Replacement).
    let globalWithMongo = global as typeof globalThis & {
        _mongoClientPromise?: Promise<MongoClient>
    }

    if (!globalWithMongo._mongoClientPromise) {
        client = new MongoClient(uri, options)
        globalWithMongo._mongoClientPromise = client.connect()
    }
    clientPromise = globalWithMongo._mongoClientPromise
} else {
    // In production mode, it's best to not use a global variable.
    client = new MongoClient(uri, options)
    clientPromise = client.connect()
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise
