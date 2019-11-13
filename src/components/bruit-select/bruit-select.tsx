import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'bruit-select',
  styleUrl: 'bruit-select.scss',
  shadow: true
})
export class BruitSelect {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
