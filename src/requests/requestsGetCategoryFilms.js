import { getCookie } from '../utils/getCookie'
import {
	COOKIES,
	DEFAULT_SERVER_API,
	SERVER_API_PARAMS, TOKEN
} from '../defaultValue/defaultValue'

let token = getCookie(COOKIES.TOKEN)
let options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization: 'Bearer ' + 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWE1MjFiMzNhNTcxNTM5OGI2ZTdhNGU5MGU0YTNhOCIsInN1YiI6IjY0OThhNjFjYzhmM2M0MDExZDE0YmNjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P1_ySBFFNw3RCoCcQhDtWti4piwpLGv42Ti8y0pIGDk'
	}
}

export async function requestsGetCategoryFilms() {

	let response = await fetch(
		`${DEFAULT_SERVER_API}${SERVER_API_PARAMS.GENRES}`,
		options
	)
	let data = await response.json()
	console.log(data)
	return data.genres

}
