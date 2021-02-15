import server from './service-config.js';
document.addEventListener('DOMContentLoaded', ()=>{
  launchParticleEffect();
  validateLogin();
}, false);

function launchParticleEffect(){
  particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
}

function validateLogin(){
  const btnLogin = document.querySelector('#btnLogin');
  btnLogin.addEventListener('click', ()=>{
    console.log('click')
    let user = document.querySelector('#user').value;
    let pw = document.querySelector('#password').value;
    if( user === '' ){
      focus('user');
      showMessage('Usuario no puede ser vacío','info',2000);
    }else if( pw === '' ){
      focus('password');
      showMessage('Contraseña no puede ser vacío','info',2000);
    }else{
      let url = `${server.route}/user/validate/${user}/${pw}`
      fetch(url) 
        .then( response => response.json() )
        .then( data =>{
          console.log(data);
        })
        .catch( err => console.warn( err ) )
    }
  })
}