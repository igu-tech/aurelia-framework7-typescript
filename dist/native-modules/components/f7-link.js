var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { bindable, customElement, containerless } from 'aurelia-framework';
import { inlineView } from 'aurelia-templating';
var F7Link = /** @class */ (function () {
    function F7Link() {
        this.dataPan = 'left';
        this.class = '';
        this.iconOnly = false; //todo: this is coming as a string see this issue:
        this.openPanel = 'false';
        this.back = false;
        this.href = '#';
    }
    F7Link.prototype.attached = function () {
        if (this.iconOnly !== false) {
            this.icon = ' icon-only';
        }
        if (this.openPanel !== 'false') {
            this.panel = " open-panel";
            if (this.openPanel == "right") {
                this.dataPan = "right";
                debugger;
            }
        }
        if (this.back !== false) {
            this.bck = " back";
        }
    };
    __decorate([
        bindable
    ], F7Link.prototype, "icon", void 0);
    __decorate([
        bindable
    ], F7Link.prototype, "panel", void 0);
    __decorate([
        bindable
    ], F7Link.prototype, "dataPan", void 0);
    __decorate([
        bindable
    ], F7Link.prototype, "bck", void 0);
    __decorate([
        bindable
    ], F7Link.prototype, "class", void 0);
    __decorate([
        bindable
    ], F7Link.prototype, "iconOnly", void 0);
    __decorate([
        bindable
    ], F7Link.prototype, "openPanel", void 0);
    __decorate([
        bindable
    ], F7Link.prototype, "back", void 0);
    __decorate([
        bindable
    ], F7Link.prototype, "href", void 0);
    F7Link = __decorate([
        containerless,
        customElement('f7-link'),
        inlineView("\n<template>\n<a class=\"link${panel}${icon}${bck} ${class}\" data-panel=\"${dataPan}\" href=\"${href}\">\n    <slot></slot>\n</a>\n</template>\n")
    ], F7Link);
    return F7Link;
}());
export { F7Link };
