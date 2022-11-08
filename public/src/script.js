const url = "https://pure-thicket-73916.herokuapp.com"

fetch(`${url}/products`)
    .then(res => res.json())
    .then(res => console.log(res))