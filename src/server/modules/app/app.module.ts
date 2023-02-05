import { Module } from '@nestjs/common';

import { AppController } from 'server/modules/app/app.controller';
import { AppService } from 'server/modules/app/app.service';
import { VehiclePositionsModule } from 'server/modules/vehicle-positions/vehicle-positions.module'

@Module({
  imports: [VehiclePositionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
