System.register(['angular2/core', './landing.video-player.selector.js', './landing.video-player.player.js', './services/logger.service.js', './services/appdata.service.js'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, landing_video_player_selector_1, landing_video_player_player_1, logger_service_1, appdata_service_1;
    var VideoPlayer;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (landing_video_player_selector_1_1) {
                landing_video_player_selector_1 = landing_video_player_selector_1_1;
            },
            function (landing_video_player_player_1_1) {
                landing_video_player_player_1 = landing_video_player_player_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            },
            function (appdata_service_1_1) {
                appdata_service_1 = appdata_service_1_1;
            }],
        execute: function() {
            VideoPlayer = (function () {
                function VideoPlayer(appdata, logger) {
                    this.appdata = appdata;
                    this.logger = logger;
                    this.currentId = 0;
                    this.enabled = true;
                    var data = appdata.get();
                    this.enabled = data.videoplayer.enabled;
                    this.title = data.videoplayer.title;
                    this.videos = data.videoplayer.videos;
                }
                VideoPlayer.prototype.select = function (id) {
                    this.currentId = id;
                };
                VideoPlayer = __decorate([
                    core_1.Component({
                        selector: 'videoplayer',
                        templateUrl: '/javascript/ka-dish-landing/views/landing.video-player.view.html',
                        directives: [landing_video_player_player_1.VideoPlayerPlayer, landing_video_player_selector_1.VideoPlayerSelector]
                    }), 
                    __metadata('design:paramtypes', [appdata_service_1.AppData, logger_service_1.Logger])
                ], VideoPlayer);
                return VideoPlayer;
            }());
            exports_1("VideoPlayer", VideoPlayer);
        }
    }
});
//# sourceMappingURL=landing.video-player.js.map