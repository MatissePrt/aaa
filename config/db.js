import mssql from "mssql";


// Configuration de la base de données
const dbConfig = {
  user: "linkup-supinfo",
  password: "supinflop37!",
  server: "linkup-db.database.windows.net",
  database: "LinkUpDB",
  options: {
    encrypt: true, // Utilisé pour Azure SQL
    enableArithAbort: true, // Recommandé par mssql
    connectTimeout: 30000, 
    requestTimeout: 30000,
  },
};

export async function getDbConnection() {
  try {
    const pool = await mssql.connect(dbConfig);
    console.log('Connexion à la base de données réussie.');
    return pool;
  } catch (err) {
    console.error("Database connection failed:", err.message);
    throw err;
  }
}

export default dbConfig;
