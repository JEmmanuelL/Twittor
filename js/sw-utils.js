

//guardar en el cache dinamico
function actualizaCacheDinamico(dynamicCache, req, res) {

    if(res.ok){
        //aquí se usa un return porque caches.open devuelve un resultado
        return caches.open(dynamicCache).then( cache => {
            //guardamos en el cache dinamico la respuesa (archivo)
            cache.put(req, res.clone());
            //retornamos la respuesta (archivo) que se solicito
            return res.clone();

        });

    }else{
        return res;
    }

}