import { getConnection, sql, querys } from "../database/index";

export const getPersonas = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(querys.getAllPersona);
        console.log(result)
        res.json(result.recordset)
    } catch (error) {
        res.status(result.recordset);
        res.send(error.msg);
    }
};

export const addPersona = async (req, res) => {
    try {
        const { ID, Nombre, Apellidos } = req.body;
        if (ID == null || Nombre == null || Apellidos == null) {
            return res.status(400).json({ msg: 'Bab Request.Please fill all fields' });
        }
        const pool = await getConnection();
        await pool.request().input("ID", sql.VarChar, ID)
            .input("Nombre", sql.VarChar, Nombre)
            .input("Apellidos", sql.VarChar, Apellidos)
            .query(querys.addPersona);
        res.json({
            status: true,
            ID: req.query.ID,
            Nombre: req.query.Nombre,
            Apellidos: req.query.Apellidos,
        });
    } catch (error) {
        res.status(result.recordset);
        res.send(error.msg);
    }
}

export const getPersonaById = async (req, res) => {
    try {
        const { id } = req.params
        const pool = await getConnection();
        const result = await pool
            .request()
            .input("ID", sql.VarChar, id)
            .query(querys.getPersonaId);
        return res.json(result.recordset[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const deletePersonaById = async (req, res) => {
    try {
        const { id } = req.params
        const pool = await getConnection();
        const result = await pool
            .request()
            .input("ID", sql.VarChar, id)
            .query(querys.deletePersonas);
        return res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const updatePersonaById = async (req, res) => {
    try {
        const {Nombre, Apellidos } = req.body;
        const {id} = req.params;
        if (id == null || Nombre == null || Apellidos == null) {
            return res.status(400).json({ msg: 'Bab Request.Please fill all fields' });
        }
        const pool = await getConnection();
        await pool.request().input("ID", sql.VarChar, id)
            .input("Nombre", sql.VarChar, Nombre)
            .input("Apellidos", sql.VarChar, Apellidos)
            .query(querys.updatePersona);
        res.json({
            status: true,
            ID: req.query.id,
            Nombre: req.query.Nombre,
            Apellidos: req.query.Apellidos,
        });
    } catch (error) {
        res.status(result.recordset);
        res.send(error.msg);
    }
}
