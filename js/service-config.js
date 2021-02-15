function server(){
  let ip = 'localhost';
  let port = '8080';
  let origin = 'http://'+ip+':'+port;
  let data = {
    ip           : ip,
    port         : port,
    origin       : origin,
    route        : origin + '/ApiRestMDM/webresources/ar.services.servicesSources'
  }
  return data;
}

export default server();