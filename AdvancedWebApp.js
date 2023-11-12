/*
Filename: AdvancedWebApp.js
Content: Advanced Web Application for online shopping
*/

// Global variables
const products = [
  { name: 'T-shirt', price: 20 },
  { name: 'Jeans', price: 50 },
  { name: 'Shoes', price: 80 }
];

let cart = [];

// User class
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.cart = [];
  }

  addToCart(product) {
    this.cart.push(product);
    console.log(`${product.name} added to cart.`);
  }

  removeFromCart(product) {
    const index = this.cart.findIndex(item => item.name === product.name);
    if (index !== -1) {
      this.cart.splice(index, 1);
      console.log(`${product.name} removed from cart.`);
    } else {
      console.log(`${product.name} not found in cart.`);
    }
  }

  viewCart() {
    console.log(`Shopping Cart (${this.cart.length} items):`);
    this.cart.forEach(item => console.log(`${item.name} - $${item.price}`));
  }
}

// Product class
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

// Interface class
class Interface {
  static startApp() {
    console.log('Welcome to our Advanced Web App!');
    console.log('Please login or sign up.');

    const user = this.login(); // Login or sign up new user

    while (true) {
      console.log('\nChoose an option:');
      console.log('1. View Products');
      console.log('2. Add Product to Cart');
      console.log('3. Remove Product from Cart');
      console.log('4. View Cart');
      console.log('5. Checkout & Exit');
      const option = prompt('Option: ');

      switch (option) {
        case '1':
          this.viewProducts();
          break;
        case '2':
          this.addProductToCart(user);
          break;
        case '3':
          this.removeProductFromCart(user);
          break;
        case '4':
          this.viewUserCart(user);
          break;
        case '5':
          this.checkout(user);
          return;
        default:
          console.log('Invalid option.');
          break;
      }
    }
  }

  static login() {
    const name = prompt('Name: ');
    const email = prompt('Email: ');
    console.log(`User ${name} logged in.`);
    return new User(name, email);
  }

  static viewProducts() {
    console.log('Product List:');
    products.forEach(product => console.log(`${product.name} - $${product.price}`));
  }

  static addProductToCart(user) {
    const productName = prompt('Enter product name: ');
    const product = products.find(item => item.name.toLowerCase() === productName.toLowerCase());

    if (product) {
      user.addToCart(product);
    } else {
      console.log('Product not found.');
    }
  }

  static removeProductFromCart(user) {
    const productName = prompt('Enter product name: ');
    const product = products.find(item => item.name.toLowerCase() === productName.toLowerCase());

    if (product) {
      user.removeFromCart(product);
    } else {
      console.log('Product not found.');
    }
  }

  static viewUserCart(user) {
    user.viewCart();
  }

  static checkout(user) {
    console.log(`Thank you for shopping, ${user.name}!`);
    console.log(`Your total amount is $${user.cart.reduce((total, item) => total + item.price, 0)}.`);
    console.log('Goodbye!');
  }
}

// Entry point
Interface.startApp();
