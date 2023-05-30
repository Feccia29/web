function onDOMLoaded() {
    document.getElementById("time").addEventListener('mouseover', showTime);
}
document.addEventListener('DOMContentLoaded', onDOMLoaded)

function showTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    
    var message = 'Сейчас ' + hours + ' часов ' + minutes + ' минут';
    alert(message);
}
