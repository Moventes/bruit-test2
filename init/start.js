


(function (doc) {
    var scriptElm = doc.scripts[doc.scripts.length - 1];
    var brtCoreConfig;
    if (scriptElm.hasAttribute('data-core-config')) {
        brtCoreConfig = JSON.parse(scriptElm.getAttribute('data-core-config'));
    }
    window.addEventListener('load', function () {

        var modal = doc.getElementsByTagName('bruit-core');
        if (modal.length <= 0) {
            var bruitCore = doc.createElement('bruit-core');
            if (brtCoreConfig) {
                bruitCore.setAttribute('brt-config', JSON.stringify(brtCoreConfig));
            }
            doc.body.appendChild(bruitCore);
        }
    });
    var parts = scriptElm.src.split('/');
    parts.pop();
    parts.pop();
    parts.push('dist');
    parts.push('bruit');
    var url = parts.join('/');

    var scriptElm = doc.createElement('script');
    scriptElm.setAttribute('type', 'module');
    scriptElm.src = url + '/bruit.esm.js';
    scriptElm.setAttribute('data-stencil-namespace', 'bruit');
    doc.head.appendChild(scriptElm);

    scriptElm = doc.createElement('script');
    scriptElm.setAttribute('nomodule', '');
    scriptElm.src = url + '/bruit.js';
    scriptElm.setAttribute('data-stencil-namespace', 'bruit');
    doc.head.appendChild(scriptElm);

})(document);

