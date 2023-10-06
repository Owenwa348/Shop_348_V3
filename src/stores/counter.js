import {ref} from 'vue'

export const CartA = ref([]);


export function plusitem (item){
    const ItemList = CartA.value.find(product => product.name === item.name);
    if (ItemList) {
        ItemList.quantity += 1;
    }else {
        CartA.value.push({ ...item, quantity: 1 });
      }

}
  
  export function totalItemsInCart() {
    return CartA.value.reduce((acc, item) => acc + item.quantity, 0);
  }