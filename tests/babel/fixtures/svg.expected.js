var _path,
    _svg,
    _svg2,
    _div,
    _appendChild = require('nanohtml/lib/append-child'),
    _svgNamespace = 'http://www.w3.org/2000/svg';

const svg = (_svg = document.createElementNS(_svgNamespace, 'svg'), _svg.setAttribute('viewBox', '0 14 32 18'), _appendChild(_svg, ['\n    ', (_path = document.createElementNS(_svgNamespace, 'path'), _path.setAttribute('d', 'M2 14 V18 H6 V14z'), _path), '\n  ']), _svg);

const htmlAndSvg = (_div = document.createElement('div'), _appendChild(_div, ['\n    ', (_svg2 = document.createElementNS(_svgNamespace, 'svg'), _appendChild(_svg2, ['\n  ']), _svg2), '\n']), _div);