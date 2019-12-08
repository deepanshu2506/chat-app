const connectionPool = require('../config/database-connection');
const insertQuery = 'insert into users(firstname,lastname,email,username,password,mobile) values(?,?,?,?,?,?)';
const usernameQuery = 'select username from users where username = ?';
const getUserQuery = 'select username,password from users where username = ?';

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
            conn.query(usernameQuery,username, (err,results,fields)=>{
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

var authenticate = (userdata)=>{
    return new Promise((resolve,reject)=>{
        connectionPool.getConnection((err,conn)=>{
            if(err){
                reject({queryExecuted : false});
            }
            conn.query(getUserQuery,userdata.username , (err,results,fields)=>{
                if(err){
                    reject({queryExecuted:false});
                }
                if(results.length == 0){
                    reject({queryExecuted: true , usernameFound:false});
                }
                else if(results[0].password != userdata.password){
                    reject({queryExecuted: true , usernameFound:true,passwordMatched: false});
                }
                else{
                    resolve();
                }
            });
            conn.release();
        });
    });
};

module.exports.createNewUser = createNewUser;
module.exports.checkExistingUser = checkExistingUser;
module.exports.authenticate = authenticate;
