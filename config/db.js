//create connection to databasse.
import mysql from 'mysql2';

export const db = mysql.createPool({

host:'127.0.0.1',
user:'root',
password:'',
database:'dse_backend'

});
