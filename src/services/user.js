import { apiEndpoints } from '../constants'
import api from './api'

const userService = {}

userService.get = () => (
  api.get(apiEndpoints.me)
)

export default userService
