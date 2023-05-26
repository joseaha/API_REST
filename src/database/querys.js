export const querys = {
    getAllPersona:'select * from TBPersona',
    addPersona:'INSERT INTO TBPersona (ID, Nombre, Apellidos) VALUES (@ID, @Nombre, @Apellidos)',
    deletePersonas: 'DELETE FROM TBPersona WHERE ID = @ID',
    getPersonaId:'select * from TBPersona WHERE ID = @ID',
    updatePersona:'UPDATE TBPersona SET Nombre = @Nombre, Apellidos = @Apellidos WHERE ID = @ID'
}