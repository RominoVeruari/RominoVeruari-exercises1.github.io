window.onload = function () {
    getData();
    async function getData() {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let data = await response.json();
        // console.log(data);
        const length = data.length;
        // console.log(length);
        let tempId = "";
        let tempTitle = "";
        let tempBody = "";
        // const main = document.getElementById("main");
        const card = document.createElement("card");
        const cardBody = document.createElement("card-body");
        const cardTitle = document.createElement("card-title");
        const cardSubtitle = document.createElement("card-subtitle");
        const cardText = document.createElement("card-text");
        console.log(document.getElementById("main"));
        for (let i = 0; i < length; i++) {

            tempId += data[i].id;

            cardSubtitle.appendChild(document.createTextNode(tempId));

            tempTitle += data[i].title;

            cardTitle.appendChild(document.createTextNode(tempTitle));

            tempBody += data[i].body;

            cardText.appendChild(document.createTextNode(tempBody));

            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardSubtitle);
            cardBody.appendChild(cardText);
            card.appendChild(cardBody);
            console.log(card);
            
            card.setAttribute('style', "width: 18rem;")

        }
        document.getElementById("main").innerHTML = card;


    }
}
// do e besh me thonjeza teke ''