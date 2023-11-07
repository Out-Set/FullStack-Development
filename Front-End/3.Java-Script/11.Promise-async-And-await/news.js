async function getData() {
    try {
        var res = await fetch(`https://newsapi.org/v2/everything?q=all&language=hi&apiKey=a53f9d592bcb4b328768abfedcdcbf8b`)
        res.json().then((result) => {
            console.log(result);
            var data = result.articles
            var totaldata = data.map((item) => {
                return (
                    `
<div class="left col-3">
<img src=${item.urlToImage} height="170px" >
<h2>${item.title}</h2>
<p> ${item.description} </p>
<a href=${item.url}><button>More New</button></a>
    </div>
    `
                )
            })
            document.getElementById("root").innerHTML = totaldata.join('');
        })
    }
    catch (err) {
        console.log(err);
    }
}
getData()

