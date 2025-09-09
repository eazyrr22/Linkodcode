


export async function getImg(url) {
     let result;
    try {
         result = await fetch(url)
    } catch (error) {
        console.log('get all data request failed:\n', error.message)
    }
    
    return result;
}