var http = require('http')

http.createServer(function(req,res){
    res.end('Server OK!')
}).listen(3001)

console.log('Server OK!')