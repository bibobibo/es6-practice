<template>
  <main class="main">
    <section class="avatar">
      <p>家庭账户户主: {{ user.name }}</p>
      <img
        class="avatar__image"
        alt="avatar"
        :src="avatarLink"
      >
    </section>

    <section class="members">
      <ul class="member-list">
        <li
          v-for="member in groupedMembers"
          :key="member.name"
        >
          {{ member.name }} {{ member.relationship }} {{ member.status }}
        </li>
      </ul>
    </section>

    <div
      v-show="isLoading"
      class="loading"
    />
  </main>
</template>

<script>
import { getAvatar, getMembers } from './service'
import hosts from './hosts'

export default {
  name: 'App',

  data() {
    return {
      user: {
        id: 2,
        name: '王小二'
      },
      avatarLink: 'https://discovery-park.co.uk/wp-content/uploads/2017/06/avatar-default.png',
      members: [],
      isLoading: false
    }
  },

  computed: {
    groupedMembers: function() {
      //将成员按照和户主的关系分组
      const groupedByRelationship = {}
      for(let i = 0; i < this.members.length; i++) {
        const relationship = this.members[i].relationship

        if(!groupedByRelationship[relationship]) {
          groupedByRelationship[relationship] = []
        }
        
        groupedByRelationship[relationship].push(this.members[i])
      }

      //将分组后的对象重新转化为数组
      let groupedMembers = []
      const values = Object.values(groupedByRelationship)
      for(let j = 0; j < values.length; j++) {
        groupedMembers = groupedMembers.concat(values[j])
      }

      return groupedMembers
    }
  },

  mounted() {
    const self = this

    self.showLoading()

    self.loadAavtar(
      function(avatarLink) {
        self.avatarLink = avatarLink

        self.loadMembers(
          function(members) {
            self.members = members

            self.hideLoading()
          },
          function(errorMessage) {
            self.hideLoading()
            alert(errorMessage)
          }
        )
      },
      function(errorMessage) {
        self.hideLoading()
        alert(errorMessage)
      }
    )
  },

  methods: {
    showLoading: function() {
      this.isLoading = true
    },

    hideLoading: function() {
      this.isLoading = false
    },

    loadAavtar: function(success, error) {
      const url = hosts.imageServer + 'action-to-get-avatar.do?userId=' + this.user.id
      getAvatar(url, success, error)
    },

    loadMembers: function(success, error) {
      const url = hosts.pmobileServer + 'action-to-get-members.do?userId=' + this.user.id
      getMembers(url, success, error)
    }
  }
}
</script>

<style>
.member-list {
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
