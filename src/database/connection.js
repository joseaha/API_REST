import sql from 'mssql';

const dbSettings = {
    user: 'joseadmin',
    password: '06Jose99',
    server: 'apijose.database.windows.net',
    database: 'db_React_Native',
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true // change to true for local dev / self-signed certs
    }
}


export async function getConnection() {
    try {
        const pool = await sql.connect(dbSettings);
        return pool
    } catch (error) { 
        console.error(error);
    }

};
getConnection();
export{sql};
