<template>
  <div class="loginForm">
    <div class="container">
        <div class="loginForm__inner">
            <label class="labelGroup">
                <span class="formLabel">メールアドレス</span>
                <input class="formInput" label="MailAddress" type="email" v-model="email"/>
            </label>
            <label class="labelGroup">
                <span class="formLabel">パスワード</span>
                <input class="formInput" label="MailAddress" type="password" v-model="password"/>
            </label>
            <button class="button" @click="login">ログイン</button>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { auth } from '../plugins/firebase'
export default Vue.extend({
    data:() => ({
        email : '',
        password : ''
    }),
   methods: {
    login() {
        auth.signInWithEmailAndPassword(this.email, this.password)
        .then((user) => {
            this.$store.commit('login')
            this.$router.push('/')
        })
        .catch(e => alert(e.message))
    }
   } 
})
</script>

<style scoped lang="scss">
    .loginForm__inner {
        display: flex;
        flex-direction: column;
        padding: 40px 24px;
        max-width: 400px;
        margin-left: auto;
        margin-right: auto;
        background: #ffffff;
        box-shadow:  6px 6px 12px #e8e8e8,
                    -6px -6px 12px #ffffff;
        color: #333;
        border-radius: 40px;
    }
    .formLabel {
        width: 100%;
    }
    .formInput {
        width: 100%;
    }
    .button {
        margin-top: 1rem;
    }

</style>