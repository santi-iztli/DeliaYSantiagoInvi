
function alerta() {
  Swal.fire({
    imageUrl: './img/invitacion.gif',
    imageWidth: 150,
    imageHeight: 150,
    text: 'Delia y Santiago 🎉',
    title: 'Has sido invitado a la boda de:',
    confirmButtonText: 'Abrir',
    color: '#000',
    background: '#ffffffb3',
    backdrop: 'rgba(0,0,0,0.7)',
    showClass: {
      popup: 'animate__animated animate__backInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__bounceOut'
    },
    footer: 'Invitacion para 2 personas'


  });
}
alerta();