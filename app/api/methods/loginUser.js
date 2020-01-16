import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function loginUser(username, password) {
  return Api(
    ApiConstants.LOGIN + '?username=' + username + '&password=' + password,
    null,
    'post',
    null,
  );
}
