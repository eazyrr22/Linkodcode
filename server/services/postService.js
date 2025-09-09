


export async function getAllData() {
     let result;
    try {
         result = await fetch("http://localhost:3000/server/db/posts.json")
    } catch (error) {
        console.log('get all data request failed:\n', error.message)
    }
    
    return result;
}