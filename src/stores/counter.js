import {ref} from 'vue'

export const CartA = ref([]);

export function removeCart (item){
    const index = CartA.value.findIndex(product => product.name === item.name);
    if(index !==-1) {
        CartA.value.splice(index,1);
    }
}
export function plusitem (item){
    const ItemList = CartA.value.find(product => product.name === item.name);
    if (ItemList) {
        ItemList.quantity += 1;
    }
}
export function deleteitem (item){
    const ItemList = CartA.value.find(product => product.name === item.name);
    if (ItemList && ItemList.quantity > 0) {
        ItemList.quantity -= 1;
    }
}
export function Sumitem (){
    return CartA.value.reduce((total,item) => total+(item.price * item.quantity), 0);
}