System.register(['angular2/core', './services/appdata.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, appdata_service_1;
    var ProductSelectorNav;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (appdata_service_1_1) {
                appdata_service_1 = appdata_service_1_1;
            }],
        execute: function() {
            ProductSelectorNav = (function () {
                function ProductSelectorNav(appdata) {
                    this.appdata = appdata;
                    this.productSelected = new core_1.EventEmitter();
                    this.enabled = true;
                    var data = appdata.get();
                    this.enabled = data.productselector.enabled;
                    this.ctaText = data.productselector.nav.text;
                    this.ctaLink = data.productselector.nav.link;
                }
                ProductSelectorNav.prototype.select = function (product) {
                    this.productSelected.emit(product);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ProductSelectorNav.prototype, "products", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ProductSelectorNav.prototype, "selectedProduct", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], ProductSelectorNav.prototype, "productSelected", void 0);
                ProductSelectorNav = __decorate([
                    core_1.Component({
                        selector: 'product-selector-nav',
                        templateUrl: 'app/views/product.selector.nav.view.html'
                    }), 
                    __metadata('design:paramtypes', [appdata_service_1.AppData])
                ], ProductSelectorNav);
                return ProductSelectorNav;
            })();
            exports_1("ProductSelectorNav", ProductSelectorNav);
        }
    }
});
//# sourceMappingURL=product.selector.nav.js.map