import { NextFunction, Request, Response } from 'express';
import getPrismaInstance from '../utils/PrismaClient.ts';

export const checkUser = async (req:Request,res:Response,next:NextFunction) => {
  try{
    const { email } = req.body();

    if(!email)    return res.json({msg : "Email is required",status : false});
    const prisma = getPrismaInstance();
    const user = await prisma.user.findUnique({where: {email}});

    if(!user)   return res.json({msg : "User not found",status : false});
    return res.json({msg : "User found",status : true, user})

  }catch(e){
    console.log(e);
    next(e);
  }

}