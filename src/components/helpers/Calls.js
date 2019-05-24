import axios from "axios";
// import { prependOnceListener } from "cluster";


class Calls {
  constructor(){
    this.calls = axios.create({
      baseURL: "http://localhost:5000",
      withCredentials: true
    });
  }

  // handleFormSubmitAddPlayer = (event) => {
  //   event.preventDefault();
  //   const { name, img , tournamentId } = this.state;

  //   axios.post("http://localhost:5000/api/players/add-player", { name, img })
  //     .then(() => {
  //       this.setState({ name: "", img: "",redirect:true });
  //       // this.renderRedirect();
  //     })
  //     .catch((err) => console.log(err))    
  // }

  handleFormSubmitAddTournament(nameAndImg){
    return this.calls.post("http://localhost:5000/api/tournaments/add-tournament", nameAndImg)
      .then((newTournament) => newTournament)
      .catch((err) => console.log(err))    
  }


}

const calls = new Calls();

export default calls;