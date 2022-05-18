import 'reflect-metadata';
import { JsonController, Param, Body, Get, Post, Delete, Res, Req, } from 'routing-controllers';
import Container from 'typedi';
import { getManager } from 'typeorm';
//import { OrmRepository } from 'typeorm-typedi-extensions';
import { Users } from '../models/User';
//import { UserRepository } from '../repositories/UserRepository';
import { UserService } from '../services/UserService';
@JsonController('/usersapi')
export class UserController {
  constructor(
   private userService:UserService,
) {}
    // userapi/add-user
    @Post('/add-user')
    public async createUser(@Body() bodyD: any, @Res() response: any, @Req() request: any): Promise<any> {
        const newUser = new Users();
        newUser.name =  bodyD.name;
        newUser.email = bodyD.email;
        newUser.phone = bodyD.phone;
       //const userService = Container.get<UserService>(UserService);//agr khali typeorm wala use container lgaya to is approach se chalain gay 
       // agr this . se chalana hai to dono usecontainer chalanay parain gay
        if(typeof(this.userService)!=undefined){
          console.log(newUser);
          const userSave = await this.userService.create(newUser);
        if (userSave) {
            const successResponse: any = { status: 1, message: 'User Created Successfully', data: userSave,};
            return response.status(200).send(successResponse);
        } else {
            const errorResponse: any = {status: 0,message: 'Unable to create User. ',};
            return response.status(400).send(errorResponse);
        }
      }
    }

    // @Post('/insert-user')
    // post(@Body() user: Users) {
    //   return this.userService.insert(user);
    // }
    // // usersapi/delete-user/:id
    // @Delete('/delete-user/:id')
    // public async deleteUser(@Param('id') id: number, @Req() request: any, @Res() response: any): Promise<any> {
    //     const user = await this.userService.findOne({ where: {id: id,},});
    //     if (!user) {
    //         const errorResponse: any = {status: 0, message: 'Invalid userId',};
    //         return response.status(400).send(errorResponse);
    //     }
    //     const deleteuser = await this.userService.delete(user.id);
    //     if (deleteuser) {
    //         const successResponse: any = { status: 1, message: 'User Deleted Successfully',};
    //         return response.status(200).send(successResponse);
    //     } else {
    //         const errorResponse: any = {status: 0, message: 'Unable to delete the  user. ',};
    //         return response.status(400).send(errorResponse);
    //     }
    // }
    // // /user/raw-users
    // @Get('/raw-users')
    // public async query_categories(@Res() response: any, @Req() request: any): Promise<any> {
    //   const dd = await getManager().query(`SELECT * FROM users`)
    //     return response.status(200).send({ status: 1, message: 'Successfully done',data:dd });
    // }

    // @Get('/get-users')
    // public async getAll(@Res() response: any, @Req() request: any): Promise<any> {
    //   const users = await this.userService.findAll();
    //   return response.status(200).send({ status: 1, message: users });
    // }
//check kerna hai k findone kia dono pe chalta 1. id integer direct bhejo ya 2. object bhejo jis mai likha ho where id=id 
  


  // @Get('/users/:id')
  // getOne(@Param('id') id: number) {
  //   return userRepository.findById(id);
  // }


}