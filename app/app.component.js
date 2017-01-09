"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.loadingSnare = false;
        this.loadingKick = false;
        this.loadingOpenhh = false;
        this.loadingClosedhh = false;
        this.snarePlaybackRate = 1.0;
        this.snareGain = 1.0;
        this.kickPlaybackRate = 1.0;
        this.kickGain = 1.0;
        this.openhhPlaybackRate = 1.0;
        this.openhhGain = 1.0;
        this.closedhhPlaybackRate = 1.0;
        this.closedhhGain = 1.0;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.audioContext = new AudioContext();
        this.loadingSnare = true;
        this.loadingKick = true;
        this.loadingOpenhh = true;
        this.loadingClosedhh = true;
        this.fetchSnare().then(function (audioBuffer) {
            _this.loadingSnare = false;
            _this.snareBuffer = audioBuffer;
        })
            .catch(function (error) { throw error; });
        this.fetchKick().then(function (audioBuffer) {
            _this.loadingKick = false;
            _this.kickBuffer = audioBuffer;
        })
            .catch(function (error) { throw error; });
        this.fetchOpenhh().then(function (audioBuffer) {
            _this.loadingOpenhh = false;
            _this.openhhBuffer = audioBuffer;
        })
            .catch(function (error) { throw error; });
        this.fetchClosedhh().then(function (audioBuffer) {
            _this.loadingClosedhh = false;
            _this.closedhhBuffer = audioBuffer;
        })
            .catch(function (error) { throw error; });
    };
    AppComponent.prototype.fetchSnare = function () {
        var _this = this;
        credentials: 'include';
        return fetch('samples/snare.wav')
            .then(function (response) { return response.arrayBuffer(); })
            .then(function (buffer) {
            return new Promise(function (resolve, reject) {
                _this.audioContext.decodeAudioData(buffer, resolve, reject);
            });
        });
    };
    AppComponent.prototype.fetchKick = function () {
        var _this = this;
        credentials: 'include';
        return fetch('samples/kick.wav')
            .then(function (response) { return response.arrayBuffer(); })
            .then(function (buffer) {
            return new Promise(function (resolve, reject) {
                _this.audioContext.decodeAudioData(buffer, resolve, reject);
            });
        });
    };
    AppComponent.prototype.fetchOpenhh = function () {
        var _this = this;
        credentials: 'include';
        return fetch('samples/openhh.wav')
            .then(function (response) { return response.arrayBuffer(); })
            .then(function (buffer) {
            return new Promise(function (resolve, reject) {
                _this.audioContext.decodeAudioData(buffer, resolve, reject);
            });
        });
    };
    AppComponent.prototype.fetchClosedhh = function () {
        var _this = this;
        credentials: 'include';
        return fetch('samples/closedhh.wav')
            .then(function (response) { return response.arrayBuffer(); })
            .then(function (buffer) {
            return new Promise(function (resolve, reject) {
                _this.audioContext.decodeAudioData(buffer, resolve, reject);
            });
        });
    };
    AppComponent.prototype.playSnare = function () {
        var bufferSource = this.audioContext.createBufferSource();
        bufferSource.buffer = this.snareBuffer;
        bufferSource.playbackRate.value = this.snarePlaybackRate;
        var gainNode = this.audioContext.createGain();
        gainNode.gain.value = this.snareGain;
        bufferSource.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        bufferSource.start(0);
    };
    AppComponent.prototype.playKick = function () {
        var bufferSource = this.audioContext.createBufferSource();
        bufferSource.buffer = this.kickBuffer;
        bufferSource.playbackRate.value = this.kickPlaybackRate;
        var gainNode = this.audioContext.createGain();
        gainNode.gain.value = this.kickGain;
        bufferSource.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        bufferSource.start(0);
    };
    AppComponent.prototype.playClosedhh = function () {
        var bufferSource = this.audioContext.createBufferSource();
        bufferSource.buffer = this.closedhhBuffer;
        bufferSource.playbackRate.value = this.closedhhPlaybackRate;
        var gainNode = this.audioContext.createGain();
        gainNode.gain.value = this.closedhhGain;
        bufferSource.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        bufferSource.start(0);
    };
    AppComponent.prototype.playOpenhh = function () {
        var bufferSource = this.audioContext.createBufferSource();
        bufferSource.buffer = this.openhhBuffer;
        bufferSource.playbackRate.value = this.openhhPlaybackRate;
        var gainNode = this.audioContext.createGain();
        gainNode.gain.value = this.openhhGain;
        bufferSource.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        bufferSource.start(0);
    };
    AppComponent.prototype.onSnareClick = function () {
        this.playSnare();
    };
    AppComponent.prototype.onKickClick = function () {
        this.playKick();
    };
    AppComponent.prototype.onClosedhhClick = function () {
        this.playClosedhh();
    };
    AppComponent.prototype.onOpenhhClick = function () {
        this.playOpenhh();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'templates/app.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map