fetch("https://api.quotable.io/random")
    .then(data => data.json())
    .then(obj => {
        if (obj) {
            const quote = document.getElementById('quote');
            const cite = document.getElementById('cite');
            quote.innerHTML = obj.content;
            cite.innerHTML = '- ' + obj.author;
        } else {
            console.log(obj);
        }
    }
    );


