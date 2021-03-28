<template>
  <div class="card">
    <div class="card__image"><img :src="$props.image" alt="" /></div>
    <div class="card__body">
      <div class="card__name">{{$props.name}}</div>
      <div class="card__price">{{Number($props.price).toLocaleString()}}円</div>
      <div class="card__score">
        <StarRating
          :read-only="true"
          :star-size="25"
          v-model="$props.score" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import StarRating from 'vue-star-rating'
export default Vue.extend({
  components: {
    StarRating,
  },
  props: {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
  },
})
</script>
<style lang="scss">
.card {
  border-radius: 24px;
  background: #f7f7f7;
  box-shadow:  6px 6px 12px #e8e8e8,
              -6px -6px 12px #ffffff;
  display: block;
  color: #333;
  overflow: hidden;
  background-color: #f9f9f9;
  height: 100%;
}
 
.card__image {
  position: relative;
  padding-top: 70%;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
 
.card__body {
  padding: 16px;
  
}
 
.card__name {
  font-size: 1.125rem;
  font-weight: bold;
}
 
.card__price {
  text-align: right;
  margin-top: .5rem;
}
 
.card__description {
  margin-top: 12px;
  font-size: 14px;
}

.vue-star-rating {
  margin-top: .5rem;
  margin-left: auto;
}

@media screen and (max-width: 600px) {
  .card {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }
}
</style>