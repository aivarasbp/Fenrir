const product = {
  name: 'Fenrir',
  price: 1000,
  description: 'The best game ever',
  stock: 100,
  sold: 0
}

console.log(product.name);



let V = 5;
let V2 = V;

V2++;

console.log(V);

console.log(V2);

const O = {
  name: 'Fenrir',
  sk: 5
}

const O2 = O; // by reference

const O3 = { ...O }; // copy by value

const O4 = { ...O, salt: 99 };

const O5 = {
  ...O, salt: 99, price: 1000, description: 'The best game ever'
};

O2.sk++;

console.log(O, O2);