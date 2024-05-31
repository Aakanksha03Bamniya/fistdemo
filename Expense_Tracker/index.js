document.addEventListener('DOMContentLoaded', function () {
   const expenseFrom = document.querySelector('#expense-form')
   const expenseList = document.querySelector('#expense-list');

   loadExpenses();

   // event listener for form submit

   expenseFrom.addEventListener('submit', function (elem) {
      elem.preventDefault()

      const expenseName = document.getElementById('expense-name').value;
      const expenseAmount = document.getElementById('expense-amount').value

      if (expenseAmount === '' || expenseName === '') {
         alert(' Please fill the all mendatory fields');
         return
      }

      const expense = {
         id: Date.now(),
         name: expenseName,
         amount: parseFloat(expenseAmount)
      }
      addExpense(expense)
      saveExpense(expense)
      expenseFrom.reset()


   })

   // add expenses 
   function addExpense(expense) {
      const li = document.createElement('li');
      li.innerHTML = `
       ${expense.name} : ${expense.amount}/-
       <button class="delete-btn" data-id="${expense.id}">Delete</button
       `
      expenseList.appendChild(li)


      // add event listenr on delete button 

      li.querySelector('.delete-btn').addEventListener('click', function () {
         deleteExpense(expense.id);
         li.remove();
      })


   }


   // save expenses

   function saveExpense(expense) {
      let expenses = getExpenses();
      expenses.push(expense)
      localStorage.setItem('expenses', JSON.stringify(expenses))
   }

   // load expense

   function loadExpenses() {
      const expenses = getExpenses();
      expenses.forEach(expense => addExpense(expense)

      );
   }


   // get expense to local storage 

   function getExpenses() {
      return localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem('expenses')) : [];
   }


   // delete expense

   function deleteExpense(id) {
      let expenses = getExpenses();
      expenses = expenses.filter(expense => expense.id !== id)
      localStorage.setItem('expenses', JSON.stringify(expenses))
   }
})