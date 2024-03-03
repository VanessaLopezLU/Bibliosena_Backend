import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { EstadoEquipoService } from './estado-equipo.service';
import { CreateEstadoEquipoDto } from './dto/create-estadoequipo.dto';
import { UpdateEstadoEquipoDto } from './dto/update-estadoequipo.dto';
import { AdminAuthGuard } from 'src/guard/admin.guard';

@UseGuards(AdminAuthGuard)
@Controller('estado-equipo')
export class EstadoEquipoController {
  constructor(private readonly estadoEquipoService: EstadoEquipoService) {}
  @Post('/crear')
  crear(@Body() CreateEstadoEquipoDto: CreateEstadoEquipoDto) {
    return this.estadoEquipoService.crear(CreateEstadoEquipoDto);
  }

  @Get('')
  obtenerdatos() {
    return this.estadoEquipoService.obtener();
  }
  @Delete('/:id')
  eliminar(@Param('id') id: number) {
    return this.estadoEquipoService.eliminarestado(id);
  }
  @Put('/actualizar') 
    actualizarEstado(@Body() UpdateEstadoEquipoDto: UpdateEstadoEquipoDto){
      return this.estadoEquipoService.actualizarestado(UpdateEstadoEquipoDto);
  }
  
 
  

}
