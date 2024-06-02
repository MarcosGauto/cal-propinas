export type MenuItem = { 
    id: number,
    name: string,
    price: number
}

// tomamos todo lo de menu Item y se asignamos + la cantidad(quantity)

export type OrderItem = MenuItem & {
    quantity: number
}