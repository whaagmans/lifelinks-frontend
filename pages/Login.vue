<template>
  <div class="register">
    <v-container class="fill-height my-12" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" xs="12" sm="10" md="8" lg="8" xl="5">
          <v-card elevation="6">
            <v-layout cols="12">
              <v-flex>
                <v-btn
                  id="btnSignIn"
                  block
                  text
                  x-large
                  class="title primary white--text text-center btn-sign-in"
                  :class="{ 'darken-2': SignIn }"
                  :ripple="{ center: true }"
                  @click="SelectSignIn"
                  >Sign In</v-btn
                >
              </v-flex>
              <v-flex>
                <v-btn
                  id="btnRegister"
                  block
                  text
                  x-large
                  class="title primary white--text text-center btn-register"
                  :class="{ 'darken-2': !SignIn }"
                  :ripple="{ center: true }"
                  @click="SelectRegister"
                  >Register</v-btn
                >
              </v-flex>
            </v-layout>
            <v-expand-transition>
              <v-card-text class="mt-12">
                <v-expand-transition leave-absolute>
                  <LazyFormSign v-show="SignIn" />
                </v-expand-transition>
                <v-expand-transition leave-absolute>
                  <LazyFormRegister
                    v-show="!SignIn"
                    @accountCreated="SelectSignIn"
                  />
                </v-expand-transition>
              </v-card-text>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
      <v-snackbar v-model="snackbar" :timeout="30000" top color="success">
        <span>Account Created</span>
        <v-btn text color="white" @click="snackbar = false">Close</v-btn>
      </v-snackbar>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    SignIn: true,
    snackbar: false,
  }),
  methods: {
    SelectSignIn() {
      if (this.SignIn !== true) {
        this.SignIn = true;
      }
    },
    SelectRegister() {
      if (this.SignIn !== false) {
        this.SignIn = false;
      }
    },
  },
};
</script>

<style>
.btn-sign-in {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.btn-register {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
</style>
