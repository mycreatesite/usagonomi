<template>
  <div>
    <div class="content-title">人気のお店</div>
    <div class="shop-list">
      <div v-for="shop in shops" :key="shop.index">
        <Shop
          :image="shop.image"
          :shopName="shop.shopName"
          :score="shop.score"
          :description="shop.description"
        />
      </div>
    </div>
  </div>
</template>
 
<script lang="ts">
import Vue from 'vue'
import firebase from '@/plugins/firebase'
 
export interface Shop {
  image?: string
  shopName?: string
  score?: Number
  description?: string
}
 
export default Vue.extend({
  data: () => ({
    shops: [] as any,
  }),
  created() {
    const db = firebase.firestore()
    const dbShops = db.collection('shops')
    dbShops.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const data = doc.data()
        console.log(data)
        const shop: Shop = {
          image: data.image ? data.image : '/no-image.png',
          shopName: data.shopName ? data.shopName : '',
          score: data.score ? data.score : 0,
          description: data.description ? data.description : '',
        }
        this.shops.push(shop)
      })
    })
  },
})
</script>
<style>
.content-title {
  font-size: 24px;
  padding: 12px;
}
 
.shop-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>