<!-- eslint-disable vue/multi-word-component-names --> 
 <template>
 <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
        <button class="btn btn-danger btn-sm" @click="submitLogoutForm">Logout</button>
  </div>
</nav>
</template>

<script>

export default {

   methods: {
    submitLogoutForm() {
    try {
      localStorage.removeItem('expensemanagementToken');
      console.log('login')
      this.$router.push('/login');
    }
    catch (error) {
      console.error('An error occurred during logout', error);
      this.errorMessage = 'An error occurred during logout. Please try again.';
    }
  }
   }
}


</script>

<style>

.container-fluid{
    background-color: #009879;
}

.btn btn-outline-success{
    background:white;
}

.navbar-brand {
  color: #ffffff; 
}


</style>




   