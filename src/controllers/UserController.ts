import { Request, Response } from 'express';

class UserController {
  async getAllUsers(req: Request, res: Response) {
    // Lógica para obtener todos los usuarios
  }

  async getUserById(req: Request, res: Response) {
    // Lógica para obtener un usuario por ID
  }

  async createUser(req: Request, res: Response) {
    // Lógica para crear un nuevo usuario
  }

  async updateUserById(req: Request, res: Response) {
    // Lógica para actualizar un usuario por ID
  }

  async deleteUserById(req: Request, res: Response) {
    // Lógica para eliminar un usuario por ID
  }
}

export default new UserController();
