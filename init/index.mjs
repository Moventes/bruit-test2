


export function start(brtCoreConfig) {

  var modal = doc.getElementsByTagName('bruit-core');
  if (modal.length <= 0) {
    var bruitCore = doc.createElement('bruit-core');
    if (brtCoreConfig) {
      bruitCore['config'] = brtCoreConfig;
    }
    doc.body.appendChild(bruitCore);
  }

}

export * from '../loader/index';

