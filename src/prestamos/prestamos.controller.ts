import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { PrestamosService } from './prestamos.service';
import { CreatePrestamoDto } from './dto/create-prestamo.dto';
import { UpdateEstadoprestamoDto } from 'src/estadoprestamo/dto/update-estadoprestamo.dto';
import { InstrucAuthGuard } from 'src/guard/instructor.guard';


@Controller('prestamo')
export class PrestamosController {
  constructor(private readonly prestamosService: PrestamosService) {}
  @UseGuards(InstrucAuthGuard)
  @Post('/crear')
  async crear(@Body() prestamocrear: CreatePrestamoDto) {
    return await this.prestamosService.crearPrestamo(prestamocrear);
  }

  @Get('')
  obtenerprestamo() {
    return this.prestamosService.obtener();
  }
 
   
  @Get('/:cedula')
    obtenerPorcedulaPrestado(@Param('cedula') cedula:string){
        return this.prestamosService.obtenerPorCedulaPrestamo(cedula);
  }

  @Delete('/:id')
  eliminar(@Param('id') id: number) {
    return this.prestamosService.eliminarPrestamo(id);
  }
  @Put('/actualizar/:id') 
    actualizarEstado (@Param('id') id: number, @Body() actualizarEstado: UpdateEstadoprestamoDto){
    return this.prestamosService.actualizarPrestamo(id,actualizarEstado)
  }
  
}
