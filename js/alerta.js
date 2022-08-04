
function alerta() {
    Swal.fire({
        imageUrl: './img/invitacion.gif',
        imageWidth: 100,
        imageHeight: 100,
        text:'a la Boda de Delia y Santiago 😊',
        title:'Hey! Has sido invitado 🎉',
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
    });
}
alerta();