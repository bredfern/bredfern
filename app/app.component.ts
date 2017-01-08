import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'templates/app.component.html'
})

export class AppComponent implements OnInit  {
    private audioContext: AudioContext;
    
    private snareBuffer: AudioBuffer;
    private kickBuffer: AudioBuffer;
    private openhhBuffer: AudioBuffer;
    private closedhhBuffer: AudioBuffer;
    
    private loadingSnare: boolean = false;
    private loadingKick: boolean = false;
    private loadingOpenhh: boolean = false;
    private loadingClosedhh: boolean = false;
    
    private snarePlaybackRate: number = 1.0;
    private snareGain: number = 1.0;
    
    private kickPlaybackRate: number = 1.0;
    private kickGain: number = 1.0;
    
    private openhhPlaybackRate: number = 1.0;
    private openhhGain: number = 1.0;
    
    private closedhhPlaybackRate: number = 1.0;
    private closedhhGain: number = 1.0;
    
    ngOnInit() {
        this.audioContext = new AudioContext();
        
        this.loadingSnare = true;
        this.loadingKick = true;
        this.loadingOpenhh = true;
        this.loadingClosedhh = true;
        
        this.fetchSnare().then(audioBuffer => {
            this.loadingSnare = false;
            this.snareBuffer = audioBuffer;
        })
        .catch(error => throw error);
        
        this.fetchKick().then(audioBuffer => {
            this.loadingKick = false;
            this.kickBuffer = audioBuffer;
        })
        .catch(error => throw error);
        
        this.fetchOpenhh().then(audioBuffer => {
            this.loadingOpenhh = false;
            this.openhhBuffer = audioBuffer;
        })
        .catch(error => throw error);
        
        this.fetchClosedhh().then(audioBuffer => {
            this.loadingClosedhh = false;
            this.closedhhBuffer = audioBuffer;
        })
        .catch(error => throw error);
    }
    
    fetchSnare(): Promise<AudioBuffer> {
        credentials: 'include'
        return fetch('samples/snare.wav')
        .then(response => response.arrayBuffer())
        .then(buffer => {
            return new Promise((resolve, reject) => {
                this.audioContext.decodeAudioData(
                    buffer,
                    resolve,
                    reject
                );
            })
        });
    }
    
    fetchKick(): Promise<AudioBuffer> {
        credentials: 'include'
        return fetch('samples/kick.wav')
        .then(response => response.arrayBuffer())
        .then(buffer => {
            return new Promise((resolve, reject) => {
                this.audioContext.decodeAudioData(
                    buffer,
                    resolve,
                    reject
                );
            })
        });
    }
    
    fetchOpenhh(): Promise<AudioBuffer> {
        credentials: 'include'
        return fetch('samples/openhh.wav')
        .then(response => response.arrayBuffer())
        .then(buffer => {
            return new Promise((resolve, reject) => {
                this.audioContext.decodeAudioData(
                    buffer,
                    resolve,
                    reject
                );
            })
        });
    }
    
    fetchClosedhh(): Promise<AudioBuffer> {
        credentials: 'include'
        return fetch('samples/closedhh.wav')
        .then(response => response.arrayBuffer())
        .then(buffer => {
            return new Promise((resolve, reject) => {
                this.audioContext.decodeAudioData(
                    buffer,
                    resolve,
                    reject
                );
            })
        });
    }
    
    playSnare() {
        let bufferSource = this.audioContext.createBufferSource();
        bufferSource.buffer = this.snareBuffer;
        bufferSource.playbackRate.value = this.snarePlaybackRate;
        let gainNode = this.audioContext.createGain();
        gainNode.gain.value = this.snareGain;
        bufferSource.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        bufferSource.start(0);
    }
    
    playKick() {
        let bufferSource = this.audioContext.createBufferSource();
        bufferSource.buffer = this.kickBuffer;
        bufferSource.playbackRate.value = this.kickPlaybackRate;
        let gainNode = this.audioContext.createGain();
        gainNode.gain.value = this.kickGain;
        bufferSource.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        bufferSource.start(0);
    }
    
    playClosedhh() {
        let bufferSource = this.audioContext.createBufferSource();
        bufferSource.buffer = this.closedhhBuffer;
        bufferSource.playbackRate.value = this.closedhhPlaybackRate;
        let gainNode = this.audioContext.createGain();
        gainNode.gain.value = this.closedhhGain;
        bufferSource.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        bufferSource.start(0);
    }
    
    playOpenhh() {
        let bufferSource = this.audioContext.createBufferSource();
        bufferSource.buffer = this.openhhBuffer;
        bufferSource.playbackRate.value = this.openhhPlaybackRate;
        let gainNode = this.audioContext.createGain();
        gainNode.gain.value = this.openhhGain;
        bufferSource.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        bufferSource.start(0);
    }
    
    onSnareClick() {
        this.playSnare();
    }
    
    onKickClick() {
        this.playKick();
    }
    
    onClosedhhClick() {
        this.playClosedhh();
    }
    
    onOpenhhClick() {
        this.playOpenhh();
    }
}

