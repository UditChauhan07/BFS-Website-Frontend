import axios from "axios"

export const originAPi = `http://localhost:3001`


export const getManufactuersDetails = async()=>{
    try {
        let result = await axios.post(`${originAPi}/BFSG/brand-data` , {
            
            if(result){
                console.log({result})
            }

        })
        return result 
        
    } catch (error) {
        console.log(error )
        
    }

} 

export const getManufactuersPageDetails = async()=>{
    try {
        let result = await axios.post(`${originAPi}/BFSG/brand-slug-data` , {
            
            if(result){
                console.log({result})
            }

        })
        return result 
        
    } catch (error) {
        console.log(error )
        
    }

} 
export const topProductDetails = async()=>{
    try {
        let result = await axios.post(`${originAPi}/BFSG/topProduct-data` , {
            
            if(result){
                console.log({result})
            }

        })
        return result 
        
    } catch (error) {
        console.log(error )
        
    }

} 

export const skinCareDetails = async()=>{
    try {
        let result = await axios.post(`${originAPi}/BFSG/skincare` , {
            
            if(result){
                console.log({result})
            }

        })
        return result 
        
    } catch (error) {
        console.log(error )
        
    }

}
export const makeupDetails = async()=>{
    try {
        let result = await axios.post(`${originAPi}/BFSG/makeup` , {
            
            if(result){
                console.log({result})
            }

        })
        return result 
        
    } catch (error) {
        console.log(error )
        
    }

}
export const fragranceDetails = async()=>{
    try {
        let result = await axios.post(`${originAPi}/BFSG/Fragrance` , {
            
            if(result){
                console.log({result})
            }

        })
        return result 
        
    } catch (error) {
        console.log(error )
        
    }

}
export const bodyDetails = async()=>{
    try {
        let result = await axios.post(`${originAPi}/BFSG/body` , {
            
            if(result){
                console.log({result})
            }

        })
        return result 
        
    } catch (error) {
        console.log(error )
        
    }

}
export const decorDetails = async()=>{
    try {
        let result = await axios.post(`${originAPi}/BFSG/decor` , {
            
            if(result){
                console.log({result})
            }

        })
        return result 
        
    } catch (error) {
        console.log(error )
        
    }

}
export const hairCareDetails = async()=>{
    try {
        let result = await axios.post(`${originAPi}/BFSG/haircare` , {
            
            if(result){
                console.log({result})
            }

        })
        return result 
        
    } catch (error) {
        console.log(error )
        
    }

}
export const catogeryDetails = async()=>{
    try {
        let result = await axios.post(`${originAPi}/BFSG/brand-Catogery` , {
            
            if(result){
                console.log({result})
            }

        })
        return result 
        
    } catch (error) {
        console.log(error )
        
    }

}