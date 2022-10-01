function callc(names) {
  const req = new XMLHttpRequest();
  req.open("GET", `https://restcountries.com/v3.1/name/${names}`);
  req.send();

  req.addEventListener("load", function () {
    console.log("hwlo");
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = ` <div class="card">
    <img class="imgs" src="${data.flags.png}"</img>
     <div class="info">
      <p class="name">  ${data.name.common}</p>
      <p class="cont">  ${data.continents[0]}</p>
       <p class="population"></p>

        <p class="curre">currency: ${Object.values(data.currencies)[0].name} ${
      Object.values(data.currencies)[0].symbol
    }</p>
       <p class="curre"> population : ${data.population}</p>
       <p class="curre">languages: ${Object.values(data.languages)[0]}</p>
       <p class="curre">identity: ${Object.values(data.demonyms)[0].m}</p>
     </div>
   </div>`;
    document.querySelector(".container").insertAdjacentHTML("beforeend", html);
  });
}
document.querySelector(".inn").addEventListener("click", function () {
  document.querySelector(".container").innerHTML = "";
  let c = document.querySelector(".in").value;
  callc(c);
  document.querySelector(".in").value = "";
});

// Object.values(data.currencies)[0];
