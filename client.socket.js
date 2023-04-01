const io = require("socket.io-client");
//First Connect to the Server on the Specific URL (HOST:PORT)
let socket = io("http://localhost:3000", {extraHeaders: {
   "authorization": "Bearer token"
 }});
//Now Listen for Events (welcome event).

socket.emit('events', { name: 'DJ' }, (data) => console.log(data));

socket.on("data", (data) => {
   console.log("Message: ", data);
});
