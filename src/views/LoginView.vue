
<!-- eslint-disable no-undef -->
<template>
  <div id="app">
    <h1>Login</h1>
<div class="login-form">
  
    <form @submit.prevent="submitLoginForm" style="width: 95%;">
     

      <div class="signup">
        <label for="username">username</label>
        <input type="text" v-model="form.username" id="username" required />
      </div>

      <div class="signup">
        <label for="password">Password</label>
        <input type="text" v-model="form.password" id="password" required />
      </div>

      <button type="login" class="login-btn">Login</button>
    </form>
</div>

  </div>
</template>

<script>
import authService from '@/services/authService';

export default {
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
      errorMessage: '', 
    };
  },
  methods: {
    async submitLoginForm() {
      try {
        // eslint-disable-next-line no-unused-vars
        const response = await authService.SignIn(this.form);
        if( response && response.data && response.data.accessToken){
        localStorage.setItem('expensemanagementToken' , response.data.accessToken)
        this.$router.push('/');

        }
        
        this.errorMessage = ''; 
      } catch (error) {
        // Handle error
        if (error.response && error.response.status === 401) {
          this.errorMessage = 'Unauthorized: Invalid username or password.';
        } else {
          this.errorMessage = 'An error occurred. Please try again later.';
        }
      }
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
.login-form {
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

.signup {
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


.login-btn {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 12px 25px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.login-btn:hover {
  background-color: #359a68;
}
</style>







 