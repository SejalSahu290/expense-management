<template>

<!-- <button class="add-expense-btn" @click="addExpense">Add Expense</button> -->

 <!-- Add Expense Button as a Route Link -->


  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->

  <router-view/>
 
</template>


<script>
  
</script>



<style>
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

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

/* Add Expense Button Styling */
.add-expense-btn {
  background-color: #42b983;  
  color: white;
  border: none;
  padding: 12px 25px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 8px;
  margin-bottom: 20px;
  text-align: left;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.add-expense-btn:hover {
  background-color: #359a68;  
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);  
}

.add-expense-btn:active {
  background-color: #2a7d55;  
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);  
  transform: scale(0.98); 
}


nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>



