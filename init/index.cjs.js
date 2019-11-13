
module.exports = require('../loader/index.cjs');
module.exports.start = function (brtCoreConfig) {

    var modal = doc.getElementsByTagName('bruit-core');
    if (modal.length <= 0) {
        var bruitCore = doc.createElement('bruit-core');
        if (brtCoreConfig) {
            bruitCore['config'] = brtCoreConfig;
        }
        doc.body.appendChild(bruitCore);
    }

}