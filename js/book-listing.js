
const books = [
  { title: "To Kill a Mockingbird", author: "Harper Lee", price: "18.99", description: "A novel by American author Harper Lee.", coverImagePath: "image/to_kill_a_mockingbird_cover.jpg" },
  { title: "1984", author: "George Orwell", price: "15.99", description: "A dystopian social science fiction novel and cautionary tale.", coverImagePath: "image/book2.jpg" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: "14.99", description: "A novel set in the Jazz Age on Long Island near New York City.", coverImagePath: "image/thebook3.jpg" },
  { title: "Moby Dick", author: "Herman Melville", price: "19.99", description: "An epic tale of the sea and a detailed social commentary.", coverImagePath: "image/thebook4.jpeg" },
  { title: "Pride and Prejudice", author: "Jane Austen", price: "11.99", description: "A romantic novel of manners.", coverImagePath: "image/thebook5.jpg" },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", price: "12.99", description: "A story about the complexities of adolescence.", coverImagePath: "image/thebook6.jpeg" },
  { title: "The Lord of the Rings", author: "J.R.R. Tolkien", price: "22.99", description: "An epic high-fantasy novel.", coverImagePath: "image/thebook7.jpeg" },
  { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", price: "16.99", description: "The first novel in the Harry Potter series and Rowling's debut novel.", coverImagePath: "image/thebook8.jpeg" },
  { title: "The Alchemist", author: "Paulo Coelho", price: "14.99", description: "A symbolic story that urges its readers to follow their dreams.", coverImagePath: "image/thebook9.jpg" },
  { title: "To the Lighthouse", author: "Virginia Woolf", price: "13.99", description: "A landmark novel of high modernism.", coverImagePath: "image/thebook10.jpeg" },
  { title: "Crime and Punishment", author: "Fyodor Dostoevsky", price: "17.99", description: "A novel by the Russian author Fyodor Dostoevsky.", coverImagePath: "image/thebook11.jpeg" },
  { title: "Brave New World", author: "Aldous Huxley", price: "18.99", description: "A dystopian novel by English author Aldous Huxley.", coverImagePath: "image/thebook12.jpg" },
  { title: "Frankenstein", author: "Mary Shelley", price: "9.99", description: "A novel written by English author Mary Shelley.", coverImagePath: "image/thebook13.jpg" },
  { title: "The Adventures of Huckleberry Finn", author: "Mark Twain", price: "13.99", description: "A novel by Mark Twain, first published in the United Kingdom in December 1884.", coverImagePath: "image/thebook14.jpg" },
  { title: "Jane Eyre", author: "Charlotte Brontë", price: "12.99", description: "A novel by English writer Charlotte Brontë, published under the pen name 'Currer Bell'.", coverImagePath: "image/thebook15.jpeg" }
];
function displayBooks() {
  const booksContainer = document.querySelector('.books-grid');
  booksContainer.innerHTML = '';
  books.forEach(book => {
    const title = encodeURIComponent(book.title);
    const author = encodeURIComponent(book.author);
    const price = encodeURIComponent(book.price);
    const description = encodeURIComponent(book.description);
    const buyNowLink = `books-description.html?title=${title}&author=${author}&price=${price}&description=${description}&coverImagePath=${encodeURIComponent(book.coverImagePath)}`;
    const bookHTML = `
      <div class="book">
        <img src="${book.coverImagePath}" alt="${book.title} Cover" class="book-image">
        <div class="book-info">
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Price: $${book.price}</p>
            <a href="${buyNowLink}" class="btn">Order</a>
        </div>
      </div>
    `;
    booksContainer.innerHTML += bookHTML;
  });
}

document.addEventListener('DOMContentLoaded', function() {
  displayBooks();
 
  document.querySelector('nav.navbar a[href="#home"]').setAttribute('href', 'index.html');
  document.querySelector('nav.navbar a[href="#featured"]').setAttribute('href', 'index.html#featured');
  document.querySelector('nav.navbar a[href="#arrivals"]').setAttribute('href', 'index.html#arrivals');
  document.querySelector('nav.navbar a[href="#reviews"]').setAttribute('href', 'index.html#reviews');
  
  const sellRentLink = document.createElement('a');
  sellRentLink.href = "#sellRent"; 
  sellRentLink.textContent = "Sell/Rent Your Own Book";
  document.querySelector('nav.navbar').appendChild(sellRentLink);
});