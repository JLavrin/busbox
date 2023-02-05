const enum Endpoint {
	VEHICLE_POSITION = '/gpsPositions?v=2',
	ROUTES = '/dataset/c24aa637-3619-4dc2-a171-a23eec8f2172/resource/22313c56-5acf-41c7-a5fd-dc5dc72b3851/download/routes.json',
	STOPS = '/dataset/c24aa637-3619-4dc2-a171-a23eec8f2172/resource/4c4025f0-01bf-41f7-a39f-d156d201b82b/download/stops.json',
	STOP_TIMES = '/dataset/c24aa637-3619-4dc2-a171-a23eec8f2172/resource/a023ceb0-8085-45f6-8261-02e6fcba7971/download/stoptimes.json',
	TRIPS = '/dataset/c24aa637-3619-4dc2-a171-a23eec8f2172/resource/b15bb11c-7e06-4685-964e-3db7775f912f/download/trips.json',
	ROUTE_COORDS = '/dataset/c24aa637-3619-4dc2-a171-a23eec8f2172/resource/da610d2a-7f54-44d1-b409-c1a7bdb4d3a4/download/shapes.json',
	STOPS_BY_ROUTE = '/dataset/c24aa637-3619-4dc2-a171-a23eec8f2172/resource/3115d29d-b763-4af5-93f6-763b835967d6/download/stopsintrip.json',
	DEPARTURES = '/departures',
	AGENCIES = '/dataset/c24aa637-3619-4dc2-a171-a23eec8f2172/resource/dff5f71f-0134-4ef3-8116-73c1a8e929a5/download/agencies.json'
}

export default Endpoint
