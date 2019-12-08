const connectionPool = require('../config/database-connection');
const insertQuery = 'insert into users(firstname,lastname,email,username,password,mobile) values(?,?,?,?,?,?)';


var createNewUser = (user)=>{
    return new Promise((resolve,reject) => {
        connectionPool.getConnection((err,conn) => {
            if(err){
                reject('error in creating user');
            }
            let params = [user.firstname,user.lastname,user.email,user.username,user.password,user.mobile];
            conn.query(insertQuery,params,(err,results,fields) =>{
                if(err){
                   reject('error in creating user');
                }
            });
            resolve();
            conn.release();        
        });
    });
};

var checkExistingUser = (username)=>{
    return new Promise((resolve,reject)=>{
        connectionPool.getConnection((err,conn)=>{
            if(err){
                reject()
            }
            conn.query('select username from users where username = ?',username, (err,results,fields)=>{
                if(err){
                    reject();
                }
                if(results.length != 0){
                    resolve("Username Taken")
                }
                else{
                    reject();
                }
            });
            conn.release();
        });
    });
};

module.exports.createNewUser = createNewUser;
module.exports.checkExistingUser = checkExistingUser;
