import Swal from 'sweetalert2';
import { ErrorAlertProps } from './types';

export const DEFAULT_ERROR_TITLE = 'Error';
export const DEFAULT_ERROR_MESSAGE = 'Something went wrong';
export const AUTHORIZATION_ERROR_TITLE = 'Authorization Error';

const errorAlert = (props: ErrorAlertProps): void => {
  const { title, message } = props;
  Swal.fire({
    icon: 'error',
    title,
    text: message,
  });
};

const successAlert = (props: ErrorAlertProps): void => {
  const { title, message } = props;
  Swal.fire({
    icon: 'success',
    title,
    text: message,
  });
};

const alertService = { errorAlert, successAlert };

export default alertService;