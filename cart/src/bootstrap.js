import faker from 'faker';


const mount = (el) =>{
    const cartText = `</br><div> You have ${faker.random.number()} item in your cart`;
    el.innerHTML = cartText

}

if( process.env.NODE_ENV == "development"){
    const el = document.querySelector("#dev-cart");

    if(el){
        mount(el)
    }
}

export {mount};

