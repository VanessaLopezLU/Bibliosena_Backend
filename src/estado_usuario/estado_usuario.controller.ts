import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { EstadoUsuarioService } from './estado_usuario.service';
import { CreateEstadoUsuarioDto } from './dto/create-estadousuario.dto';
import { UpdateEstadoUsuarioDto } from './dto/update-estadousuario.dto';
import { AdminAuthGuard } from 'src/guard/admin.guard';

@UseGuards(AdminAuthGuard)
@Controller('estado-usuario')
export class EstadoUsuarioController {
  constructor(private readonly estadoUsuarioService: EstadoUsuarioService) {}
  @Post('/crear')
  crear(@Body() CreateEstadoUsuarioDto: CreateEstadoUsuarioDto ) {
    return this.estadoUsuarioService.crear(CreateEstadoUsuarioDto);
  }

  @Get('')
  obtenerdatos() {
    return this.estadoUsuarioService.obtener();
  }
  @Delete('/:id')
  eliminar(@Param('id') id: number) {
    return this.estadoUsuarioService.eliminarestado(id);
  }
  @Put('/actualizar') 
    actualizarEstado(@Body() UpdateEstadoUsuarioDto: UpdateEstadoUsuarioDto){
      return this.estadoUsuarioService.actualizarestado(UpdateEstadoUsuarioDto);
  }
  
}
