const path=require('path');
require('dotenv').config({ path: path.join(__dirname, './.env') });
const Sequelize = require('sequelize');

const sequelize=new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASSWD,{
    host:process.env.DB_HOST,
    dialect: 'mariadb',
    dialectOptions: {connectTimeout: 1000}
})

const Post = sequelize.define('post',{
    title:{
        type:Sequelize.STRING,
        allowNull:false
    },
    content:{
        type:Sequelize.TEXT,
        allowNull:false
    },
    author:{
        type:Sequelize.STRING,
        allowNull:false
    }
}, 
{
    timestamps:false,
    freezeTableName:true
});

module.exports={
    sequelize:sequelize,
    Post:Post
}
