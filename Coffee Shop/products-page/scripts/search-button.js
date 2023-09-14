document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');
  const clearButton = document.getElementById('clearButton');
  const productsList = document.querySelector('.products-list');
  const productItems = productsList.querySelectorAll('li');

  const originalProductOrder = Array.from(productItems);
  // Add event listener to the search button
  searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.toLowerCase();

    productItems.forEach(item => {
      const productImage = item.querySelector('.product');
      const productClass = productImage.classList;

      if (productClass.contains(searchTerm)) {
        item.style.opacity = 1; // Set opacity to 1 for searched items
        item.classList.add('fadeIn'); // Add fadeIn class to newly appearing items
      } else {
        item.style.opacity = 0; // Set opacity to 0 for hidden items
        item.classList.remove('fadeIn'); // Remove fadeIn class from hidden items
      }
    });

    // Move matching products to the beginning of the list
    const visibleItems = Array.from(productsList.querySelectorAll('li[style="opacity: 1;"]'));
    visibleItems.forEach(item => {
      productsList.prepend(item);
    });
  });

  // Add event listener to the clear button
  clearButton.addEventListener('click', () => {
    searchInput.value = ''; // Clear the search input

    // Remove the fadeIn class and set opacity to 0 for all items
    productItems.forEach(product => {
      product.classList.remove('fadeIn');
      product.style.opacity = 0;
    });

    // Remove all items and then re-append them in their original order
    productItems.forEach(item => item.remove());
    originalProductOrder.forEach(item => productsList.appendChild(item));
    
    // Apply fadeIn class and set opacity to 1 for displayed items
    originalProductOrder.forEach(product => {
      product.classList.add('fadeIn');
      product.style.opacity = 1;
    });
  });
});
