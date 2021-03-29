<template>
  <div class="container">
    <div class="content">
      <div class="itemDetail">
        <nuxt-link to="/" class="backButton button">戻る</nuxt-link>
        <div class="itemDetail__image">
          <img :src="item.image" alt="" />
        </div>
        <div class="itemDetail__body">
          <div class="itemDetail__name">
            {{ item.name }}
          </div>
          <div class="itemDetail__price">
            {{ item.price }} 円
          </div>
          <div class="itemDetail__score">
            <StarRating
              v-model="item.score"
              :star-size="StarRatingConfig.starSize"
              :read-only="StarRatingConfig.readOnly"
            />
          </div>
          <div class="itemDetail__description">
            {{ item.description }}
          </div>
        </div>
      </div>
      <div class="controlGroup" v-if="getLogin">
        <nuxt-link :to="`/item/edit/${$route.params.id}`">
          <button class="controlBtn button ">編集</button>
        </nuxt-link>
        <button @click="deleteItem()" class="controlBtn button controlBtn--remove">削除</button>
      </div>
      <div class="itemReview">
        <h3>レビュー</h3>
        <div class="item-review">
          {{ item.review }}
        </div>
        <div v-if="!showReviewInput && getLogin">
          <button @click="showReviewInput = !showReviewInput" class="controlBtn button">
            レビューする
          </button>
        </div>
        <div v-if="showReviewInput">
          <div class="item-score">
            <StarRating v-model="newScore" :star-size="StarRatingConfig.starSize" />
          </div>
          <div>
            <textarea class="formTextarea" v-model="newReview" rows="5"></textarea>
          </div>
          <div>
            <button @click="review()" class="controlBtn button">レビューを投稿</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
 
<script lang="ts">
import Vue from 'vue'
import firebase from '@/plugins/firebase'
import StarRating from 'vue-star-rating'
import { mapGetters } from 'vuex';
 
export default Vue.extend({
  components: {
    StarRating,
  },
  data: () => ({
    item: {
      name: '',
      image: '',
      price: '',
      score: 0,
      description: '',
      review: '',
    },
    newScore: 0,
    newReview: '',
    showReviewInput: false,
    StarRatingConfig: {
      starSize: 30,
      readOnly: true,
    },
  }),
  head() {
    return {
      title: this.item.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.item.description,
        },
      ],
    }
  },
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
        this.item.score = data.score ? data.score : 0
        this.item.description = data.description ? data.description : ''
        this.item.review = data.review ? data.review : 'レビューはまだありません。'
        this.newScore = data.score ? data.score : 0
        this.newReview = data.review ? data.review : ''
      }
    })
  },
  methods: {
    deleteItem() {
      const result = confirm('本当に削除しますか？')
      if(!result) return
      const db = firebase.firestore()
      const dbItem = db.collection('items').doc(this.$route.params.id)
      dbItem.delete().then(()=>{
        this.$router.push('/')
      })
    },
    review() {
      const db = firebase.firestore()
      const dbItem = db.collection('items').doc(this.$route.params.id)
      dbItem.update({
          score: this.newScore,
          review: this.newReview,
        })
        .then(() => {
          location.reload()
        })
    },
  },
  computed: {
    ...mapGetters(['getLogin'])
  }
})
</script>
 
<style lang="scss" scoped>

.content {
  border-radius: 40px;
  margin: 40px 0;
  padding: 80px 24px;
  background-color: #fff;
}

h3 {
  margin-top: 20px;
  margin-bottom: 20px;
}
 
.backButton {
    width: 50%;
    margin: 0 auto 40px;
}
 
.itemDetail {
  margin: auto;
  color: #333;
}
 
.itemDetail__image {
  margin-bottom: 40px;
  text-align: center;
  img {
    max-width: 100%;
    max-height: 500px;
    height: auto;
    object-fit: cover;
    border-radius: 40px;
  }
}

.itemDetail__body {
  display: flex;
  flex-direction: column;
}

.itemDetail__name {
  font-weight: bold;
  font-size: 24px;
}
 
.itemDetail__price {
  margin-top: 8px;
  text-align: right;
}
 
.itemDetail__description {
  font-size: 18px;
  margin-top: 24px;
}

.itemReview {
  margin-top: 64px;
  padding-top: 40px;
  border-top: 1px solid #e2e2e2;
}

.formTextarea {
  width: 100%;
  margin-top: 40px;
}

.controlGroup {
  > a {
    text-decoration: none;
  }
}

.controlBtn {
  width: 50%;
  margin: 40px auto 0;
}

.controlBtn--remove {
  margin-top: 24px;
}
</style>