import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { NovedadesService } from './novedades.service';
import { CreateNovedadesDto } from './dto/create-novedades.dto';
import { UpdateNovedadesDto } from './dto/update-novedades.dto';
import { AdminAuthGuard } from 'src/guard/admin.guard';

@UseGuards(AdminAuthGuard)
@Controller('novedad')
export class NovedadesController {
  constructor(private readonly novedadesService: NovedadesService) {}

  @Post('/crear')
  create(@Body() novedades: CreateNovedadesDto[]){
    return this.novedadesService.crearNovedades(novedades);
  }

  @Get('')
  ObtenerNovedad(){
    return this.novedadesService.ObtenerNovedad();
  }

  @Delete('/:id')
  EliminarNovedad(@Param('id') id: number){
    return this.novedadesService.EliminarNovedad(id);
  }

  @Put('/actualizar')
  ActualizarNovedad(@Body() UpdateNovedadesDto: UpdateNovedadesDto){
    return this.novedadesService.ActualizarNovedad(UpdateNovedadesDto);
  }
    
 }
    


