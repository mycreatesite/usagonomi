<template>
  <header class="header">
    <div class="header__title">
      <nuxt-link to="/"><img src="/logo.svg" alt="USAGONOMI"></nuxt-link>
      <span class="header__subTitle">うさぎの好きなもの</span>
    </div>
    <div v-if="getLogin">
      <div v-if="this.$route.path === '/'" class="header__button">
        <nuxt-link to="/item/entry/">登録</nuxt-link>
      </div>
      <div v-if="this.$route.path === '/item/entry/'" class="header__button">
        <nuxt-link to="/">戻る</nuxt-link>
      </div>
    </div>
    <nuxt-link v-if="!getLogin" to="/login/"><button class="logButton">管理者用ログイン</button></nuxt-link>
    <button v-if="getLogin" @click="logout" class="logButton">ログアウト</button>
  </header>
</template>
 
<script lang="ts">
import Vue from 'vue'
import { auth } from '../plugins/firebase'
import { mapGetters } from 'vuex';
export default Vue.extend({
  methods: {
    logout() {
      auth.signOut()
        .then(()=>{
            auth.signOut()
            this.$store.commit('logout')
            this.$router.push('/')
            alert('ログアウトしました')
        })
      .catch(e =>{
          console.log(e.message);
      });
    }
  },
  computed: {
    ...mapGetters(['getLogin'])
  }
})
</script>

<style lang="scss" scoped>
.logButton {
  position: fixed;
  z-index: 100;
  bottom: 16px;
  right: 16px;
  border: none;
  padding: 8px 16px;
  border-radius: 50px;
  background-color: #eaeaea;
}

.header {
  align-items: center;
  padding: 80px 16px;
  background-color: #fff;
  box-shadow: 10px 10px 20px 1px rgba(#000,.02);
}
 
.header__title {
  display: flex;
  flex-direction: column;
  align-items: center;
  a,span {
    display: block;
    text-align: center;
    text-decoration: none;
  }
  a {
    width: 160px;
    img {
      width: 100%;
    }
  }
}
 
.header__subTitle {
  margin-top: .5rem;
}

.header__button {
  margin: 24px auto 0;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    text-decoration: none;
    color: #333;
    border-radius: 50%;
    border: 1px solid #333;
    margin: 0 auto;
    transition: .3s;
    &:hover {
      background-color: #333;
      color: #fff;
    }
  }
}
 
@media screen and (max-width: 767px) {
  .header__logo {
    font-size: 30px;
  }
 
  .header__subTitle {
    display: none;
  }
}
</style>