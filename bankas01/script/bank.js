const LAST_ID_LS = "accountsLastSavedId";
const ACCOUNTS_LS = "accountList";
const modal = document.querySelector(".modal");
const listHtml = document.querySelector("#accountsContainer");

const generateUniqueId = () => {
  return "LT" + Math.random().toString(36).substr(2, 9);
};

const write = (data) => {
  localStorage.setItem(ACCOUNTS_LS, JSON.stringify(data));
};

const read = () => {
  const data = localStorage.getItem(ACCOUNTS_LS);
  return data ? JSON.parse(data) : [];
};

const storeData = (data) => {
  const storedData = read();
  data.id = generateUniqueId();
  storedData.push(data);
  write(storedData);
};

const destroyData = (id) => {
  const storedData = read();
  const updatedData = storedData.filter((account) => account.id !== id);
  write(updatedData);
};

const updateData = (newData) => {
  const storedData = read();
  const updatedData = storedData.map((account) => {
    if (account.id === newData.id) {
      return newData;
    }
    return account;
  });
  write(updatedData);
};

const openNewAccountModal = () => {
  modal.style.display = "flex";
};

const closeModal = () => {
  modal.style.display = "none";
};

const createAccount = () => {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const initialBalance = parseFloat(document.getElementById("accBalance").value);

  const account = {
    firstName,
    lastName,
    balance: initialBalance,
  };

  storeData(account);
  closeModal();
  loadAccounts();
};

const loadAccounts = () => {
  let accountsHtml = "";
  const accounts = read();
  accounts.forEach((account) => {
    let balanceStyle = "";
    if (account.balance > 0) {
      balanceStyle = "color: #13cd13;";
    } else if (account.balance < 0) {
      balanceStyle = "color: crimson;";
    } else {
      balanceStyle = "color: white;";
    }

    accountsHtml += `
      <div class="accountModal">
        <div class="accId"><b>${account.id}</b></div>
        <div> ${account.firstName} ${account.lastName}</div>
        <div class="accBalance" style="${balanceStyle}">${account.balance} <span style="color: white;">$</span></div>
        <div class="accBtn">
          <button type="button" class="transfer" data-id="${account.id}">Transfer</button>
          <button type="button" class="insertMoney" data-id="${account.id}" onclick="openInsertMoneyModal()">Insert Money</button>
          <button type="button" class="deleteAcc" data-id="${account.id}">Delete</button>
        </div>
        <div class="openAccount"><a href="http://127.0.0.1:5500/bankas01/account.html">Open Account</a></div>
      </div>
    `;
  });
  listHtml.innerHTML = accountsHtml;
  registerDelete();
  registerTransfer();
};



const openInsertMoneyModal = (accountId) => {
  const insertMoneyForm = `
    <div class="subModal">
    <span class="close" onclick="closeModal()">&times;</span>
    <label for="newAmount">New Amount:</label>
    <input type="number" id="newAmount" name="newAmount" min="0">
    <button type="button" onclick="updateAccountBalance('${accountId}')">Update Balance</button>
    </div>
  `;
  modal.innerHTML = insertMoneyForm;
  modal.style.display = "flex";
};

const updateAccountBalance = (accountId) => {
  console.log("Updating account balance for account with ID:", accountId);

  const newAmount = parseInt(document.getElementById("newAmount").value);
  console.log("New amount:", newAmount);

  const accounts = read();
  console.log("Accounts:", accounts);

  const account = accounts.find((acc) => acc.id === accountId);

  if (!account) {
    console.error("Account not found");
    return;
  }

  account.balance = newAmount;

  updateData(account);
  loadAccounts();
  closeModal();
};

const registerDelete = () => {
  const deleteButtons = document.querySelectorAll(".deleteAcc");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const accountId = e.currentTarget.getAttribute("data-id");
      const account = read().find((account) => account.id === accountId);
      if (account) {
        if (account.balance === 0) {
          destroyData(accountId);
          loadAccounts();
        } else {
          alert(
            "You cannot delete an account with a balance greater than zero.",
          );
        }
      } else {
        console.error("Account not found");
      }
    });
  });
};

const registerTransfer = () => {
  const transferButtons = document.querySelectorAll(".transfer");
  transferButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const accountId = e.currentTarget.getAttribute("data-id");
      openTransferModal(accountId);
    });
  });
};

const openTransferModal = (senderId) => {
  const accounts = read().filter((account) => account.id !== senderId);
  let optionsHtml = "";
  accounts.forEach((account) => {
    optionsHtml += `<option value="${account.id}">${account.firstName} ${account.lastName}</option>`;
  });
  const transferForm = `
    <div class="subModal">
    <span class="close" onclick="closeModal()">&times;</span>
    <label for="amount">Amount:</label>
    <input type="number" id="amount" name="amount" min="0">
    <label for="receiver">Receiver:</label>
    <select id="receiver" name="receiver">
      ${optionsHtml}
    </select>
    <button type="button" onclick="transferMoney('${senderId}')">Transfer</button>
    </div>
  `;
  modal.innerHTML = transferForm;
  modal.style.display = "flex";
};

const transferMoney = (senderId) => {
  const amount = parseInt(document.getElementById("amount").value);
  const receiverId = document.getElementById("receiver").value;

  const senderAccount = read().find((account) => account.id === senderId);
  const receiverAccount = read().find((account) => account.id === receiverId);

  if (!senderAccount || !receiverAccount) {
    alert("Sender or receiver account not found");
    return;
  }

  if (senderAccount.balance < amount) {
    alert("Insufficient balance");
    return;
  }

  senderAccount.balance -= amount;
  receiverAccount.balance += amount;

  updateData(senderAccount);
  updateData(receiverAccount);

  loadAccounts();
  closeModal();
};

const deleteAllAccounts = () => {
  localStorage.removeItem(ACCOUNTS_LS);

  loadAccounts();
};
document
  .getElementById("deleteAllAccountsBtn")
  .addEventListener("click", deleteAllAccounts);


loadAccounts();



