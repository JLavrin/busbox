import { Injectable } from '@nestjs/common'
import axios, { AxiosInstance } from 'axios'

const GDANSK_API_V1_URL = process.env.GDANSK_API_V1_URL || 'https://ckan2.multimediagdansk.pl'

@Injectable()
export class GdanskApiV1 {
	static getClient(): AxiosInstance {
		return axios.create({
			baseURL: GDANSK_API_V1_URL,
			timeout: 10000,
		})
	}
}
