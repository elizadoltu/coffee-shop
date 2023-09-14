const clearButton = document.getElementById('clearButton');

clearButton.addEventListener('click', () => {
  searchInput.value = ''; // Clear the search input
  
  const products = document.querySelectorAll('.product'); // Define the products array here
  
  products.forEach(product => {
    product.style.display = 'block'; // Show all products
  });
});
