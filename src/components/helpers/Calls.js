import axios from "axios";


class Calls {
  constructor(){
    this.calls = axios.create({
      baseURL: "http://localhost:5000",
      withCredentials: true
    });
  }

  // players
  getPlayersOfTournament(id){
    return this.calls.get(`/api/players/intoTournament/` + id)
    .then((data) => data)
    .catch((err) => console.log(err))   
  }

  handleFormSubmitAddPlayer(playerData){
    return this.calls.post("/api/players/add-player", playerData)
      .then((data) => data)
      .catch((err) => console.log(err))    
  }

  //tournament
  handleFormSubmitEditTournament(id){
    return this.calls.put(`/api/tournaments/edit/` + id)
    .then((data) => data)
    .catch((err) => console.log(err))    
  }

  handleFormSubmitAddTournament(nameAndImg){
    return this.calls.post("/api/tournaments/add-tournament", nameAndImg)
    .then((data) => data)
    .catch((err) => console.log(err))      
  }

  getTournaments(){
    return this.calls.get(`http://localhost:5000/api/tournaments`)
    .then((data) => data)
    .catch((err) => console.log(err))    
  }


}

const calls = new Calls();

export default calls;