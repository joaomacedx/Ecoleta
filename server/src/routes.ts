import express from 'express';


const routes = express.Router();

routes.get('/', (request, response)=>{
   response.send({message: "Hello world!"});
});

export default routes;