import axios from "axios";


class Calls {
  constructor(){
    this.calls = axios.create({
      baseURL: "http://localhost:5000",
      withCredentials: true
    });
  }

  getPlayersOfTournament(id){
    return this.calls.get(`http://localhost:5000/api/players/intoTournament/` + id)
    .then((data) => data)
    .catch((err) => console.log(err))   
  }

  handleFormSubmitAddPlayer(playerData){
    return this.calls.post("http://localhost:5000/api/players/add-player", playerData)
      .then((data) => data)
      .catch((err) => console.log(err))    
  }

  handleFormSubmitAddTournament(nameAndImg){
    return this.calls.post("http://localhost:5000/api/tournaments/add-tournament", nameAndImg)
      .then((newTournament) => newTournament)
      .catch((err) => console.log(err))    
  }


}

const calls = new Calls();

export default calls;