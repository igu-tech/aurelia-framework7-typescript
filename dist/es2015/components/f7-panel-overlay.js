var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement, containerless } from 'aurelia-framework';
import { inlineView } from 'aurelia-templating';
var F7PanelOverlay = /** @class */ (function () {
    function F7PanelOverlay() {
    }
    F7PanelOverlay = __decorate([
        containerless,
        customElement('f7-panel-overlay'),
        inlineView("\n<template>\n<div class=\"panel-overlay\">\n    <slot></slot>\n</div>\n</template>\n")
    ], F7PanelOverlay);
    return F7PanelOverlay;
}());
export { F7PanelOverlay };
