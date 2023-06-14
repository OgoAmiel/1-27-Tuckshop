document.addEventListener('DOMContentLoaded', function() {
    var currentUrl = window.location.href;
    var navLinks = document.querySelectorAll('nav ul li a');
  
    for (var i = 0; i < navLinks.length; i++) {
      if (navLinks[i].href === currentUrl) {
        navLinks[i].classList.add('active');
      }
    }
  });
  document.addEventListener('DOMContentLoaded', function() {
    var contactForm = document.getElementById('contact-form');
    var responseDiv = document.getElementById('response');
  
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();

      var responseMessage = 'Thank you for contacting us! We will get back to you soon.';
      responseDiv.textContent = responseMessage;
      contactForm.reset();
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    var eventsContainer = document.getElementById('events-container');
    var eventForm = document.getElementById('event-form');
    var eventResponseDiv = document.getElementById('event-response');
  
    var eventsData = [
      { title: 'June 16th', date: '2023-06-16', description: 'Come join us at Hatfield Community Church as we celebrate 16th' },
      { title: 'Event 2', date: '2023-06-15', description: 'Description of Event 2' },
      { title: 'Event 3', date: '2023-07-01', description: 'Description of Event 3' }
    ];
  
    eventsData.forEach(function(event) {
      var eventCard = document.createElement('div');
      eventCard.classList.add('event-card');
  
      var title = document.createElement('h3');
      title.textContent = event.title;
  
      var date = document.createElement('p');
      date.textContent = 'Date: ' + event.date;
  
      var description = document.createElement('p');
      description.textContent = event.description;
  
      eventCard.appendChild(title);
      eventCard.appendChild(date);
      eventCard.appendChild(description);
  
      eventsContainer.appendChild(eventCard);
    });
  
    eventForm.addEventListener('submit', function(e) {
      e.preventDefault();
      var titleInput = document.getElementById('event-title');
      var dateInput = document.getElementById('event-date');
      var descriptionInput = document.getElementById('event-description');
  
      var newEvent = {
        title: titleInput.value,
        date: dateInput.value,
        description: descriptionInput.value
      };
      eventsData.push(newEvent);
  
      titleInput.value = '';
      dateInput.value = '';
      descriptionInput.value = '';

      eventsContainer.innerHTML = '';
  
      eventsData.forEach(function(event) {
        var eventCard = document.createElement('div');
        eventCard.classList.add('event-card');
  
        var title = document.createElement('h3');
        title.textContent = event.title;
  
        var date = document.createElement('p');
        date.textContent = 'Date: ' + event.date;
  
        var description = document.createElement('p');
        description.textContent = event.description;
  
        eventCard.appendChild(title);
        eventCard.appendChild(date);
        eventCard.appendChild(description);
  
        eventsContainer.appendChild(eventCard);
      });
      eventResponseDiv.textContent = 'Event added successfully!';
    });
  });
  function addToCart() {
    var product = document.getElementById('product').value;
    var quantity = document.getElementById('quantity').value;
    
    document.getElementById('cart-summary').innerHTML = 'Product: ' + product + '<br>Quantity: ' + quantity;
  }
  
  function placeOrder() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    
    document.getElementById('order-summary').innerHTML = 'Name: ' + name + '<br>Email: ' + email + '<br>Address: ' + address;
  }
  let cartItems = [];

function addToCart(price) {
  cartItems.push(price);
  updateOrderSummary();
}

function updateOrderSummary() {
  const orderSummary = document.getElementById('order-summary');
  orderSummary.innerHTML = '';

  cartItems.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.textContent = 'Item: $' + item;
    orderSummary.appendChild(itemDiv);
  });

  const totalAmount = document.getElementById('total-amount');
  const total = cartItems.reduce((sum, item) => sum + item, 0);
  totalAmount.textContent = '$' + total;
}

function placeOrder() {
  alert('Order placed successfully!');
  cartItems = [];
  updateOrderSummary();
}

      