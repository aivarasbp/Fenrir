

// Function to generate a unique ID
const generateUniqueId = () => {
  return '_' + Math.random().toString(36).substr(2, 9); // Generate a random string
}

// Function to open the new account modal
const openNewAccountModal = () => {
  document.getElementById("newAccountModal").style.display = "block"; // Display the modal
}

// Function to close the modal
const closeModal = () => {
  document.getElementById("newAccountModal").style.display = "none"; // Hide the modal
}

// Event listener for "new Account" button
document.getElementById("newAccount").addEventListener("click", openNewAccountModal);

// Function to load and display accounts
const loadAccounts = () => {
  const accounts = JSON.parse(localStorage.getItem('accounts')) || [];
  const accountsContainer = document.getElementById('accountsContainer');
  accountsContainer.innerHTML = '';
  document.getElementById("newAccount").addEventListener("click", openNewAccountModal);


  accounts.forEach(account => {
    const accountElement = document.createElement('div');
    accountElement.innerHTML = `
      <div class="accountModal">
      <div>ID: ${account.id}</div>
      <div>Name: ${account.firstName} ${account.lastName}</div>
      <div>Balance: ${account.balance}</div>
      <div class="accBtn">
        <button class="transfer">Transfer</button>
        <button class="insertMoney">Insert Money</button>
        <button class="dltAcc">Delete</button>
      </div>
      </div>
      <hr>
    `;
    accountsContainer.appendChild(accountElement);
  });
}

const deleteAccount = document.querySelectorAll('.dltAcc');

deleteAccount.forEach(button => {
  button.addEventListener('click', e => {
    const id = e.target.parentElement.parentElement.querySelector('div:first-child').textContent;
    const accounts = JSON.parse(localStorage.getItem('accounts')) || [];
    const index = accounts.findIndex(account => account.id === id);
    accounts.splice(index, 1);
    localStorage.setItem('accounts', JSON.stringify(accounts));
    loadAccounts();
  });
});


// Function to create a new account
const createAccount = () => {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const accountId = generateUniqueId(); // Generate a unique ID
  const initialBalance = 0; // Initial balance for new account

  // Create the account object
  const account = {
    id: accountId,
    firstName,
    lastName,
    balance: initialBalance
  };

  // Save the account to LocalStorage
  saveAccount(account);

  // Update the account list
  loadAccounts();

  // Close the modal
  closeModal();
}

const saveAccount = (account) => {
  // Get existing accounts from LocalStorage or initialize an empty array
  let accounts = JSON.parse(localStorage.getItem('accounts')) || [];

  // Add the new account to the array
  accounts.push(account);

  // Save the updated accounts array back to LocalStorage
  localStorage.setItem('accounts', JSON.stringify(accounts));
}

setTimeout(_ => loadAccounts(), 3500);

