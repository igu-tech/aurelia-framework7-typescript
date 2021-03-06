import { bindable, customElement, containerless } from 'aurelia-framework';
import { inlineView } from 'aurelia-templating';

@containerless
@customElement('f7-list')
@inlineView(`
<template>
<div class="\${classes}">
    <ul>
        <slot></slot>
    </ul>
</div>
</template>
`)
export class F7List {
    @bindable accordion: boolean = false;
    
    constructor() {
    }

    get classes(): string {
        var output = 'list-block';
        if (this.accordion !== false) {
            output += ' accordion-list';
        }
        return output;
    }
}
