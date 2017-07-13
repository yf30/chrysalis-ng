import { Component, Input, ContentChild, AfterContentInit } from '@angular/core';
import { TabContentDirective } from './tab-content.directive';
import { TabTitleDirective } from './tab-title.directive';

@Component({
  selector: 'ch-tab',
  template: ''
})
export class ChTabComponent implements AfterContentInit {
  @Input() id: string;
  @Input() title: string;
  @Input() disabled: boolean | string = false;
  @ContentChild(TabContentDirective) contentTpl: TabContentDirective;
  @ContentChild(TabTitleDirective) titleTpl: TabTitleDirective;
  constructor() {
  }

  ngAfterContentInit() {
  }
}
