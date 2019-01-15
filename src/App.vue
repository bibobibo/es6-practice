<template>
  <main class="main">
    <section class="avatar">
      <img class="avatar__image" alt="avatar" :src="avatarLink">
    </section>

    <section class="members">
      <ul>
        <li
          v-for="member in members"
          :key="member.name"
        >{{member.name}} {{member.relationship}} {{member.status}}</li>
      </ul>
    </section>

    <div v-show="isLoading" class="loading"></div>
  </main>
</template>

<script>
import { getAvatar, getMembers } from "./service";

export default {
  name: "app",

  data() {
    return {
      avatarLink: "https://discovery-park.co.uk/wp-content/uploads/2017/06/avatar-default.png",
      members: [],
      isLoading: false
    };
  },

  mounted() {
    var self = this;

    self.showLoading();

    self.loadAavtar(
      function(avatarLink) {
        self.avatarLink = avatarLink;

        self.loadMembers(
          function(members) {
            self.members = members;

            self.hideLoading();
          },
          function(errorMessage) {
            alert(errorMessage);
          }
        );
      },
      function(errorMessage) {
        alert(errorMessage);
      }
    );
  },

  methods: {
    showLoading: function() {
      this.isLoading = true;
    },

    hideLoading: function() {
      this.isLoading = false;
    },

    loadAavtar: function(success, error) {
      getAvatar("url to get avatar", success, error);
    },

    loadMembers: function(success, error) {
      getMembers("url to get members", success, error);
    }
  }
};
</script>

<style>
ul {
  padding-left: 0;
  list-style: none;
}

.main {
  margin: 20px auto;

  text-align: center;
}

.avatar__image {
  width: 225px;
  height: 225px;
}

.loading {
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.5);
}

.loading::after {
  content: "loading content...";
  display: block;
  position: relative;
  top: 200px;
  color: white;
}
</style>
