<template>
  <div class="explore">
    <v-row justify="space-around">
      <Menu class="d-none d-lg-block" />
      <Explore />
      <FriendsList class="d-none d-lg-block" />
    </v-row>
  </div>
</template>

<script>
import Explore from '@/components/Explore.vue';
import FriendsList from '@/components/FriendsList.vue';
import Menu from '@/components/Menu.vue';
export default {
  components: {
    Explore,
    FriendsList,
    Menu,
  },
};
</script>

<style></style>
