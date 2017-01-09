var audioContext = new AudioContext();
var osc = audioContext.createOscillator();

// Source: http://chromium.googlecode.com/svn/trunk/samples/audio/wave-tables/Organ_2

var c = tables.real.length;
var real = new Float32Array(c);
var imag = new Float32Array(c);
for (var i = 0; i < c; i++) {
  real[i] = tables.real[i];
  imag[i] = tables.imag[i];
}

var hornTable = audioContext.createPeriodicWave(real, imag);


function toggle() {     $("button").toggle();
}

function play() {
  osc = audioContext.createOscillator();
  osc.setPeriodicWave(hornTable);    			
  osc.frequency.value = 220;
  osc.connect(audioContext.destination);
  osc.start(0);
}
function stop() {
  osc.disconnect();
}


