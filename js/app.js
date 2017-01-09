var audioContext = new AudioContext();
var osc = audioContext.createOscillator();

var real = new Float32Array([0,0.4,0.4,1,1,1,0.3,0.7,0.6,0.5,0.9,0.8]);
var imag = new Float32Array(real.length);
var hornTable = audioContext.createPeriodicWave(real, imag);

function toggle() {     $("button").toggle();
                  }
function play() {
  osc = audioContext.createOscillator();
  osc.setPeriodicWave(hornTable);               
  osc.frequency.value = 160;
  osc.connect(audioContext.destination);
  osc.start(0);
}
function stop() {
  osc.disconnect();
}