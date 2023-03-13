getData();
async function getData() {
    const response = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
    console.log(response);
    const data = await response.json();
    console.log(data);
    let length = data.data.length;
    let temp = "";
    for (let i = 0; i < length; i++){
      temp += `<div class="card text-bg-secondary mb-3" style="max-width: 18rem class:"justify-content-around">
        <div class="card-header">Nation API</div>
        <div class="card-body">
          <h5 class="card-title">${data.data[i].Nation}</h5>
          <p class="card-text">${data.data[i].Year}</p>
        </div>
      </div>`
    }
    document.getElementById("myDiv").innerHTML = temp;
    }