import Express from 'express';

const app = Express(); 
app.get('/hello', (request, response)=>{
   response.send("ola");

});

app.listen(8080);

