import querystring from 'querystring';
import axios from 'axios';
import { LocalScheme } from '~auth/runtime';

export default class IdentityServerScheme extends LocalScheme {
  async login(data) {
    await axios
      .post(this.options.endpoints.login.url, {
        username: data.username,
        password: data.password,
        rememberLogin: data.rememberLogin,
      })
      .catch((err) => {
        this.$auth.callOnError(err, { method: 'login' });
        return err;
      });

    await axios
      .post(
        this.options.endpoints.token.url,
        querystring.stringify({
          username: data.username,
          password: data.password,
          grant_type: 'password',
          client_id: 'ro.vue',
          client_secret: 'lifelinksidentitysecret',
        })
      )
      .then((response) =>
        this.$auth.strategy.token.set(response.data.access_token)
      );

    this.fetchUser();
  }

  fetchUser() {
    if (!this.check().valid) {
      return;
    }
    return this.$auth
      .requestWith(this.name, this.options.endpoints.user)
      .then((response) => {
        const user = response.data;
        const customUser = {
          ...user,
          roles: ['user'],
        };
        this.$auth.setUser(customUser);
        return response;
      })
      .catch((err) => {
        this.$auth.callOnError(err, { method: 'fetchUser' });
      });
  }
}
