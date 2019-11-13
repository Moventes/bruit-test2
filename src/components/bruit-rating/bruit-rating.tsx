import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'bruit-rating',
  styleUrl: 'bruit-rating.scss',
  shadow: true
})
export class BruitRating {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
