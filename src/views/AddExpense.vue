<!-- eslint-disable no-undef -->
<!-- eslint-disable no-undef -->
<!-- eslint-disable no-undef -->
<template>
    <div id="app">
      <h1>Add Expense</h1>
  <div class="expense-form">
              <!-- Expense Form -->
      <form @submit.prevent="submitForm" style="width: 95%;">
      
  
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

        <label for="categorySelect">Select Category:</label>
        <select name="category"  v-model="form.categoryId"  required>
          <option >Select Category</option>
          <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
  </select>
  
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
          categoryId: '',
        } ,
        categories:[]
      };
    },
    methods: {
      async submitForm() {

          await expenseService.PostExpense(this.form);
        this.$router.push('/');
        //console.log('Form Data:', this.form);
       
        // Reset form after submission
        this.form.id = '';
        this.form.title = '';
        this.form.description = '';
        this.form.amount = '';
      }
    },

    async mounted(){
         const data = await expenseService.GetAllCategory();

         this.categories = data;
         console.log(data)
        //  console.log( this.categories);

        
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
  






   