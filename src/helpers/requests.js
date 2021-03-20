import { baseUrl } from "../constants"

const getData = async (url) => {
    return await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((data) =>
        data
            .json()
            .then(({ data }) => data)
            .catch((err) => console.log(err))
    )
}

const postData = async (url, data) => {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(...data),
    })

    const result = await response.json()

    return result
}

export const getCategories = () => getData(`${baseUrl}/api/categories`)
export const getCategoryById = (id) =>
    getData(`${baseUrl}/api/categories/${id}`)
export const getSubCategories = () => getData(`${baseUrl}/api/subcategories`)
export const getSubCategoryById = (id) =>
    getData(`${baseUrl}/api/subcategories/${id}`)
export const getSubCategoriesFull = (arrIds) => {
    return Promise.all(
        arrIds.map(async (itemId) => {
            return await getSubCategoryById(itemId)
        })
    )
}

export const postOrder = (data) => {
    console.log(data)
    // postData(`${baseUrl}/api/invoices`, data)
}
