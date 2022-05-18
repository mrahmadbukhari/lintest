import { createExpressServer,  } from 'routing-controllers';
import { UserController } from './controllers/UserController';
import { createConnection,useContainer } from 'typeorm';
import { Application } from 'express';
import Container from 'typedi';

var routing_controllers = require("routing-controllers");

const app: Application = createExpressServer({
  controllers: [UserController],
  cors: true
});
const PORT = 4011;

app.listen(PORT,()=>{
    console.log("server is running on "+PORT)
})
routing_controllers.useContainer(Container);
useContainer(Container);
createConnection().then(()=>{console.log("db connected")}).catch((e)=>{console.log("Error:"+e)})

