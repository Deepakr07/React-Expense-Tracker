import axios from "axios"

const API_BASE_URL = import.meta.env.VITE_BASE_URL

export async function getExpenses(page=1, limit=3 ,id = null) {
    try{
        const API_URL = id? `${API_BASE_URL}/expenses/${id}`: `${API_BASE_URL}/expenses/`
        const params = id?{}:{params: {page: page,limit: limit}}
        const response = await axios.get(API_URL,params)

        if (response.status === 200) {
            return response.data;
        }
        else if (response.status === 204) {
            return { message: "No content found", data: [], statusCode: response.status };
        }
    }
    catch (error){
        console.error(
            { message:"Error fetching expense: ",
              statusCode:error.error.response ? error.response.status : "Unknown",
              errorMessage:error.message
            })
        throw error
    }
}
export async function getIncomeExpense(){
    try{
        const response = await axios.get(`${API_BASE_URL}/expenses/computation`)
        if(response.status === 200){
            return response.data
        }
        else if (response.status === 204) {
            return { message: "No content found", data: [], statusCode: response.status };
        }
    }
    catch (error){
        console.error(
            { message:"Error fetching expense: ",
              statusCode:error.response ? error.response.status : "Unknown",
              errorMessage:error.message
            })
        throw error
    }
}

export async function addExpense(expenseData) {
    try {
        const response = await axios.post(`${API_BASE_URL}/expenses`, expenseData);

        if (response.status === 201) {
            return {
                statusCode: response.status,
                data: response.data
            } 
        } else if (response.status === 400) {
            return { message: "Bad request. Please check the data sent.", statusCode: 400 };
        } else {
            return {
                message: "Unexpected response from the server",
                statusCode: response.status,
                data: response.data
            };
        }
    } catch (error) {

        console.error({
            message: "Error adding expense:",
            statusCode: error.response ? error.response.status : "Unknown",
            errorMessage: error.message
        });
        throw error;
    }
}

export async function updateExpense(id, updateData) {
    try {
        const response = await axios.put(`${API_BASE_URL}/expenses/${id}`, updateData);
        console.log("From update action ", response.status);

        return {
            statusCode: response.status,
            data: response.data
        };
    } catch (error) {
        console.error({
            message: "Error updating expense:",
            statusCode: error.response ? error.response.status : "Unknown",
            errorMessage: error.message
        });

        return {
            statusCode: error.response ? error.response.status : 500,
            errorMessage: error.message
        };
    }
}



export async function deleteExpense(id) {
    try {
        const response = await axios.delete(`${API_BASE_URL}/expenses/${id}`);
        if (response.status === 200) {
            return {
                message: response.data.message,
                deletedExpense: response.data.deletedExpense ,
                statusCode:response.status
            };
        } else {
            return {
                message: "Unexpected response while deleting expense",
                statusCode: response.status,
                data: response.data
            }; 
        }
    } catch (error) {
        if (error.response) {
            if (error.response.status === 404) {
                console.error({
                    message: "Error deleting expense:",
                    statusCode: 404,
                    errorMessage: "Expense not found in the database"
                });
                return { message: "Expense not found in the database", statusCode: 404 };
            }
            if (error.response.status === 500) {
                console.error({
                    message: "Error deleting expense:",
                    statusCode: 500,
                    errorMessage: error.response.data.error || error.message
                });
                return { message: "Server error while deleting expense", statusCode: 500 };
            }
        }
        console.error({
            message: "Error deleting expense:",
            statusCode: "Unknown",
            errorMessage: error.message
        });
        throw error; 
    }
}