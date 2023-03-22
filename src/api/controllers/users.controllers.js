const User = require('../models/users.models');
const bcrypt = require ('bcrypt'); //requerimos bcrypt que es un metodo de encriptación
const {validateEmail, validatePassword} = require('../../utils/validators');

const login = async (req, res) => {
    try{
        const userInfo = await User.findOne({email: req.body.email}) //vemos si existe el usuario
        if(!userInfo){
            return res.status(404).json({message: 'Invalid email address'})
        }
        if(!bcrypt.compareSync(req.body.password, userInfo.password))//vemos si mi contraseña es correcta con compareSync
            return res.status(404).json({message: 'Invalid password'})
    } catch (error) {
        return res.status(500).json(error)
    }
}

const register = async (req, res) => {
    try{
        const newUser = new User(req.body);
        if(!validateEmail(newUser.email)){
            res.status(400).send({message: 'Invalid email address'});
        }
        if(!validatePassword(newUser.password)){
            res.status(400).send({message: 'Invalid password'});
        }
        const users = await User.find({email: newUser.email})
        if(userdEmail(newUser.email) > 0){
            return res.status(400).send({message: 'Email is already in use'});
        }
        newUser.password = bcrypt.hashSync(newUser.password, 10);// encriptamos el password con HashSync
        const createdUser = await newUser.save();
        return res.status(201).json(createdUser);
    }catch (error) {
        return res.status(500).json(error)
    }  

}

const logout = async (req, res) => {
    try{
        res.send ("este es mi logout");
    }catch (error) {
        return res.status(500).json(error)
    }   
    
}


module.exports = {login, register, logout};


///minuto 30