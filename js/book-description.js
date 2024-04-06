document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const title = urlParams.get('title');
    const author = urlParams.get('author');
    const price = urlParams.get('price');
    const description = urlParams.get('description');
    const imageName = title.toLowerCase().replace(/ /g, '_') + '.jpg';
    const imagePath = `images/${imageName}`;

    document.getElementById('book-title').textContent = decodeURIComponent(title);
    document.getElementById('book-author').textContent = `Author: ${decodeURIComponent(author)}`;
    document.getElementById('book-price').textContent = `Price: $${decodeURIComponent(price)}`;
    document.getElementById('book-description').textContent = decodeURIComponent(description);
 
    const coverImagePath = urlParams.get('coverImagePath');

    const imageElement = document.createElement('img');
    imageElement.src = decodeURIComponent(coverImagePath);
    imageElement.alt = `Cover of ${decodeURIComponent(title)}`;
    imageElement.style.maxWidth = '100%'; 
    
    const bookDetailsDiv = document.querySelector('.book-details');
    bookDetailsDiv.insertBefore(imageElement, bookDetailsDiv.firstChild); 

    document.getElementById('btn-buy').addEventListener('click', function() {
        const quantity = parseInt(document.getElementById('quantity').value, 10);

        if (quantity <= 0) {
            alert("Please enter a valid quantity.");
            return;
        }

        const totalPrice = (quantity * parseFloat(price)).toFixed(2);

        window.location.href = `checkout.html?totalPrice=${totalPrice}&quantity=${quantity}`;
    });

    document.getElementById('btn-rent').addEventListener('click', function() {
        const quantity = parseInt(document.getElementById('quantity').value, 10);

        if (quantity <= 0) {
            alert("Please enter a valid quantity.");
            return;
        }

        const discountedPrice = (parseFloat(price) * 0.4).toFixed(2); 
        const totalPrice = (quantity * parseFloat(discountedPrice)).toFixed(2);

        window.location.href = `checkout.html?totalPrice=${totalPrice}&quantity=${quantity}&rental=true`;
    });
});