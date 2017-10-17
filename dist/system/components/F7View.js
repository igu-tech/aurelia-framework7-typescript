System.register(["aurelia-framework"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_framework_1, F7View;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            }
        ],
        execute: function () {
            F7View = /** @class */ (function () {
                function F7View() {
                    this.isMainView = false; //todo: this is coming as a string see this issue: 
                }
                Object.defineProperty(F7View.prototype, "viewName", {
                    get: function () {
                        if (this.isMainView) {
                            return 'view-main';
                        }
                        return this.name;
                    },
                    enumerable: true,
                    configurable: true
                });
                __decorate([
                    aurelia_framework_1.bindable
                ], F7View.prototype, "name", void 0);
                __decorate([
                    aurelia_framework_1.bindable
                ], F7View.prototype, "isMainView", void 0);
                F7View = __decorate([
                    aurelia_framework_1.containerless,
                    aurelia_framework_1.customElement('f7-view')
                ], F7View);
                return F7View;
            }());
            exports_1("F7View", F7View);
        }
    };
});