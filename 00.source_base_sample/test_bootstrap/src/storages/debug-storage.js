const LocalStorage = localStorage;

const DebugStorage = {
  init: (group) => {
    LocalStorage.setItem('debug', group);
  },
};

export default DebugStorage;
