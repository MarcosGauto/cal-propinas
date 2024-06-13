import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

export default function useOrder() {

  const [order, setOrder] = useState<OrderItem[]>([]) // aca se usa el generic <> para decirle que es tipo order item

  const addItem = (item: MenuItem) => {
    const itemExist = order.find(orderItem => orderItem.id === item.id)  //hacemos un order.find para encontrar un elemento en base a una condicion
    if (itemExist) {
      const updateOrder = order.map(orderItem => orderItem.id === item.id ?
        { ...orderItem, quantity: orderItem.quantity + 1 } :
        orderItem

      )
      setOrder(updateOrder)

    } else {

      const newItem: OrderItem = { ...item, quantity: 1 } //generamos newitem con copia de item y agregamos cantidad
      setOrder([...order, newItem])
    }
  }



  return {
    addItem


  }
}