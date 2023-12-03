const CONSTANTS = {
  LANE_TYPE: [
    { key: 'I', value: 'In Gate' },
    { key: 'O', value: 'Out Gate' },
    { key: 'E', value: 'ECO' },
  ],
  LANE_STATUS: [
    { key: 'O', value: 'OPEN' },
    { key: 'C', value: 'CLOSE' },
  ],
  TOS_TYPE: [
    { key: 'TST', value: 'Test' },
    { key: 'DEV', value: 'Development' },
    { key: 'STG', value: 'Staging' },
  ],
  DEVICE_TYPE: [
    { key: 'Printer', value: 'Printer' },
    { key: 'BarcodeScanner', value: 'BarcodeScanner' },
    { key: 'Barrier', value: 'Barrier' },
    { key: 'SignalLight', value: 'SignalLight' },
    { key: 'LoopCoilDetector', value: 'LoopCoilDetector' },
    { key: 'RFID', value: 'RFID' },
    { key: 'WebCam', value: 'WebCam' },
    { key: 'Camera', value: 'Camera' },
    { key: 'Kiosk', value: 'Kiosk' },
  ],
  POSITION: [
    { key: 'LT', value: 'Left' },
    { key: 'RT', value: 'Right' },
    { key: 'TP', value: 'Top' },
    { key: 'RE', value: 'Rear' },
    { key: 'LU', value: 'Left Upper' },
    { key: 'LL', value: 'Left Lower' },
    { key: 'RU', value: 'Right Upper' },
    { key: 'RL', value: 'Right Left' },
    { key: 'LP', value: 'License Plate' },
    { key: 'KS', value: 'Kiosk' },
    { key: 'SP', value: 'Spare' },
    { key: 'SA', value: 'Stand Alone' },
  ],
  INTERFACE_TYPE: [
    { key: 'E', value: 'Ethernet' },
    { key: 'G', value: 'Giga-bit' },
    { key: 'U', value: 'Usb' },
    { key: 'S', value: 'Serial' },
    { key: 'X', value: 'Unknown' },
  ],
  ERROR_CODE_TYPE: [
    { key: 'CM', value: 'CM' }, // Common Error
    { key: 'GS', value: 'GS' }, // (GOS System exception)
    { key: 'TS', value: 'TS' }, // (TOS System exception)
    { key: 'TM', value: 'TM' }, // (TOS Visit Mission error)
    { key: 'TV', value: 'TV' }, // (TOS Validation error)
    { key: 'AI', value: 'AI' }, // (AI Server error)
    { key: 'KS', value: 'KS' }, // (Kiosk error)
    { key: 'ETC', value: 'ETC' },
  ],
  ERROR_RESOLVE_TYPE: [
    { key: 'RECOVERY', value: 'RECOVERY' },
    { key: 'CONNECTION', value: 'CONNECTION' },
    { key: 'CORRECTION', value: 'CORRECTION' },
    { key: 'INSPECTION', value: 'INSPECTION' },
    { key: 'NONE', value: 'NONE' },
  ],
  ERROR_DISPLAY: [
    { key: 'NORMAL', value: 'NORMAL' },
    { key: 'LP', value: 'LP' },
    { key: 'CONTAINER', value: 'CONTAINER' },
  ],
  PAGE_PRE_LIMIT:20
};

module.exports = CONSTANTS;
