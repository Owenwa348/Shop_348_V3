import { ref } from 'vue'

import { defineStore } from 'pinia'

export const ListmenuStore = defineStore('menu', () => {

const menuEgg = ref([
    {name: "ไข่ไก่ เบอร์ 0 (แผง)",price: 164, img: "https://cdn8.devgodigit.net/wp-content/uploads/2021/09/30192654/051266304_P.jpg"},
    {name: "ไข่ไก่ เบอร์ 1 (แผง)",price: 154, img: "https://cdn8.devgodigit.net/wp-content/uploads/2021/09/30192645/051266264_P.jpg"},
    {name: "ไข่ไก่ เบอร์ 2 (แผง)",price: 149, img: "https://cdn8.devgodigit.net/wp-content/uploads/2021/09/30192622/051266310_P.jpg"},
    {name: "ไข่ไก่ เบอร์ 3 (แผง)",price: 142, img: "https://cdn8.devgodigit.net/wp-content/uploads/2021/09/30192642/051266258_P.jpg"},
    {name: "ไข่ไก่ เบอร์ 4 (แผง)",price: 137, img: "https://cdn8.devgodigit.net/wp-content/uploads/2021/09/30192652/051266293_P.jpg"},
    {name: "ไข่นกกระทาสด15 ฟอง",price: 37, img: "https://cdn8.devgodigit.net/wp-content/uploads/2023/05/18104049/9150730_P.jpg"},
    {name: "ไข่เป็ดภาดขนาดกลาง",price: 163, img: "https://select.talaadthai.com/media/catalog/product/cache/696e3e68550c37c55175d3f8868a2dd8/f/g/fge020001201_9jbqw09cbvtdpngj.jpg"},
    {name: "ไข่เป็ดภาดขนาดใหญ่",price: 173, img: "https://select.talaadthai.com/media/catalog/product/cache/696e3e68550c37c55175d3f8868a2dd8/f/g/fge020001201_9jbqw09cbvtdpngj.jpg"},
    {name: "ไข่เยี่ยวม้า ขนาดกลาง",price: 248, img: "https://select.talaadthai.com/media/catalog/product/cache/696e3e68550c37c55175d3f8868a2dd8/f/g/fge030002201_rriutyb3xte98muh.jpg"},
    {name: "ไข่เยี่ยวม้า ขนาดใหญ่",price: 266, img: "https://select.talaadthai.com/media/catalog/product/cache/696e3e68550c37c55175d3f8868a2dd8/f/g/fge030002201_rriutyb3xte98muh.jpg"},
])

return { menuEgg }
})