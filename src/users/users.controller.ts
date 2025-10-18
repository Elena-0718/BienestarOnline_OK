import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}
//Ruta para obtener todos los usuarios 
 
    @Get("getAllUsers")
    getAllUsers() {

        return this.userService.getAllUsersService();
    }
     @Post("createUser")
  postCreateUser() {
    return "Ruta para crear un usuario";
  }
  @Put("updateUser")
  putUpdateUser() {
    return "Ruta para actualizar un usuario";
  }
@Delete("deleteUser")
  deleteUser() {
    return "ruta para eliminar un usuario";
  }
}
