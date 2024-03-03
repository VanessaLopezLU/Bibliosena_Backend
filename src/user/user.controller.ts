import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/User.dto';
import { AdminAuthGuard } from 'src/guard/admin.guard';

@UseGuards(AdminAuthGuard)
@Controller('user')
export class UserController {
 constructor(private readonly userService:UserService){}
 
 @Post('/crear')
  CrearUser(@Body()userDto: UserDto){
    console.log(userDto)
   return this.userService.CrearUser(userDto);
 }
 @Get('')
 obtener() {
   return this.userService.ObtenerUser();
 }
 

 @Delete('/:cedula')
 eliminar(@Param('cedula') cedula: string) {
   return this.userService.eliminarUser(cedula);
 }
 @Put('/actualizar') 
   actualizar(@Body() UserDto: UserDto){
     return this.userService.actualizarUser(UserDto);
 }


}
