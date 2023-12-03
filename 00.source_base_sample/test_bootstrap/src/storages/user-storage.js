const Storage = sessionStorage;

const UserStorage = {
  setUser: ({
    account = '', token = '', email = '', roleType = '', locale = '', currentDataScope = '', appCode = ''
  }) => {
    Storage.setItem('account', account || '');
    Storage.setItem('token', token || '');
    Storage.setItem('email', email || '');
    Storage.setItem('roleType', roleType || '');
    Storage.setItem('locale', locale || '');
    Storage.setItem('currentDataScope', currentDataScope || '');
    Storage.setItem('appCode', appCode || '');
  },
  getUser: () => ({
    account: Storage.getItem('account') || '',
    token: Storage.getItem('token') || '',
    email: Storage.getItem('email') || '',
    roleType: Storage.getItem('roleType') || '',
    locale: Storage.getItem('locale') || '',
    currentDataScope: Storage.getItem('currentDataScope') || '',
    appCode: Storage.getItem('appCode') || '',
    userRolesClaims: Storage.getItem('userRolesClaims') || '',
  }),
  clearUser: () => {
    Storage.setItem('account', '');
    Storage.setItem('token', '');
    Storage.setItem('email', '');
    Storage.setItem('roleType', '');
    Storage.setItem('locale', '');
    Storage.setItem('currentDataScope', '');
    Storage.setItem('appCode', '');
    Storage.setItem('userRolesClaims', '');
  },
  setClaims: (claims) => {
    Storage.setItem('claims', JSON.stringify(claims));
  },
  setUserRolesClaims: (userRolesClaims) => {
    Storage.setItem('userRolesClaims', JSON.stringify(userRolesClaims));
  },
  setToken: (token) => {
    Storage.setItem('token', token || '');
  },
  getToken: () => Storage.getItem('token')
};

export default UserStorage;
