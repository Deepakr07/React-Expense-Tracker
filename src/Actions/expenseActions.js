import axios from "axios"

const API_BASE_URL = import.meta.env.VITE_BASE_URL

export async function getAllExpenses(page = 1, limit = 3) {
    try{
        console.log(API_BASE_URL)
        const response = await axios.get(`${API_BASE_URL}/expenses`, {
            params: {
                page: page,
                limit: limit
            }
        })
        console.log(response.data)
        return response.data
    }
    catch (error){
        console.error("Error fetching expenses ",error)
        throw error
    }
}

export async function addExpense(expenseData) {
    try {
        const response = await axios.post(`${API_BASE_URL}/expenses`,expenseData)
        return response.data
    }
    catch (error) {
        console.error("Error adding expense: ",error)
        throw error
    }
}

export async function updateExpense (id, updateData ) {
    try { 
        const response = await axios.put(`${API_BASE_URL}/expenses/${id}`, updateData)
        return response.data
    } catch (error) {
        console.error("Error updating expense :",error)
        throw error
    }
}

export async function deleteExpense () {
    try {
        await axios.delete(`${API_BASE_URL}/expenses/${id}`)
    }
    catch (error) {
        console.error("Error deleting expense:", error)
        throw error
    }
}