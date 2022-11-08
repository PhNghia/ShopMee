fetch('http://localhost:3000/products')
    .then(res => res.json())
    .then(res => console.log(res))