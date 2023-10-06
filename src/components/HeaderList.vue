<script setup>
import { CartA } from '../stores/counter.js';
import { computed } from 'vue';

const totalItems = computed(() => CartA.value.reduce((acc, item) => acc + item.quantity, 0));


</script>


<template>
    <div class="container">
      <div class="p-3 mb-2 bg-info text-dark">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <router-link :to="'/'">
          <img id="egg" src="https://media2.giphy.com/media/Y1Vq94Ivx0EtG/giphy.gif?cid=ecf05e47751ra89nx4iq1l7896gpqk7lnvnl162u57t7rb2x&ep=v1_gifs_search&rid=giphy.gif&ct=g" class="logo" alt="Vite logo" width="60" height="60" />
        </router-link>
        <span class="fs-4"><strong>Super egg</strong></span>
      </a>
      
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link :to="'/cart'">
          <a class="btn btn-warning" aria-current="page">สินค้าในตะกร้า
          <img id="Cart" src="https://obs.line-scdn.net/r/ect/ect/image_165658673948875649919cf9589t0ff9a8e3" class="iconCart" alt="Cart" width="50" height="50" />
          <span class="badge text-bg-danger">{{totalItems}}</span>
        </a>
      </router-link>
    </li>
        <li class="nav-item">
          <router-link :to="'/OrderHistory'">
          <a class="btn btn-secondary" aria-current="page">ประวัติการสั่งซื้อ
          <img id="OrderHistory" src="https://cdn.icon-icons.com/icons2/4043/PNG/512/document_file_icon_256882.png" class="iconCart" alt="Vite logo" width="50" height="50" />
        </a>
      </router-link>
        </li>
      </ul>
    </header>
  </div>
  </div>
  <div class="col" style="padding-right:100px;">
        <marquee onmouseover="stop()" onmouseout="start()" >
          <a aria-current="page" class="text-danger-emphasis">
              ไข่ไก่ดีๆมีที่นี่ที่เดียว Super egg ไข่ไก่สำหรับคนทุกคนมีสินค้ามากมายให้เลือกตามที่ต้องการ
              <img id="egg" src="https://media0.giphy.com/media/3oD3YC5okylCndTsT6/giphy.gif?cid=ecf05e47inq4y0098f3763vtdpgfodm5a1au69q74zlj0qna&ep=v1_gifs_related&rid=giphy.gif&ct=g" class="logo" alt="Vite logo" width="70" height="70" />
            </a>
          </marquee>
        </div>
        
</template>


<style scoped>
.container{
    font-size: small;
    width: 1200px;
    margin: auto;
    max-width: 90%;
    transition: transform 1s;
}
.totalQuantity{
    font-size: x-large;
    background-color: #b31010;
    width: 40px;
    height: 40px;
    color: #fff;
    font-weight: bold;
    display: flex;
    justify-content: center;
    border-radius: 50%;
    transform: translateX(-20px);
}
</style>
<!-- class="bi me-2" -->

<!-- <button type="button" class="btn btn-primary position-relative">
  Inbox
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    99+
    <span class="visually-hidden">unread messages</span>
  </span>
</button> -->




<!-- 
<router-link :to="{ name: 'home' }">
  <img id="egg" src="https://media2.giphy.com/media/Y1Vq94Ivx0EtG/giphy.gif?cid=ecf05e47751ra89nx4iq1l7896gpqk7lnvnl162u57t7rb2x&ep=v1_gifs_search&rid=giphy.gif&ct=g" class="logo" alt="Vite logo" width="50" height="50" />
</router-link>

<li class="nav-item">
  <img id="Cart" src="https://obs.line-scdn.net/r/ect/ect/image_165658673948875649919cf9589t0ff9a8e3" class="iconCart" alt="Vite logo" width="50" height="50" />
</li> -->
