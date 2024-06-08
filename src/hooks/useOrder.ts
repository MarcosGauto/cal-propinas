import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

export default function useOrder(){

    const[order, setOrder] = useState<OrderItem[]>([]) // aca se usa el generic <> para decirle que es tipo order item

  const addItem = (item : MenuItem) => {
    
  }

    return{
        addItem


    }
}