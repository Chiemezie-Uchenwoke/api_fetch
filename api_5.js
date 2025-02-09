// API endpoint for fetching recent users
const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';

// Set up query parameters
const queryParams = {
  timeframe: '30days',
};

// Convert query parameters to a string
const queryString = new URLSearchParams(queryParams).toString();

// Combine API endpoint with query parameters
const fullUrl = `${apiUrl}?${queryString}`;

// Make a GET request using the Fetch API
fetch(fullUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(recentUsers => {
    // Process the list of recent users
    console.log('Recent Users:', recentUsers);
  })
  .catch(error => {
    console.error('Error:', error);
  });