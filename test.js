const items = document.querySelectorAll('.accordion li');

items.forEach(item => {
  item.addEventListener('click', event => {
    const content = item.querySelector('.content');
    const isActive = item.classList.contains('active');
    
    items.forEach(item => item.classList.remove('active'));
    
    if (!isActive) {
      item.classList.add('active');
    }
  });
});
