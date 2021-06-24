<template>
  <v-container id="user-profile" fluid tag="section">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <template #heading>
          <div class="display-2 font-weight-light">Profile</div>
        </template>

        <v-form ref="form">
          <v-container class="py-0">
            <v-row>
              <v-col cols="12" md="12">
                <v-text-field
                  class="text-center"
                  :value="sub"
                  label="Id"
                  :readonly="subReadonly"
                  required
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="profile.name"
                  label="Username"
                  :disabled="!isEdit"
                  :rules="[rules.required, rules.usernameCounter]"
                  counter="20"
                  required
                />
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field
                  v-model="profile.email"
                  label="Email"
                  :disabled="!isEdit"
                  :rules="[rules.required, rules.email]"
                  required
                />
              </v-col>
              <v-col cols="12">
                <section v-if="!isEdit">
                  <div class="d-flex justify-space-between">
                    <div class="d-flex flex-column">
                      <v-btn color="blue darken-2" class="mr-1 mb-5">
                        Request your account information
                      </v-btn>
                      <v-btn color="red darken-2" class="mr-1">
                        Delete all account data
                      </v-btn>
                    </div>
                    <div>
                      <v-btn color="success" @click="toggleEdit">
                        Request changes
                      </v-btn>
                    </div>
                  </div>
                </section>
                <section v-else class="text-right">
                  <v-btn
                    color="error"
                    class="mr-5"
                    @click="cancelUpdateProfile"
                  >
                    Cancel
                  </v-btn>
                  <v-btn color="success" class="mr-0" @click="updateProfile">
                    Confirm changes
                  </v-btn>
                </section>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      subReadonly: true,
      isEdit: false,
      sub: '',
      profile: {
        name: '',
        email: '',
      },
      rules: {
        required: (value) => !!value || 'Required',
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || 'Invalid e-mail.';
        },
        usernameCounter: (value) => value.length <= 20 || 'Max 20 characters',
      },
    };
  },
  mounted() {
    this.getUserInfo();
  },
  methods: {
    async getUserInfo() {
      const user = await this.$auth.user;
      this.sub = user.sub;
      this.profile.name = user.name;
      this.profile.email = user.email;
    },
    toggleEdit() {
      this._beforeEditingCache = Object.assign({}, this.profile);
      this.isEdit = true;
    },
    async updateProfile() {
      const valid = this.$refs.form.validate();
      if (valid) {
        await this.$axios
          .$put('/api/account/update', {
            Id: this.sub,
            userName: this.profile.name,
            email: this.profile.email,
          })
          .then(() => {
            this._beforeEditingCache = null;
            this.isEdit = false;
          })
          .catch(() => {
            this.cancelUpdateProfile();
          });
        this.$auth.fetchUser();
      }
    },
    cancelUpdateProfile() {
      Object.assign(this.profile, this._beforeEditingCache);
      this._beforeEditingCache = null;
      this.isEdit = false;
    },
  },
};
</script>
