// import axios from axios;
window.addEventListener('load', _ => {

  function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // const readButton = document.querySelector('#r');
  // const writeButton = document.querySelector('#w');
  // const digitsDiv = document.querySelector('digits');

  // writeButton.addEventListener('click', _ => {
  //   const data = {
  //     digit: ++counter
  //   }

  //   axios.post('http://localhost/write', data)
  //     .then(res => {
  //       console.log(res.data);
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     });

  // });

  // readButton.addEventListener('click', _ => {
  //   axios.get('http://localhost/read')
  //     .then(res => {
  //       let html = '';
  //       res.data.digits.forEach(d => {
  //         html += `<li>${d.digit}</li>`;
  //       });
  //       digitsDiv.innerHTML = html;
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     });
  // });

  const sd = document.querySelector('.super-digit');

  sd.innerText = rand(0, 9);

});