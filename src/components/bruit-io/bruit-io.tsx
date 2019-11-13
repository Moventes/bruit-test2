import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'bruit-io',
  styleUrl: 'bruit-io.scss',
  shadow: true
})
export class BruitIo {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
