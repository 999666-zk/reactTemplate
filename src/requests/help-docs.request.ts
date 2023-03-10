import http from './http'

export const getNavigation = () => http.get('/menu')

export const getDocs = () => http.get('/test')

export const postDocs = (data: any) => http.post('/test', data)

export default {}
