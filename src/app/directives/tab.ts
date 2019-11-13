import { Component, Input } from '@angular/core';

@Component({
    selector: 'tab',
    styles: [],
    template: `
    <div [hidden]="!active" class="pane">
      <ng-content></ng-content>
    </div>
  `
})

export class Tab {
    constructor(){}
    @Input('tabTitle') title: string;
    @Input() active = false;
}
