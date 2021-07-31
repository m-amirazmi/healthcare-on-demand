const API_URL_DEV = 'http://127.0.0.1:8000'
const API_URL_PROD = ''

const API = API_URL_DEV
// const API = API_URL_PROD

export const api = {
    clinics: `${API}/clinics/`,
    services: `${API}/services/`,
    symptoms: `${API}/symptoms/`,
    locations: `${API}/locations/`
}