import crypto from 'crypto';

import connection  from "../database";

class ContactController{
  async index(request,response){
    const contacts=await connection('contact').select('*')
    return response.json(contacts)
  }
  async create(request,response){
    const{name,subject,email,message}=request.body
    const id =crypto.randomBytes(4).toString('HEX');
    await connection('contact').insert(
      {
        id,
        name,
        subject,
        email,
        message
      }
    )
    return response.json({id})
  }
}
export {ContactController}