import app from './app'
import database from './database/connection'

app.listen(app.get('port'));

console.log('Servidor inicializado en port ' + app.get('port'));