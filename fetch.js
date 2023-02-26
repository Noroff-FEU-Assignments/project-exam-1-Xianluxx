const baseUrl = "https://www.bjetenterprises.tech/wp-json"

async function getProductgs(url){
    const response = await fetch(url);
    const products = response.json();
    console.log(products);
}

getProductgs(baseUrl);
