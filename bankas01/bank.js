const LAST_ID_LS = 'accountsLastSavedId';
const ACCOUNTS_LS = 'accountList';
const modal = document.querySelector('.modal');
const listHtml = document.querySelector('#accountsContainer');


const generateUniqueId = () => {
  return '_' + Math.random().toString(36).substr(2, 9); // Generate a random string
}

const write = data => {
  localStorage.setItem(ACCOUNTS_LS, JSON.stringify(data));
}

const read = () => {
  const data = localStorage.getItem(ACCOUNTS_LS);
  return data ? JSON.parse(data) : [];
}

const storeData = data => {
  const storedData = read();
  data.id = generateUniqueId(); // Generate ID for the new account
  storedData.push(data);
  write(storedData); // Write updated data back to local storage
}

const destroyData = id => {
  const storedData = read();
  const updatedData = storedData.filter(account => account.id !== id);
  write(updatedData);
}

const updateData = newData => {
  const storedData = read();
  const updatedData = storedData.map(account => {
    if (account.id === newData.id) {
      return newData;
    }
    return account;
  });
  write(updatedData);
}

const openNewAccountModal = () => {
  modal.style.display = 'flex';
}

const closeModal = () => {
  modal.style.display = 'none';
}

const createAccount = () => {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const initialBalance = 0;

  const account = {
    firstName,
    lastName,
    balance: initialBalance
  };

  storeData(account);
  closeModal();
  loadAccounts();
}

const loadAccounts = () => {
  let accountsHtml = '';
  const accounts = read();
  accounts.forEach(account => {
    accountsHtml += `
      <div class="account">
        <div>ID: ${account.id}</div>
        <div>Name: ${account.firstName} ${account.lastName}</div>
        <div>Balance: ${account.balance}</div>
        <div class="accBtn">
          <button type="button" class="transfer" data-id="${account.id}">Transfer</button>
          <button type="button" class="insertMoney" data-id="${account.id}">Insert Money</button>
          <button type="button" class="deleteAcc" data-id="${account.id}">Delete</button>
        </div>
      </div>
    `;
  });
  listHtml.innerHTML = accountsHtml;
  registerDelete();
  registerTransfer();
}

const registerDelete = () => {
  const deleteButtons = document.querySelectorAll('.deleteAcc');
  deleteButtons.forEach(button => {
    button.addEventListener('click', e => {
      const accountId = e.currentTarget.getAttribute('data-id');
      const account = read().find(account => account.id === accountId);
      if (account) {
        if (account.balance === 0) {
          destroyData(accountId);
          loadAccounts();
        } else {
          alert('You cannot delete an account with a balance greater than zero.');
        }
      } else {
        console.error('Account not found');
      }
    });
  });
}

const registerTransfer = () => {
  const transferButtons = document.querySelectorAll('.transfer');
  transferButtons.forEach(button => {
    button.addEventListener('click', e => {
      const accountId = e.currentTarget.getAttribute('data-id');
      openTransferModal(accountId);
    });
  });
}

const openTransferModal = (senderId) => {
  const accounts = read().filter(account => account.id !== senderId);
  let optionsHtml = '';
  accounts.forEach(account => {
    optionsHtml += `<option value="${account.id}">${account.firstName} ${account.lastName}</option>`;
  });
  const transferForm = `
    <span class="close" onclick="closeModal()">&times;</span>
    <label for="amount">Amount:</label>
    <input type="number" id="amount" name="amount" min="0">
    <label for="receiver">Receiver:</label>
    <select id="receiver" name="receiver">
      ${optionsHtml}
    </select>
    <button type="button" onclick="transferMoney('${senderId}')">Transfer</button>
  `;
  modal.innerHTML = transferForm;
  modal.style.display = 'flex';
}

const transferMoney = (senderId) => {
  const amount = parseInt(document.getElementById('amount').value);
  const receiverId = document.getElementById('receiver').value;

  const senderAccount = read().find(account => account.id === senderId);
  const receiverAccount = read().find(account => account.id === receiverId);

  if (!senderAccount || !receiverAccount) {
    console.error('Sender or receiver account not found');
    return;
  }

  if (senderAccount.balance < amount) {
    console.error('Insufficient balance');
    return;
  }

  senderAccount.balance -= amount;
  receiverAccount.balance += amount;

  updateData(senderAccount);
  updateData(receiverAccount);

  loadAccounts();
}

const deleteAllAccounts = () => {
  localStorage.removeItem(ACCOUNTS_LS);
  // Reload the accounts list to reflect the changes
  loadAccounts();
}
document.getElementById('deleteAllAccountsBtn').addEventListener('click', deleteAllAccounts);

// Load accounts immediately when the page loads
loadAccounts();
