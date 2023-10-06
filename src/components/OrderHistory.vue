<script setup>
import HeaderList from './HeaderList.vue';


</script>

<template>
  <HeaderList></HeaderList>
  <main class="flex-shrink-0">
  <div class="container">
    <h1 class="mt-5">ประวัติการสังซื้อ</h1>
    <p class="lead">รายการที่ลูกค้าสั่งซื้อทั้งหมดจำนวน....</p>
  </div>
</main>

<footer class="footer mt-auto py-3 bg-body-tertiary">
  <div class="container">
  </div>
  <div class="container">
  <div class="d-flex flex-column align-items-stretch flex-shrink-0 bg-body-tertiary" style="width: 380px;">
    <a class="d-flex align-items-center flex-shrink-0 p-3 link-body-emphasis text-decoration-none border-bottom">
      <svg class="bi pe-none me-2" width="30" height="24"><use xlink:href="#bootstrap"/></svg>
      <span class="fs-5 fw-semibold">ตรวจสอบรายการ</span>
    </a>
    <div class="list-group list-group-flush border-bottom scrollarea">
      <a class="list-group-item list-group-item-action py-3 lh-sm">
        <div class="d-flex w-100 align-items-center justify-content-between">
          <strong class="mb-1">สินค้าที่สั่ง</strong>
          <img id="OrderHistory" src="https://pbs.twimg.com/media/F7pyyTdagAAyQKr?format=jpg&name=4096x4096" class="rounded float-end" width="100" height="100" />
        </div>
        <div class="col-10 mb-1 small">ราคา....</div>
      </a>
    </div>
  </div>
</div>
</footer>
</template>

<style scoped>

</style>