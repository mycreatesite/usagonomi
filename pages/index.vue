<template>
  <div class="itemList">
    <div class="itemList__item" v-for="item in items" :key="item.index">
      <nuxt-link :to="`/item/${item.docId}`">
        <Item
          :image="item.image"
          :name="item.name"
          :price="item.price"
          :score="item.score"
        />
      </nuxt-link>
    </div>
  </div>
</template>
 
<script lang="ts">
import Vue from 'vue'
import firebase from '@/plugins/firebase'

interface Item {
  docId?: string
  image?: string
  name?: string
  price?: string
  score?: number
  description?: string
}
 
export default Vue.extend({
  data: () => ({
    items: [] as Item[],
  }),
  created() {
    const db = firebase.firestore()
    const dbItems = db.collection('items')
    dbItems.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const data = doc.data()
        const item: Item = {
          docId: doc.id,
          image: data.image ? data.image : '/no-image.png',
          name: data.name ? data.name : '',
          price: data.price ? data.price : '',
          score: data.score ? data.score : 0,
          description: data.description ? data.description : '',
        }
        this.items.push(item)
      })
    })
  }
})
</script>
<style lang="scss">
 
.itemList {
  display: flex;
  flex-wrap: wrap;
  margin-left: -1rem;
  margin-right: -1rem;
  margin-bottom: -2rem;
}

.itemList__item {
  width: 25%;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-bottom: 2rem;
  > a {
    display: block;
    height: 100%;
    text-decoration: none;
  }
}

@media screen and (max-width: 768px) {
  .itemList__item {
    width: 50%;
  }
}
@media screen and (max-width: 599px) {
  .itemList__item {
    width: 100%;
  }
}
</style>