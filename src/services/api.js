

export const responses={
    async fetchAllProducts(){
        const response= await fetch(
            `https://testbackend.nc-one.com/image?`
        );
        return await response.json();
    },
    async fetchOneProduct(id){
        const response= await fetch(
            `https://testbackend.nc-one.com/image?id=${id}`
        );
        return await response.json();  
    },
 
}