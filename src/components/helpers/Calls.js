import axios from "axios";

// Fallback solution
// function getBaseURL(){
//   const baseURL = (process.env.NODE_ENV === 'development') ? 'http://localhost:5000' : 'https://quick-compo.herokuapp.com/';
// }

class Calls {
  constructor() {
    this.calls = axios.create({
      // baseURL: "http://localhost:5000",
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true
    });
  }

  // players
  getPlayersOfTournament(id) {
    return this.calls.get(`/api/players/intoTournament/` + id)
      .then((data) => data)
      .catch((err) => console.log(err))
  }

  addPlayer(playerData) {
    return this.calls.post("/api/players/add-player", playerData)
      .then((data) => data)
      .catch((err) => console.log(err))
  }

  getPlayers() {
    return this.calls.get("/api/players")
      .then((data) => data)
      .catch((err) => console.log(err))
  }

  modifyPlayer(score,id){
    return this.calls.put(`/api/players/${id}`,{score})
    .then((data) => data)
    .catch((err) => console.log(err))
  }

  //tournament
  getTournamentbyId(id) {
    return this.calls.get(`/api/tournaments/` + id)
      .then((data) => data)
      .catch((err) => console.log(err))
  }


  editTournament(id, thing) {
    console.log('thing ', thing)
    return this.calls.put((`/api/tournaments/edit/` + id), thing)
      .then((data) => data)
      .catch((err) => console.log(err))
  }

  handleFormSubmitAddTournament(nameAndImg) {
    return this.calls.post("/api/tournaments/add-tournament", nameAndImg)
      .then((data) => data)
      .catch((err) => console.log(err))
  }

  getTournaments() {
    return this.calls.get(`/api/tournaments`)
      .then((data) => data)
      .catch((err) => console.log(err))
  }

  //games

  getGames() {
    return this.calls.get(`/api/games`)
      .then((data) => data)
      .catch((err) => console.log(err))
  }

  getRounds(tournamentId, players){
    console.log('before: ',tournamentId, players);
    return this.calls.post(`/api/games/add-all-games`, {tournamentId, players} ) 
    .then((data) => data)
    .catch((err) => console.log(err))
  }



}

const calls = new Calls();
export default calls;