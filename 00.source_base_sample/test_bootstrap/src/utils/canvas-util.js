import Logger from './logger';

const saveCanvasToFile = (canvas, filename) => {
  const _canvas = canvas?.current?.canvas?.drawing || canvas;
  const dataUrl = _canvas.toDataURL('image/png');
  if (dataUrl) {
    if (filename) {
      const a = document.createElement('a');
      a.href = dataUrl.replace('image/png', 'image/octet-stream');
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
    return dataUrl;
  }

  throw Error('Param canvas is neither Canvas nor CanvasDraw object.');
};

// eslint-disable-next-line import/prefer-default-export
export { saveCanvasToFile };

const Log = Logger.create('loadCanvasFromPng');
const loadCanvasFromPng = (canvas, pngBase64) => {
  const img = new Image();
  const _canvas = canvas?.current?.canvas?.drawing || canvas;
  if (_canvas) {
    try {
      const context = _canvas?.getContext('2d');
      if (context) {
        img.onload = () => {
          context.drawImage(img, 0, 0,
            _canvas.width, _canvas.height);
        };

        img.src = pngBase64;
      }
    } catch (error) {
      Log.error('error : ', error);
    }
  }
};

export { loadCanvasFromPng };


const calculateCanvasRect = (imgObject) => {
  if (!imgObject) {
    return {
      width: '100%',
      height: '100%',
      top: '0px',
      left: '0px',
    };
  }

  const nw = imgObject.naturalWidth;
  const nh = imgObject.naturalHeight;
  const cw = imgObject.clientWidth;
  const ch = imgObject.clientHeight;

  const nr = nw / nh;
  const cr = cw / ch;
  const r = nr / cr;

  Log.debug(`${nr}, ${cr}, ${r} / ${nw}, ${nh} / ${cw}, ${ch}`);
  if (r < 1) {
    const dw = (ch / nh) * nw;
    const dh = (ch / nh) * nh;
    const dl = (cw - dw) / 2;
    const dt = (ch - dh) / 2;

    Log.debug(`${dw}, ${dh} / ${dl}, ${dt}`);
    return {
      height: dh,
      width: dw,
      top: dt,
      left: dl,
    };
  }
  const dw = (cw / nw) * nw;
  const dh = (cw / nw) * nh;

  const dl = (cw - dw) / 2;
  const dt = (ch - dh) / 2;
  Log.log(`${dw}, ${dh} / ${dl}, ${dt}`);

  return {
    height: dh,
    width: dw,
    top: dt,
    left: dl,
  };
};

export { calculateCanvasRect };
