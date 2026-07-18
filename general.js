const axios = require('axios');

// The base URL for your local Express server
const baseURL = "http://localhost:5000";

// -------------------------------------------------------------------
// Task 10: Retrieve all books 
// Approach: Async/Await with Axios
// -------------------------------------------------------------------
const getAllBooks = async () => {
  try {
    const response = await axios.get(`${baseURL}/`);
    console.log("All Books:\n", response.data);
  } catch (error) {
    console.error("Error retrieving all books:", error.message);
  }
};

// -------------------------------------------------------------------
// Task 11: Retrieve book details by ISBN
// Approach: Promise Callbacks (.then / .catch) with Axios
// -------------------------------------------------------------------
const getBookByISBN = (isbn) => {
  axios.get(`${baseURL}/isbn/${isbn}`)
    .then((response) => {
      console.log(`\nBook details for ISBN ${isbn}:\n`, response.data);
    })
    .catch((error) => {
      console.error(`Error retrieving book by ISBN ${isbn}:`, error.message);
    });
};

// -------------------------------------------------------------------
// Task 12: Retrieve book details by Author
// Approach: Async/Await with Axios
// -------------------------------------------------------------------
const getBookByAuthor = async (author) => {
  try {
    const response = await axios.get(`${baseURL}/author/${author}`);
    console.log(`\nBooks by author "${author}":\n`, response.data);
  } catch (error) {
    console.error(`Error retrieving books by author "${author}":`, error.message);
  }
};

// -------------------------------------------------------------------
// Task 13: Retrieve book details by Title
// Approach: Promise Callbacks (.then / .catch) with Axios
// -------------------------------------------------------------------
const getBookByTitle = (title) => {
  axios.get(`${baseURL}/title/${title}`)
    .then((response) => {
      console.log(`\nBooks with title "${title}":\n`, response.data);
    })
    .catch((error) => {
      console.error(`Error retrieving books by title "${title}":`, error.message);
    });
};

// ===================================================================
// Execution Calls
// Uncomment the functions below to execute and test them in your terminal
// ===================================================================

// getAllBooks();
// getBookByISBN(1);
// getBookByAuthor("Chinua Achebe");
// getBookByTitle("Things Fall Apart");
