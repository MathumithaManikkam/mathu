import User from "../model/userModel";

export const register = async (req, res) => {   
    const {name,email,phoneNumber,password} = requ.body;
    res.status(200).json({data:`Welcom ${name}`})
}