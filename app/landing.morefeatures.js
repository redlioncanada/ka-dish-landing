System.register(['angular2/core', './landing.morefeatures.feature', './services/appdata.service', './services/logger.service'], function(exports_1, context_1) {
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
    var core_1, landing_morefeatures_feature_1, appdata_service_1, logger_service_1;
    var MoreFeatures;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (landing_morefeatures_feature_1_1) {
                landing_morefeatures_feature_1 = landing_morefeatures_feature_1_1;
            },
            function (appdata_service_1_1) {
                appdata_service_1 = appdata_service_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            }],
        execute: function() {
            MoreFeatures = (function () {
                function MoreFeatures(appdata, logger) {
                    this.appdata = appdata;
                    this.logger = logger;
                    this.enabled = true;
                    var data = appdata.get();
                    this.enabled = data.morefeatures.enabled;
                    this.title = data.morefeatures.title;
                    this.moreFeatures = data.morefeatures.features;
                }
                MoreFeatures = __decorate([
                    core_1.Component({
                        selector: 'more-features',
                        template: "\n    \t<div class=\"row {{!enabled ? 'hide' : ''}}\">\n\t\t\t<h2>{{title}}</h2>\n\t\t    <more-features-feature *ngFor=\"#feature of moreFeatures; #i=index\" [cta]=\"feature.cta\" [text]=\"feature.text\" [link]=\"feature.link\" [title]=\"feature.title\" [image]=\"feature.image\" [alt]=\"feature.alt\">\n\t\t    </more-features-feature>\n\t\t</div>\n    ",
                        directives: [landing_morefeatures_feature_1.MoreFeaturesFeature],
                    }), 
                    __metadata('design:paramtypes', [appdata_service_1.AppDataService, logger_service_1.LoggerService])
                ], MoreFeatures);
                return MoreFeatures;
            }());
            exports_1("MoreFeatures", MoreFeatures);
        }
    }
});
//# sourceMappingURL=landing.morefeatures.js.map