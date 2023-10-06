import box from 'vue'
export const Order = box ({list : []})

export function Alllist (OrderList){
    const newOrder = {
        id : Order.list.length + 1,item: OrderList
    }
    Order.list.push(newOrder)
}
