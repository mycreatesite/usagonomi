<template>
  <div class="entryForm">
    <div v-if="item.image">
      <img class="entryForm__image" :src="item.image" alt="" />
    </div>
    <label class="labelGroup">
      <span class="formLabel">画像</span>
      <input v-if="!reset" @change="upload" type="file" />
    </label>
    <label class="labelGroup">
      <span class="formLabel">品名</span>
      <input class="formInput" type="text" v-model="item.name" />
    </label>
    <label class="labelGroup">
      <span class="formLabel">金額</span>
      <input class="formInput" type="text" v-model="item.price" />
    </label>
    <label class="labelGroup">
      <span class="formLabel">紹介</span>
      <textarea class="formTextarea" v-model="item.description" rows="10"></textarea>
    </label>
    <div class="entryForm__btn">
      <button class="button" @click="entryItem()">登録</button>
    </div>
 
    <div class="entryForm__message">
      <div v-if="entryDocId">
        FirestoreにDocId:{{ entryDocId }}で登録しました。
      </div>
      <div v-if="errorMessage">エラーメッセージ:{{ errorMessage }}</div>
    </div>
  </div>
</template>
 
<script lang="ts">
import Vue from 'vue'
import firebase from '@/plugins/firebase'
 
export default Vue.extend({
  data: () => ({
    item: {
      name: '',
      image: '',
      price: 0,
      description: '',
    },
    entryDocId: '',
    errorMessage: '',
    reset: false,
  }),
  created() {
    const db = firebase.firestore()
    const dbItem = db.collection('items').doc(this.$route.params.id)
    dbItem.get().then((doc) => {
      const data = doc.data()
      if(!data) {
        this.$router.push('/404')
      } else {
        this.item.image = data.image ? data.image : '/no-image.png'
        this.item.name = data.name ? data.name : ''
        this.item.price = data.price ? data.price : ''
        this.item.description = data.description ? data.description : ''
      }
    })
  },
  methods: {
    entryItem() {
      this.errorMessage = ''
      if (!this.item.name || !this.item.description) {
        this.errorMessage = '店名と店舗紹介は必須です'
        return
      }
 
      const db = firebase.firestore()
      const dbItems = db.collection('items').doc(this.$route.params.id)
      dbItems
        .update({
          name: this.item.name,
          price: this.item.price,
          description: this.item.description,
          image: this.item.image,
        })
        .then((ref) => {
          this.$router.push('/')
        })
        .catch((err) => {
          this.errorMessage = err
        })
    },
    upload(e: any) {
      const file = e.target.files[0]
 
      if (!file.type.includes('image')) {
        this.errorMessage = '画像を指定してください'
        this.inputFileReset()
        return
      }
 
      const storageRef = firebase.storage().ref(file.name)
      storageRef.put(file).then(() => {
        firebase
          .storage()
          .ref(file.name)
          .getDownloadURL()
          .then((url) => {
            this.item.image = url
          })
          .catch((err) => {
            this.errorMessage = err
          })
      })
    },
    inputFileReset() {
      this.reset = true
      this.$nextTick(function () {
        this.reset = false
      })
    },
  },
})
</script>
 
<style lang="scss" scoped>
h2 {
  margin-bottom: 20px;
}
 
.entryForm {
  width: 50%;
  padding: 40px 24px;
  margin: 40px auto;
  background: #ffffff;
  box-shadow:  6px 6px 12px #e8e8e8,
              -6px -6px 12px #ffffff;
  color: #333;
  border-radius: 40px;
}
 
.entryForm__image {
  display: block;
  margin: 0 auto 1rem;
  width: auto;
  height: auto;
  max-height: 400px;
  max-width: 100%;
}
 
.entryForm__btn {
  button {
    width: 50%;
    margin: 32px auto 0;
  }
}
 
.entryForm__message {
  margin: 12px;
  padding: 12px;
  text-align: center;
}

@media screen and (max-width: 768px) {
  .entryForm {
    width: 100%;
  }
}
</style>