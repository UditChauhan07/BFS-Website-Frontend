import axios from "axios"

export const originAPi = `https://sandbox.beautyfashionsales.com`
// export const originAPi = `http://localhost:3001`


export const getManufactuersDetails = async()=>{
    try {
        let result = await axios.post(`${originAPi}/BFSG/DPXKsK3f2LFI203/brand-data` , {
            
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
        let result = await axios.post(`${originAPi}/BFSG/DPXKsK3f2LFI203/brand-slug-data` , {
            
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
        let result = await axios.post(`${originAPi}/BFSG/DPXKsK3f2LFI203/topProduct-data` , {
            
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
        let result = await axios.post(`${originAPi}/BFSG/DPXKsK3f2LFI203/skincare` , {
            
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
        let result = await axios.post(`${originAPi}/BFSG/DPXKsK3f2LFI203/makeup` , {
            
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
        let result = await axios.post(`${originAPi}/BFSG/DPXKsK3f2LFI203/Fragrance` , {
            
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
        let result = await axios.post(`${originAPi}/BFSG/DPXKsK3f2LFI203/body` , {
            
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
        let result = await axios.post(`${originAPi}/BFSG/DPXKsK3f2LFI203/decor` , {
            
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
        let result = await axios.post(`${originAPi}/BFSG/DPXKsK3f2LFI203/haircare` , {
            
            if(result){
                console.log({result})
            }

        })
        return result 
        
    } catch (error) {
        console.log(error )
        
    }

}





export const homePage = async()=>{
    try {
        let result = await axios.post(`${originAPi}/BFSG/DPXKsK3f2LFI203/home-page` , {
            
            if(result){
                console.log({result})
            }

        })
        return result 
        
    } catch (error) {
        console.log(error )
        
    }

}


export const aboutPage = async()=>{
    try {
        let result = await axios.post(`${originAPi}/BFSG/DPXKsK3f2LFI203/about-us` , {
            
            if(result){
                console.log({result})
            }

        })
        return result 
        
    } catch (error) {
        console.log(error )
        
    }

}
export const termPage = async()=>{
    try {
        let result = await axios.post(`${originAPi}/BFSG/DPXKsK3f2LFI203/term&condition` , {
            
            if(result){
                console.log({result})
            }

        })
        return result 
        
    } catch (error) {
        console.log(error )
        
    }

}

export const tPage = async()=>{
    try {
        let result = await axios.post(`${originAPi}/BFSG/DPXKsK3f2LFI203/term&condition` , {
            
            if(result){
                console.log({result})
            }

        })
        return result 
        
    } catch (error) {
        console.log(error )
        
    }

}

