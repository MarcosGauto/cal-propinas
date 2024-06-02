import { useState } from "react"
import type { OrderItem } from "../types"

export default function useOrder(){

    const[order, setOrder] = useState<OrderItem[]>([]) // aca se usa el generic <> para decirle que es tipo order item
    const[total ,setTotal] = useState(0) // aca no es necesario usar el generic
    const[auth, setAuth] = useState(false)

    return{

    }
}