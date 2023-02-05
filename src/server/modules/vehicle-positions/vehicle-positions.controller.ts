import { Controller, Get, Query } from '@nestjs/common'
import { VehiclePositionsService } from 'server/modules/vehicle-positions/vehicle-positions.service'
import { QueryParams } from 'server/modules/vehicle-positions/types'

@Controller('vehicle-positions')
export class VehiclePositionsController {
	constructor(private readonly vehiclePositionsService: VehiclePositionsService) {}

	@Get()
	getVehicles(@Query() query: QueryParams) {
		const {
			lines
		} = query

		if (lines?.length) {
			return this.vehiclePositionsService.getVehiclesByLines(lines)
		}

		return this.vehiclePositionsService.getAllVehicles()
	}

}
