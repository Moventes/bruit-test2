import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'bruit-core',
  styleUrl: 'bruit-core.scss',
  shadow: true
})
export class BruitCore {

  @Prop({ attribute: 'brt-config' }) options;

  render() {
    return (
      <Host>
        <slot></slot>
        {JSON.stringify(this.options)}
      </Host>
    );
  }

}
