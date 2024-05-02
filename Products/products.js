console.log('products.js');

const html = `
<div class="product">
    <div>
        <div class="id">ID:{{id}}</div>
        <div class="title">{{title}}</div>
        <div class="price">{{price}}eur</div>
    </div>
    <div>
        <button type="button" value="{{id}}" class="gray --edit">Edit</button>
        <button type="button" value="{{id}}" class="red --delete">Delete</button>
    </div>
</div>
`;


window.addEventListener('load', _ => {

  const LAST_ID_LS = 'productsLastSavedId';
  const PRODUCTS_LS = 'productsList';
  let destroyId = 0;
  let updateId = 0;

  const listHtml = document.querySelector('.--list');
  const closeButtons = document.querySelectorAll('.--close');
  const createButton = document.querySelector('.--create');

  //create
  const createModal = document.querySelector('.modal--create');
  const storeButton = createModal.querySelector('.--submit');

  //delete
  const deleteModal = document.querySelector('.modal--delete');
  const destroyButton = deleteModal.querySelector('.--submit');

  //edit
  const editModal = document.querySelector('.modal--edit');
  const updateButton = editModal.querySelector('.--submit');


  // LS functions

  const getId = _ => {
    const id = localStorage.getItem(LAST_ID_LS);
    if (null === id) {
      localStorage.setItem(LAST_ID_LS, 1);
      return 1;
    }
    localStorage.setItem(LAST_ID_LS, parseInt(id) + 1);
    return parseInt(id) + 1;
  }

  const write = data => {
    localStorage.setItem(PRODUCTS_LS, JSON.stringify(data));
  }

  const read = _ => {
    const data = localStorage.getItem(PRODUCTS_LS);
    if (null === data) {
      return [];
    }
    return JSON.parse(data);
  }

  const storeData = data => {
    const storeData = read();
    data.id = getId();
    storeData.push(data);
    write(storeData);
  }

  const destroyData = id => {
    const data = read();
    const deleteData = data.filter(d => d.id !== id);
    write(deleteData);
  }

  const updateData = (id, data) => {
    const updateData = read().map(p => p.id == id ? { ...data, id } : p);
    write(updateData);
  }

  // LS functions



  // DOM

  const showModal = modal => modal.style.display = 'flex';

  const hideModal = modal => {
    modal.querySelectorAll('[name]').forEach(i => {
      i.value = '';
    });
    modal.style.display = 'none';
  }

  const showList = _ => {
    let productsHtml = '';
    read().forEach(p => {
      let temp = html;
      temp = temp.replaceAll('{{id}}', p.id);
      temp = temp.replaceAll('{{price}}', p.productPrice);
      temp = temp.replaceAll('{{title}}', p.productTitle);
      productsHtml += temp;
    });
    listHtml.innerHTML = productsHtml;
    registerDelete();
    registerEdit();
  }

  const prepareDeleteModal = id => {
    const title = read().find(p => p.id == id).productTitle;
    deleteModal.querySelector('.product--title').innerText = title;
  }

  const prepareEditModal = id => {
    const product = read().find(p => p.id == id);
    editModal.querySelectorAll('[name]').forEach(i => {
      i.value = product[i.getAttribute('name')];
    });
  }

  // DOM



  // CRUD

  const getDataFromForm = form => {
    const data = {};
    form.querySelectorAll('[name]').forEach(i => {
      data[i.getAttribute('name')] = i.value;
    });
    return data;
  }

  const store = _ => {
    const data = getDataFromForm(createModal); // CRUD
    storeData(data); // LS
    hideModal(createModal); // DOM
    showList(); // DOM
  }

  const destroy = _ => {
    destroyData(destroyId) // LS
    hideModal(deleteModal); // DOM
    showList(); // DOM
  }

  const update = _ => {
    const data = getDataFromForm(editModal); // CRUD
    updateData(updateId, data); // LS
    hideModal(editModal); // DOM
    showList(); // DOM
  }

  // CRUD



  // Events

  const registerDelete = _ => {
    document.querySelectorAll('.--delete').forEach(b => {
      b.addEventListener('click', _ => {
        showModal(deleteModal);
        prepareDeleteModal(parseInt(b.value));
        destroyId = parseInt(b.value);
      });
    });
  }


  const registerEdit = _ => {
    document.querySelectorAll('.--edit').forEach(b => {
      b.addEventListener('click', _ => {
        showModal(editModal);
        prepareEditModal(parseInt(b.value));
        updateId = parseInt(b.value);
      });
    });
  }



  // Events


  // DEV

  const devButton = document.querySelector('.seed');
  devButton.addEventListener('click', _ => {
    seed();
    showList();
  })

  // DEV



  // START

  // Events

  closeButtons.forEach(b => {
    b.addEventListener('click', _ => {
      hideModal(b.closest('.--modal'));
    });
  });

  createButton.addEventListener('click', _ => showModal(createModal));

  storeButton.addEventListener('click', _ => store());

  destroyButton.addEventListener('click', _ => destroy());

  updateButton.addEventListener('click', _ => update());

  // Events

  setTimeout(_ => showList(), 2000);






  // LS data

  const seedData = [
    {
      id: 1,
      productTitle: "Smartphone",
      productPrice: 499.99,
      productDesc: "A high-performance smartphone with the latest features."
    },
    {
      id: 2,
      productTitle: "Laptop",
      productPrice: 999.99,
      productDesc: "Powerful laptop for work and entertainment purposes."
    },
    {
      id: 3,
      productTitle: "Headphones",
      productPrice: 149.99,
      productDesc: "Wireless headphones with noise cancellation technology."
    },
    {
      id: 4,
      productTitle: "Smart TV",
      productPrice: 799.99,
      productDesc: "Ultra HD smart TV with built-in streaming services."
    },
    {
      id: 5,
      productTitle: "Gaming Console",
      productPrice: 399.99,
      productDesc: "Next-generation gaming console for immersive gaming experiences."
    },
    {
      id: 6,
      productTitle: "Tablet",
      productPrice: 299.99,
      productDesc: "Portable tablet for browsing, gaming, and productivity tasks."
    },
    {
      id: 7,
      productTitle: "Fitness Tracker",
      productPrice: 79.99,
      productDesc: "Track your daily activity, heart rate, and sleep quality with this fitness tracker."
    },
    {
      id: 8,
      productTitle: "Smartwatch",
      productPrice: 199.99,
      productDesc: "Stay connected and track your fitness goals with this stylish smartwatch."
    },
    {
      id: 9,
      productTitle: "Bluetooth Speaker",
      productPrice: 69.99,
      productDesc: "Portable Bluetooth speaker with rich sound and long battery life."
    },
    {
      id: 10,
      productTitle: "Digital Camera",
      productPrice: 449.99,
      productDesc: "Capture stunning photos and videos with this advanced digital camera."
    }
  ];

  const seed = _ => {
    write(seedData);
    localStorage.setItem(LAST_ID_LS, 10);
  }

});