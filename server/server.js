 // load the environment variables
//  require("./config/environment")();

 const app = require("./app");
 const http = require("http");
 
 const PORT = process.env.PORT || 8000;
 
 const createSimpleServer = app => {
   const server = http.createServer(app);
   server.listen(PORT, () => {
     console.log(`Hello World 🌎 I'm Listening on port ${PORT} `);
   });
 };
 
 createSimpleServer(app);