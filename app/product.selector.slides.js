System.register(['angular2/core', './product.selector.slide', './services/logger.service', './services/breakpoint.service'], function(exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, product_selector_slide_1, logger_service_1, breakpoint_service_1;
    var ProductSlides;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (product_selector_slide_1_1) {
                product_selector_slide_1 = product_selector_slide_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            },
            function (breakpoint_service_1_1) {
                breakpoint_service_1 = breakpoint_service_1_1;
            }],
        execute: function() {
            ProductSlides = (function () {
                function ProductSlides(elementRef, logger, breakpoint) {
                    var _this = this;
                    this.logger = logger;
                    this.breakpoint = breakpoint;
                    this.isAnimating = new core_1.EventEmitter();
                    this.elementRef = elementRef;
                    this.animating = false;
                    this.imageTop = 164;
                    this.titleTop = 170;
                    this.descTop = 238;
                    this.learnTop = 500;
                    this.breakpointChanged = this.breakpoint.event$.subscribe(function (breakpoint) { return _this.onBreakpointChange(breakpoint); });
                }
                Object.defineProperty(ProductSlides.prototype, "animating", {
                    set: function (a) {
                        if (this._animating != a) {
                            this._animating = a;
                            this.isAnimating.emit(a);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                ProductSlides.prototype.onBreakpointChange = function (evt) {
                    var target = this.selectedProduct.prodId;
                    this.playIn(this, true, target);
                };
                ProductSlides.prototype.ngAfterViewInit = function () {
                    this.rootElement = $(this.elementRef.nativeElement);
                    var target = this.selectedProduct.prodId;
                    this.playIn(this, true, target);
                };
                ProductSlides.prototype.ngOnChanges = function (changes) {
                    var self = this;
                    if ("selectedProduct" in changes && !this.animating) {
                        if ('prodId' in changes.selectedProduct.previousValue) {
                            this.playOut(changes.selectedProduct.previousValue.prodId, function () {
                                //just get it done
                                if (changes.selectedProduct.currentValue.prodId == 'panel-ready' && $('product-selector').hasClass('fr') && $(window).innerWidth() > 820) {
                                    self.descTop = 265;
                                }
                                else {
                                    self.descTop = 238;
                                }
                                self.playIn(self, false, changes.selectedProduct.currentValue.prodId);
                            });
                        }
                        else {
                            self.playIn(self, false, changes.selectedProduct.currentValue.prodId);
                        }
                    }
                };
                ProductSlides.prototype.playOut = function (target, cb) {
                    var self = this;
                    target = $(this.rootElement).find('#' + target);
                    var image = ($(target).find('.rl-ka-lndng-fridge'));
                    var title = ($(target).find('.rl-ka-lndng-fridge-title'));
                    var desc = ($(target).find('.rl-ka-lndng-fridge-desc'));
                    var learn = ($(target).find('learn-more-button'));
                    this.animating = true;
                    TweenMax.to(image, .3, { delay: 0, opacity: 0, ease: Power3.easeOut });
                    TweenMax.to(title, .3, { delay: 0, opacity: 0, ease: Power3.easeOut });
                    TweenMax.to(desc, .3, { delay: 0, opacity: 0, ease: Power3.easeOut });
                    TweenMax.to(learn, .3, { delay: 0, opacity: 0, ease: Power3.easeOut, onComplete: function () {
                            TweenMax.to(target, 0, { delay: 0, opacity: 0 });
                            cb();
                        } });
                };
                ProductSlides.prototype.playIn = function (self, delay, target) {
                    if (delay === void 0) { delay = true; }
                    if (!self)
                        self = this;
                    target = $(self.rootElement).find('#' + target);
                    $(self.rootElement).find('product-slide').css('zIndex', 1);
                    $(target).parent().css('zIndex', 2);
                    var image = ($(target).find('.rl-ka-lndng-fridge'));
                    var title = ($(target).find('.rl-ka-lndng-fridge-title'));
                    var desc = ($(target).find('.rl-ka-lndng-fridge-desc'));
                    var learn = ($(target).find('learn-more-button'));
                    var isMobile = $(window).innerWidth() <= 820;
                    if (isMobile) {
                        TweenMax.to(image, 0, { delay: 0, top: -20 });
                        TweenMax.to(title, 0, { delay: 0, top: -20 });
                        TweenMax.to(desc, 0, { delay: 0, top: -20 });
                        TweenMax.to(learn, 0, { delay: 0, top: -20 });
                    }
                    else {
                        TweenMax.to(image, 0, { delay: 0, top: this.imageTop - 20 });
                        TweenMax.to(title, 0, { delay: 0, top: this.titleTop - 20 });
                        TweenMax.to(desc, 0, { delay: 0, top: this.descTop - 20 });
                        TweenMax.to(learn, 0, { delay: 0, top: this.learnTop - 20 });
                    }
                    TweenMax.to(target, 0, { delay: 0.1, opacity: 1 });
                    if (delay) {
                        if (isMobile) {
                            TweenMax.to(image, 1.5, { delay: .6, top: 0, opacity: 1, ease: Power1.easeOut });
                            TweenMax.to(title, 1.5, { delay: .9, top: 0, opacity: 1, ease: Power1.easeOut });
                            TweenMax.to(desc, 1.5, { delay: 1.2, top: 0, opacity: 1, ease: Power1.easeOut });
                            TweenMax.to(learn, 1.5, {
                                delay: 1.2, top: 0, opacity: 1, ease: Power1.easeOut, onComplete: function () {
                                    self.animating = false;
                                }
                            });
                        }
                        else {
                            TweenMax.to(image, 1.5, { delay: .6, top: this.imageTop, opacity: 1, ease: Power1.easeOut });
                            TweenMax.to(title, 1.5, { delay: .9, top: this.titleTop, opacity: 1, ease: Power1.easeOut });
                            TweenMax.to(desc, 1.5, { delay: 1.2, top: this.descTop, opacity: 1, ease: Power1.easeOut });
                            TweenMax.to(learn, 1.5, {
                                delay: 1.2, top: this.learnTop, opacity: 1, ease: Power1.easeOut, onComplete: function () {
                                    self.animating = false;
                                }
                            });
                        }
                    }
                    else {
                        if (isMobile) {
                            TweenMax.to(image, 1.5, { delay: .5, top: 0, opacity: 1, ease: Power1.easeOut });
                            TweenMax.to(title, 1.5, { delay: 0.7, top: 0, opacity: 1, ease: Power1.easeOut });
                            TweenMax.to(desc, 1.5, { delay: 0.9, top: 0, opacity: 1, ease: Power1.easeOut });
                            TweenMax.to(learn, 1.5, {
                                delay: 0.9, top: 0, opacity: 1, ease: Power1.easeOut, onComplete: function () {
                                    self.animating = false;
                                }
                            });
                        }
                        else {
                            TweenMax.to(image, 1.5, { delay: .6, top: this.imageTop, opacity: 1, ease: Power1.easeOut });
                            TweenMax.to(title, 1.5, { delay: .9, top: this.titleTop, opacity: 1, ease: Power1.easeOut });
                            TweenMax.to(desc, 1.5, { delay: 1.2, top: this.descTop, opacity: 1, ease: Power1.easeOut });
                            TweenMax.to(learn, 1.5, {
                                delay: 1.2, top: this.learnTop, opacity: 1, ease: Power1.easeOut, onComplete: function () {
                                    self.animating = false;
                                }
                            });
                        }
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ProductSlides.prototype, "products", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ProductSlides.prototype, "selectedProduct", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], ProductSlides.prototype, "isAnimating", void 0);
                ProductSlides = __decorate([
                    core_1.Component({
                        selector: 'product-slides',
                        template: "\n      <div class=\"row\">\n          <product-slide class=\"{{selectedProduct.prodId == product.prodId ? 'selected' : ''}}\" *ngFor=\"#product of products; #i=index\" [selected]=\"selectedProduct.prodId == product.prodId\" [fridge]= \"product.prodImage\" [fridgeTitle]= \"product.prodName\" [fridgeDescription]=\"product.prodDescription\" [fridgeUrl]=\"product.prodUrl\" [fridgeAlt]=\"product.prodAlt\" [fridgeId]=\"product.prodId\" [ctaText]=\"product.ctaText\" [analytics]=\"product.analytics\">\n\n          </product-slide>\n      </div>\n    ",
                        directives: [product_selector_slide_1.ProductSlide]
                    }),
                    __param(0, core_1.Inject(core_1.ElementRef)), 
                    __metadata('design:paramtypes', [core_1.ElementRef, logger_service_1.LoggerService, breakpoint_service_1.BreakpointService])
                ], ProductSlides);
                return ProductSlides;
            }());
            exports_1("ProductSlides", ProductSlides);
        }
    }
});
//# sourceMappingURL=product.selector.slides.js.map