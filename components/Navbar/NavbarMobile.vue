<template>
  <nav>
    <v-app-bar flat bottom app>
      <MessagePopupMobile />
      <v-flex>
        <v-btn x-large block text color="primary" class="darken-1">
          <v-icon>mdi-home</v-icon>
        </v-btn>
      </v-flex>
      <v-divider vertical class="mx-2"></v-divider>
      <v-flex>
        <v-btn x-large block text color="primary" class="darken-3">
          <v-icon>mdi-account-multiple</v-icon>
        </v-btn>
      </v-flex>
      <v-divider vertical class="mx-2"></v-divider>
      <v-flex>
        <v-btn x-large block text color="primary" class="darken-3">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-flex>
      <v-divider vertical class="mx-2"></v-divider>
      <v-flex>
        <v-btn x-large block text color="primary" class="darken-3">
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </v-flex>
      <v-divider vertical class="mx-2"></v-divider>
      <v-flex>
        <v-btn x-large block text color="primary" class="darken-3">
          <v-icon>mdi-cogs</v-icon>
        </v-btn>
      </v-flex>
    </v-app-bar>
  </nav>
</template>

<script>
import MessagePopupMobile from '@/components/Popup/MessagePopupMobile.vue';
export default {
  components: {
    MessagePopupMobile,
  },
};
</script>
