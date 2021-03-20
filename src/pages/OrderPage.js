import React, { useCallback, useState } from "react"
import { useQuery } from "react-query"
import { postOrder } from "../helpers/requests"
import Order from "../components/Order/Order.js"

const initialState = {
    name: "",
    phone: null,
    address: "",
    date: "",
    persons: null,
    email: "",
    parents: null,
}

const OrderPage = () => {
    const [data, setData] = useState(initialState)

    const handlePostOrder = useCallback(
        (data) => {
            setData(initialState)
            postOrder(data)
        },
        [data]
    )

    return (
        <>
            <Order postOrder={handlePostOrder} data={data} />
        </>
    )
}

export default OrderPage
