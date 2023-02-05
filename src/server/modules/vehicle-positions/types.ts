type QueryParams = {
	lines: string[]
}

type VehiclePosition = {
	generated: string
	routeShortName: string
	tripId: string
	headsign: string
	vehicleCode: string
	vehicleService: string
	vehicleId: string
	speed: number
	direction: number
	delay: number
	scheduledTripStartTime: string
	lat: number
	lon: number
	gpsQuality: number
}

type VehiclePositionResponse = {
	lastUpdate: string
	vehicles: VehiclePosition[]
}

export {
	QueryParams,
	VehiclePosition,
	VehiclePositionResponse
}
