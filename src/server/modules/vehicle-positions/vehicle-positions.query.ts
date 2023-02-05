import { Injectable } from '@nestjs/common'
import { AxiosInstance } from 'axios'

import GdanskApiV1, { GdanskApiV1Endpoint } from 'server/common/clients/GdanskApiV1'
import { HttpProviderException } from 'server/common/execeptions/HttpProviderException'
import { VehiclePositionResponse } from 'server/modules/vehicle-positions/types'

@Injectable()
export class VehiclePositionsQuery {
 private readonly gdanskApiV1Client: AxiosInstance = GdanskApiV1.getClient()

	async fetchGpsPositions(): Promise<VehiclePositionResponse> {
		try {
			const { data } = await this.gdanskApiV1Client.get(GdanskApiV1Endpoint.VEHICLE_POSITION)
			return data
		} catch (error) {
			throw new HttpProviderException()
		}
	}
}

