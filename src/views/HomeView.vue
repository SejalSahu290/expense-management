

 <template>
<h1>Expense Management</h1>
<router-link to="/add-expense" class="add-expense-btn">Add Expense</router-link>
  <div class="home">
    <table class="styled-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Description</th>
          <th>Amount</th>
          <!-- <th>Status</th> -->
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row.id">
          <td>{{ row.id }}</td>
          <td>{{ row.title }}</td>
          <td>{{ row.description }}</td>
          <td>{{ row.amount }}</td>
          <!-- <td>
            <span :class="{'status-active': row.status, 'status-inactive': !row.status}">
              {{ row.status ? 'Active' : 'Inactive' }}
            </span>
          </td> -->
          <td>
            <button class="edit-btn" @click="editRow(row)">Edit</button>
            <button class="delete-btn" @click="deleteRow(row.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import expenseService from '@/services/expenseService';


export default {
  name: 'HomeView',
  data() {

    return {
      rows: [],
    };
  },
   async mounted(){
        const response = await expenseService.fetchExpense();
        this.rows = response;
   },
  methods: {
    editRow(row) {
      // Logic to edit the row (can be a form, a modal, etc.)
      alert(`Editing row with ID: ${row.id}`);
    },
   async deleteRow(id) {
      // Logic to delete the row (filter it out of rows array)
       this.rows = this.rows.filter(row => row.id !== id);
       await expenseService.DeleteExpense(id);
      // alert(`Deleted row with ID: ${id}`);
    }
  }
};
</script>

<style scoped>
.home {
  margin: 20px;
  font-family: Arial, sans-serif;
}

.styled-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 16px;
  text-align: left;
}

.styled-table th,
.styled-table td {
  padding: 12px 15px;
}

.styled-table thead tr {
  background-color: #009879;
  color: #ffffff;
  text-align: left;
}

.styled-table tbody tr {
  border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
  border-bottom: 2px solid #009879;
}

.styled-table tbody tr:hover {
  background-color: #f1f1f1;
  cursor: pointer;
}

.status-active {
  color: green;
  font-weight: bold;
}

.status-inactive {
  color: red;
  font-weight: bold;
}

/* Action button styles */
.edit-btn, .delete-btn {
  padding: 5px 10px;
  margin-right: 5px;
  border: none;
  cursor: pointer;
  color: #ffffff;
}

.edit-btn {
  background-color: #4caf50;
}

.delete-btn {
  background-color: #f44336;
}

.edit-btn:hover {
  background-color: #45a049;
}

.delete-btn:hover {
  background-color: #e53935;
}
</style>

