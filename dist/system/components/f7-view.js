System.register(["aurelia-framework", "aurelia-templating", "aurelia-event-aggregator"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_framework_1, aurelia_templating_1, aurelia_framework_2, aurelia_event_aggregator_1, F7View;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
                aurelia_framework_2 = aurelia_framework_1_1;
            },
            function (aurelia_templating_1_1) {
                aurelia_templating_1 = aurelia_templating_1_1;
            },
            function (aurelia_event_aggregator_1_1) {
                aurelia_event_aggregator_1 = aurelia_event_aggregator_1_1;
            }
        ],
        execute: function () {
            F7View = /** @class */ (function () {
                function F7View(EventAggregator, taskQueue) {
                    this.taskQueue = taskQueue;
                    this.name = '';
                    this.isMainView = false; //todo: this is coming as a string see this issue:
                    this.ea = EventAggregator;
                }
                F7View.prototype.attached = function () {
                    var _this = this;
                    if (this.isMainView !== false) {
                        this.name = 'view-main';
                        this.taskQueue.queueMicroTask(function () {
                            _this.ea.publish('view-main-attached');
                        });
                    }
                };
                __decorate([
                    aurelia_framework_1.bindable
                ], F7View.prototype, "name", void 0);
                __decorate([
                    aurelia_framework_1.bindable
                ], F7View.prototype, "isMainView", void 0);
                F7View = __decorate([
                    aurelia_framework_1.containerless,
                    aurelia_framework_1.customElement('f7-view'),
                    aurelia_templating_1.inlineView("\n<template>\n<div class=\"view ${name}\">\n    <slot></slot>\n</div>\n</template>\n"),
                    aurelia_framework_2.inject(aurelia_event_aggregator_1.EventAggregator, aurelia_framework_1.TaskQueue)
                ], F7View);
                return F7View;
            }());
            exports_1("F7View", F7View);
        }
    };
});
