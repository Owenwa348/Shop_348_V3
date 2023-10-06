import { ref } from 'vue'

import { defineStore } from 'pinia'

export const ListmenuStore = defineStore('menu', () => {

const menuEgg = ref([
    {name: "ไข่ไก่ เบอร์ 0 (แผง)",price: 164,img: "https://cdn8.devgodigit.net/wp-content/uploads/2021/09/30192654/051266304_P.jpg"},
    {name: "ไข่ไก่ เบอร์ 1 (แผง)",price: 154,img: "https://cdn8.devgodigit.net/wp-content/uploads/2021/09/30192645/051266264_P.jpg"},
    {name: "ไข่ไก่ เบอร์ 2 (แผง)",price: 149,img: "https://cdn8.devgodigit.net/wp-content/uploads/2021/09/30192622/051266310_P.jpg"},
    {name: "ไข่ไก่ เบอร์ 3 (แผง)",price: 142,img: "https://cdn8.devgodigit.net/wp-content/uploads/2021/09/30192642/051266258_P.jpg"},
    {name: "ไข่ไก่ เบอร์ 4 (แผง)",price: 137,img: "https://cdn8.devgodigit.net/wp-content/uploads/2021/09/30192652/051266293_P.jpg"},
    
])

return { menuEgg }
})