import { Injectable } from '@nestjs/common'
import { VehiclePositionsQuery } from 'server/modules/vehicle-positions/vehicle-positions.query'
import { VehiclePosition, VehiclePositionResponse } from 'server/modules/vehicle-positions/types'

@Injectable()
export class VehiclePositionsService {
	constructor(private readonly vehiclePositionsQuery: VehiclePositionsQuery) {}

	async getAllVehicles(): Promise<VehiclePositionResponse> {
		return this.vehiclePositionsQuery.fetchGpsPositions()
	}

	async getVehiclesByLines(lines: string[]): Promise<VehiclePositionResponse> {
		const { vehicles, lastUpdate } = await this.vehiclePositionsQuery.fetchGpsPositions()
		return {
			lastUpdate,
			vehicles: this.checkIfVehicleShouldBeSent(vehicles, lines)
		}
	}

	checkIfVehicleShouldBeSent(vehicles: VehiclePosition[], lines: string[]): VehiclePosition[] {
		return vehicles.filter(vehicle => lines.includes(vehicle.routeShortName))
	}
}
