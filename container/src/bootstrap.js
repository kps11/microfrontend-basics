import  { mount as productMount} from 'products/ProductsIndex';
import  { mount as cartMount } from 'cart/CartIndex';

console.log("container")
productMount(document.querySelector('#my-product'))
cartMount (document.querySelector("#my-cart"))