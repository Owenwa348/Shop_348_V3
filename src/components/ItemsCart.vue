<script setup>
import HeaderList from './HeaderList.vue';
import { CartA } from '../stores/counter.js';
import { addOrder } from '../stores/History.js';
import { computed } from 'vue';

const totalPrice = (item) => computed(() => item.price * item.quantity);

const totalCartPrice = computed(() => {
  return CartA.value.reduce((acc, item) => acc + item.price * item.quantity, 0);
});

const totalItemsInCart = computed(() => {
  return CartA.value.reduce((acc, item) => acc + item.quantity, 0);
});



const confirmOrder = () => {
    addOrder(CartA.value);
    CartA.value = [];
};


</script>

<template>
  <HeaderList></HeaderList>
  <div class="container">
    <div class="alert alert-info">
      <div class="card w-75 mb-3">
        <div class="card-body">
          <div class="alert alert-success">
            <h5 class="card-title">สินค้าที่สั่ง</h5>
            <div class="card" style="width: 18rem;" v-for="(item, index) in CartA" :key="index">
              <img :src="item.img" class="card-img-top" alt="...">
              <div class="card-body">
                <p class="card-text">{{ item.price }}</p>
                <p class="card-text">
                  <input id="form1" min="0" name="quantity" type="number" v-model="item.quantity" class="form-control form-control-sm" /></p>
                <p class="card-text">ราคารวม {{ totalPrice(item).value }} รายการ</p>
              </div>
            </div>
            <p class="card-text">รายการที่สังซื้อ {{ totalItemsInCart }} รายการ</p>
            <p class="card-text">ยอดชำระรวมทั้งหมด {{ totalCartPrice}} รายการ</p>
            <a href="#" class="btn btn-primary" @click="confirmOrder">ตกลง</a>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
