"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var aurelia_templating_1 = require("aurelia-templating");
var F7PageContent = /** @class */ (function () {
    function F7PageContent() {
    }
    F7PageContent = __decorate([
        aurelia_framework_1.containerless,
        aurelia_framework_1.customElement('f7-page-content'),
        aurelia_templating_1.inlineView("\n<template>\n    <div class=\"page-content\">\n        <slot></slot>\n    </div> \n</template>\n")
    ], F7PageContent);
    return F7PageContent;
}());
exports.F7PageContent = F7PageContent;
