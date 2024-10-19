/* eslint-disable no-unused-vars */
import apiClient from "./apiServices"


const fetchExpense = async() => {
    const response = await apiClient.get("/expenses");
    return response.data;
}


const PostExpense = async(data) => {
    const response = await apiClient.post("/expenses", data);
    return PostExpense.data;
}

const DeleteExpense = async(id) => {
    const response = await apiClient.delete("/expenses/"+id);
}

export default{
    fetchExpense, PostExpense , DeleteExpense
}