const io = require("socket.io-client");
//First Connect to the Server on the Specific URL (HOST:PORT)
let socket = io("http://localhost:3000", {extraHeaders: {
   "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwiaWF0IjoxNjgwMzQ0MTEzLCJleHAiOjE2ODAzNDc3MTN9._gdaudLiYtcOWb3A7oAopody8Reh7yO6Hb9rb1G61Bc"
 }});
//Now Listen for Events (welcome event).

socket.emit('events', { name: 'DJ' }, (data) => console.log(data));

socket.on("data", (data) => {
   /*For the listener we specify the event name and we give the callback to which be called one the 
   event is emitted*/
   //Log the Welcome message 
   console.log("Message: ", data);
});
