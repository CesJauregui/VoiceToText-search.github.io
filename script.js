/*const btnStart = document.getElementById("btnStart");
const btnStop = document.getElementById("btnStop");
const textArea = document.getElementById("textarea");

const recognition = new webkitSpeechRecognition();

recognition.continues = true;
recognition.lang = "es-ES";
recognition.interimResults = false;

btnStart.addEventListener('click', () =>{
    recognition.start();
})

btnStop.addEventListener('click', () =>{
    recognition.abort();
})

recognition.onresult = (event) =>{
    const texto = event.results[event.results.length -1][0].transcript;
    console.log(texto);
    textArea.value = texto;
    leerTexto(texto);
}

function leerTexto(text){
    const speech = new SpeechSynthesisUtterance(text);
    speech.volume = 1;
    speech.rate = 0.5;
    speech.pitch = 0.4;
    speech.lang = 'es-ES';

    window.speechSynthesis.speak(speech);
}
*/
var recognition = new webkitSpeechRecognition();
  recognition.onresult = function(event) {
    if (event.results.length > 0) {
      q.value = event.results[0][0].transcript;
      q.form.submit();
    }
  }