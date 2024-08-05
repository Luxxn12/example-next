import { axiosConfig } from "../axiosWithConfig"

export const getProduct = async () => {
    try {
        const response = await axiosConfig.get('/products')
        return response 
    } catch (error) {
        console.log(error)
    }
}