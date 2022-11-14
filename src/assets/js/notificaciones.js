const notificarBtn = document.querySelector('#notificar');

function showNotification(){
    const notification = new Notification("Hi there!", {body: "Mensaje 2 de prueba "});
}

notificarBtn.addEventListener('click', () => {
    Notification.requestPermission().then(resultado => {
        console.log('Respuesta: ', resultado);
    })
})

const verNoti = document.querySelector('#verNoti');

verNoti.addEventListener('click', () => {
    if(Notification.permission === 'granted') {
        showNotification();
        new Notification('Esta es la notificacion');
        console.log('Mensaje')
    }
})
