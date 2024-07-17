function displayNintendoSwitchResults(results) {
    const resultsContainer = document.getElementById('mercado-libre-results');
    resultsContainer.innerHTML = '';
    
    results.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.className = 'result-item col-md-4 col-lg-3';
      
      itemElement.innerHTML = `
        <div class="card">
          <img src="${item.thumbnail}" class="card-img-top" alt="${item.title}">
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text">${item.price}</p>
          </div>
        </div>
      `;
      resultsContainer.appendChild(itemElement);
    });
  }
  
  fetch('https://api.mercadolibre.com/sites/MLA/search?q=one%20piece')
    .then(response => response.json())
    .then(data => {
      displayNintendoSwitchResults(data.results);
    })
    .catch(error => console.error('Error:', error));
  