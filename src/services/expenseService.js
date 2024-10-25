/* eslint-disable no-unused-vars */
import apiClient from "./apiServices"


const fetchExpense = async() => {
    const response = await apiClient.get("/expenses");
    return response.data;
}

const GetExpense =  async(id) => {
    const response = await apiClient.get("/expenses/"+id);
    return response.data;
}

const PostExpense = async(data) => {
    const response = await apiClient.post("/expenses", data);
    return PostExpense.data;
}

const EditExpense = async(data) => {
    const response = await apiClient.patch("/expenses", data)
    return response;
}

const DeleteExpense = async(id) => {
     await apiClient.delete("/expenses/"+id);
}

const GetAllCategory = async() => {
  const response =  await apiClient.get("/category")
    return response.data;
}

export default{
    fetchExpense, PostExpense, EditExpense , DeleteExpense , GetExpense ,GetAllCategory
}