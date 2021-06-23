<template>
  <v-dialog v-model="newMessageDialog" max-width="600px">
    <template #activator="{ on }">
      <v-btn
        id="btnMessagePostCreate"
        color="primary"
        class="darken-1"
        width="260px"
        x-large
        :ripple="{ center: true }"
        v-on="on"
      >
        <v-icon left>mdi-pencil</v-icon>
        <span>What's on your mind?</span>
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="text-h4 text-uppercase font-weight-light title">
        <span class="primary--text">Life</span>
        <span class="text--primary">Links</span>
      </v-card-title>
      <v-card-text>
        <v-form ref="messageForm" class="px-3">
          <v-textarea
            id="newPostTextArea"
            v-model="content"
            label="What's on your mind?"
            outlined
            clearable
            auto-grow
            autofocus
            counter="160"
            :rules="inputRules"
            maxlength="160"
          ></v-textarea>
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" outlined @click="submit()">Post</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
const jwt = require('jsonwebtoken');
export default {
  data() {
    return {
      newMessageDialog: false,
      content: '',
      inputRules: [
        (v) => !!v || "Message can't be empty",
        // (v) => v.length <= 160 || 'Maximum length is 160 characters',
      ],
    };
  },
  methods: {
    submit() {
      if (this.$refs.messageForm.validate()) {
        const extractedToken = this.$auth.strategy.token
          .get('identityServer')
          .split(' ');
        const token = jwt.decode(extractedToken[1]);
        this.$axios
          .$post('/api/post', {
            userId: token.sub,
            username: token.preferred_username,
            postContent: this.content,
          })
          .then(() => {
            this.$emit('MessagePosted');
            this.newMessageDialog = false;
          });
        this.$refs.messageForm.reset();
      }
    },
  },
};
</script>
