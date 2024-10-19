/* eslint-disable no-unused-vars */

// import apiClient from "./apiServices"

// // const fetchSignup = async() => {
// //     const response = await apiClient.get("/auth")
// //     return response.data;
// // }

// const SignIn = async(data) => {
//     const response = await apiClient.post("/auth/signin" , data);
//     return SignIn.data;
// }

// export default {
//     SignIn
// }


import apiClient from "./apiServices"; 

const SignIn = async (data) => {
  try {
    const response = await apiClient.post("/auth/signin", data);
    return {
      success: true,
      data: response.data
    }; 
  } catch (error) {
    if (error.response && error.response.status === 401) {
      return {
        success: false,
        message: 'Unauthorized: Invalid username or password.'
      };
    } else {
      return {
        success: false,
        message: 'An error occurred. Please try again later.'
      };
    }
  }
};

export default { SignIn };
