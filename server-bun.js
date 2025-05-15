import{serve} from 'bun'
serve({
    fetch(request){
        const url= new URL(request.url);
        if(url.pathname==='/'){
            return new Response('Saamir is great at coding',{status:200})
        }
        else if(url.pathname==='/good-code'){
            return new Response('Yes that a good code!', {status:200})
        }
        else{
            return new Response('404 Not Found', {status: 404})
        }
    }, 
    port: 3000,
    hostname: '127.0.0.1'
})