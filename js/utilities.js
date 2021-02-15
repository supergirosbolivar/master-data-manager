
function showMessage(text, icon, timmer){
  Swal.fire({
    icon: icon,
    title: text,
    showConfirmButton: false,
    timer: timmer
  })
}

function focus(id){
  document.querySelector('#'+id).focus();
}


