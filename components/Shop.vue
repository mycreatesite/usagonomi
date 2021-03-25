<template>
  <div class="shop-card">
    <div><img class="shop-image" :src="$props.image" alt="" /></div>
    <div class="shop-info">
      <div class="shop-name">{{$props.shopName}}</div>
      <div class="shop-score">{{$props.score}}</div>
      <div class="shop-description">{{$props.description}}</div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    image: {
      type: String,
      required: true,
    },
    shopName: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
})
</script>
<style>
.shop-card {
  width: 300px;
  margin: 8px;
  box-shadow: 1px 1px 4px 1px rgb(218, 218, 218);
  display: inline-block;
  color: #333;
}
 
.shop-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
}
 
.shop-info {
  padding: 4px;
}
 
.shop-name {
  font-size: 20px;
  font-weight: bold;
}
 
.shop-score {
  text-align: right;
}
 
.shop-description {
  margin-top: 12px;
  font-size: 14px;
}
</style>