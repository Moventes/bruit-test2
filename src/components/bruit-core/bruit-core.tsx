import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'bruit-core',
  styleUrl: 'bruit-core.css',
  shadow: true
})
export class BruitCore {

  @Prop({ attr: 'brt-config' }) options = { test: 'bof' };

  render() {
    return (
      <Host>
        <slot></slot>
        {JSON.stringify(this.options)}
      </Host>
    );
  }

}
