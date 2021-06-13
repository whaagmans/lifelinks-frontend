export function createFormData(username, password) {
  const formdata = new FormData();
  formdata.append('username', username);
  formdata.append('password', password);
  formdata.append('grant_type', 'password');
  formdata.append('scope', 'apigateway');
  formdata.append('client_id', 'ro.vue');
  formdata.append('client_secret', 'secret');
  return formdata;
}
