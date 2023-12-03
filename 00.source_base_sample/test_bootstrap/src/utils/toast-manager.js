import { toast, Slide } from 'react-toastify';

const topToast = {
  position: 'top-center',
  transition: Slide,
  autoClose: 3000,
};

const sideToast = {
  position: 'top-right',
  transition: Slide,
  autoClose: false,
  closeOnClick: true,
  newestOnTop: true,
  progress: undefined,
};

const ToastManager = {
  top: {
    success: (msg) => {
      toast.success(msg, topToast);
    },
    info: (msg) => {
      toast.info(msg, topToast);
    },
    error: (msg) => {
      toast.clearWaitingQueue();      
      toast.error(msg, topToast);
    },
    warning: (msg) => {
      toast.warning(msg, topToast);
    },
    dark: (msg) => {
      toast.dark(msg, topToast);
    },
  },

  side: {
    success: (msg) => {
      toast.success(msg, sideToast);
    },
    info: (msg) => {
      toast.info(msg, sideToast);
    },
    error: (msg) => {
      toast.clearWaitingQueue();      
      toast.error(msg, sideToast);
    },
    warning: (msg) => {
      toast.warning(msg, sideToast);
    },
    dark: (msg) => {
      toast.dark(msg, sideToast);
    },
  },
};

export default ToastManager;
