const allPlayers = () => {
  const searchValue = document.getElementById("search-box").value;
  fetch(
    `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue} `
  )
    .then((res) => res.json())
    .then((data) => showPlayerDetails(data.player));
};
const showPlayerDetails = (players) => {
  // console.log(players)
  for (const player of players) {
    const parent = document.getElementById("player-container");
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="card w-50 border">
                      <div class="pro-pic">
                          <img class="w-50"  src="${player.strThumb}" alt="">
                      </div>
                      <h2>Name: ${player.strPlayer}</h2>
                      <h4>country: ${player.strNationality}</h4>
                      <p>Position: ${player.strPosition}</p>
                      <div class="all-button">
                          <button class="btn btn-danger">Delete</button>
                          <button onclick="details('${player.idPlayer}')" class="btn btn-success">Details</button>
                      </div>
                  </div>
      `;
    parent.appendChild(div);
    // console.log(player)
  }
};
const details = (id) => {
  fetch(`https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${id}`)
    .then((res) => res.json())
    .then((data) => setDetails(data.players[0]));
};
const setDetails = (info) => {
  document.getElementById("detail-container").innerHTML = `
  <img src="" alt="">
  <h2>Name:${info.strPlayer} </h2>
  `;
};
