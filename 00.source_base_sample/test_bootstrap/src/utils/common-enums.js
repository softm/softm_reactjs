/**
 * Enums
 * @author F1215(Thomas.Jeong)
 */
const CommonEnums = {
  KIOSK_STATUS: {
    Welcome: 'Welcome',
    PinNumber: 'PinNumber',
    IDCard: 'IDCard',
    Biometric: 'Biometric',
    BarcodeScan: 'BarcodeScan',
    DriverCapture: 'DriverCapture',
    AuthDone: 'AuthDone',
    Compliance: 'Compliance',
    MissionPrint: 'MissionPrint',
    EIRPrint: 'EIRPrint',
    Complete: 'Complete',
    BarrierOpen: 'BarrierOpen',
    KioskDone: 'KioskDone',
  },
  WORKING_STATUS: {
    Idle: 'Idle',
    Working: 'Working',
    Exception: 'Exception',
    TruckArrived: 'TruckArrived',
    LPDetected: 'LPDetected',
    PreIngate: 'PreIngate',
    InGate: 'InGate',
    GateDone: 'GateDone',
    PreOutgate: 'PreOutgate',
    Outgate: 'Outgate',
  },
  CAMERA_POSITION: {
    Truck: 'Truck',
    Rear: 'Rear',
    Top: 'Top',
    Left: 'Left',
    Right: 'Right',
  },
  LANE_TYPE: {
    I: 'I',
    O: 'O',
    E: 'E',
  },
  LANE_STATUS: {
    O: 'O',
    C: 'C',
  },
  ERROR_RESOLVE_TYPE: {
    NONE: 'NONE',
    CONNECTION: 'CONNECTION',
    CORRECTION: 'CORRECTION',
    INSPECTION: 'INSPECTION',
  },
  ERROR_DISPLAY: {
    NONE: 'NONE',
    LP: 'LP',
    CONTAINER: 'CONTAINER',
  },
  ROLE_TYPE: {
    ADMIN: 'GOS_ADMIN',
    SUPERVISOR: 'GOS_SUPERVISOR',
    OPERATOR: 'GOS_OPERATOR',
    displayName: (type) => {
      switch (type) {
        case CommonEnums.ROLE_TYPE.ADMIN: return 'Admin';
        case CommonEnums.ROLE_TYPE.SUPERVISOR: return 'Supervisor';
        case CommonEnums.ROLE_TYPE.OPERATOR: return 'Operator';
        default:
          return '';
      }
    },
  },
};
export default CommonEnums;
