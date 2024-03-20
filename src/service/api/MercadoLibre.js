export async function getProduct(limit='',searchQuery){
    const URL_BASE = `https://api.mercadolibre.com/sites/MLA/search?q=${searchQuery}&limit=${limit}`
    try{
        const res = await fetch(URL_BASE)
        const data = await res.json();
        console.log(data.results)
        return data.results
    }catch(error){
        throw new Error('Error en la busqueda de producto')
    }
}


