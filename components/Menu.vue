<template>
  <div>
    <v-container>
      <v-flex>
        <v-row class="my-5">
          <PopupMessagePopup @MessagePosted="snackbar = true" />
        </v-row>
        <v-row class="mb-5">
          <v-btn x-large color="primary" class="darken-1" :min-width="btnWidth"
            ><v-icon left>mdi-account-multiple</v-icon
            ><span>Friends</span></v-btn
          >
        </v-row>
      </v-flex>
    </v-container>
    <v-snackbar v-model="snackbar" :timeout="10000" top color="success">
      <v-flex>
        <v-row justify="space-around">
          <span class="text--primary text-body-1 mt-2">Message Posted</span>
          <v-btn text color="white" @click="snackbar = false">Close</v-btn>
        </v-row>
      </v-flex>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      snackbar: false,
      btnWidth: '260px',
    };
  },
};
</script>
