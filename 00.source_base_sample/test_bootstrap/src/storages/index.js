import UserStorage from './user-storage';
import UIStorage from './ui-storage';
import DebugStorage from './debug-storage';

const StorageManager = {
  UI: UIStorage,
  User: UserStorage,
  Debug: DebugStorage,
};

export default StorageManager;
