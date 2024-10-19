<!-- eslint-disable no-undef -->
<!-- eslint-disable no-undef -->
<!-- eslint-disable no-undef -->
<template>
    <div id="app">
      <h1>Add Expense</h1>
  <div class="expense-form">
              <!-- Expense Form -->
      <form @submit.prevent="submitForm" style="width: 95%;">
        <!-- ID Field -->
        <div class="form-group">
          <label for="id">ID</label>
          <input type="text" v-model="form.id" id="id" required />
        </div>
  
        <!-- Title Field -->
        <div class="form-group">
          <label for="title">Title</label>
          <input type="text" v-model="form.title" id="title" required />
        </div>
  
        <!-- Description Field -->
        <div class="form-group">
          <label for="description">Description</label>
          <textarea v-model="form.description" id="description" required></textarea>
        </div>
  
        <!-- Amount Field -->
        <div class="form-group">
          <label for="amount">Amount</label>
          <input type="number" v-model="form.amount" id="amount" required />
        </div>
  
        <!-- Status Field -->
        <!-- <div class="form-group">
          <label for="status">Status</label>
          <select v-model="form.status" id="status" required>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div> -->
         
    
        <!-- Submit Button -->
        <button type="submit" class="submit-btn">Submit</button>
      </form>
  </div>

    </div>
  </template>
  
  <script>

import expenseService from '@/services/expenseService';

  export default {
    data() {
      return {
        form: {
          id: '',
          title: '',
          description: '',
          amount: '',
        //   status: 'active'
        }   
      };
    },
    methods: {
      async submitForm() {

          await expenseService.PostExpense(this.form);

        this.$router.push('/');
        console.log('Form Data:', this.form);
       
        // Reset form after submission
        this.form.id = '';
        this.form.title = '';
        this.form.description = '';
        this.form.amount = '';
      }
    }
  };
  </script>
  
  <style scoped>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  
  h1 {
    margin-bottom: 20px;
  }
  
  /* Form Styling */
  .expense-form {
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
    max-width: 400px;
    margin: 0 auto;
    padding: 20px; 
    border: 1px solid #ccc; 
    border-radius: 5px; 
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9; 
  }
  
  .form {
    margin-bottom: 15px;
    width: 100%;
  }
  
  label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;   
    text-align: center ; 
  }
  
  input,
  textarea,
  select {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    transition: border-color 0.3s;
  }
  
  input:focus,
  textarea:focus,
  select:focus {
    border-color: #42b983; 
    outline: none; 
  }
  
  textarea {
    resize: vertical; 
  }
  
  .submit-btn {
    background-color: #42b983;
    color: white;
    border: none;
    padding: 12px 25px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  
  .submit-btn:hover {
    background-color: #359a68;
  }
  </style>
  






   