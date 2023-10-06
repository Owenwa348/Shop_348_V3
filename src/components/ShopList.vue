<script setup>
import { ref } from 'vue';
import {ListmenuStore} from '../stores/ShopEgg.js';
import { plusitem } from '../stores/counter.js';


const allegg = ListmenuStore ();
const shopCart = ref(allegg.menuEgg)

const AddCart = (item) => {
  plusitem(item);
}
</script>

<template>
<div class="album py-5 bg-body-tertiary">
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col" v-for="(i,index) in shopCart" :key="index">
          <div class="card shadow-sm">
            <img :src="i.img" class="card-img-top" alt="..." width="250" height="350" >
            <div class="card-body">
              <h5 class="card-title">{{ i.name }}</h5>
              <p class="card-text">ราคา {{ i.price }} บาท</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button class="btn btn-success" type="submit" @click="AddCart(i)">ใส่ลงตะกร้า</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
