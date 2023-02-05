import { Module } from '@nestjs/common';

import { VehiclePositionsController } from 'server/modules/vehicle-positions/vehicle-positions.controller'
import { VehiclePositionsService } from 'server/modules/vehicle-positions/vehicle-positions.service'
import { VehiclePositionsQuery } from 'server/modules/vehicle-positions/vehicle-positions.query'

@Module({
	imports: [],
	controllers: [VehiclePositionsController],
	providers: [VehiclePositionsService, VehiclePositionsQuery],
})
export class VehiclePositionsModule {}
