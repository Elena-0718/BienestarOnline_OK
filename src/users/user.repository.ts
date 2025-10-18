import { Injectable } from "@nestjs/common";


@ Injectable()
export class UsersRepository {
    getAllUsersRepository() {
        return "Respuesta desde el repositorio";
    }
    getAllUsers() {
        return "Devuelve todos los usuarios";
    }
}