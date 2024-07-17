import { Ui } from "./UI.js";

export class Home {
   constructor() {
      console.log("hello");

      this.navLinks = document.querySelectorAll(".nav-link");
      this.navLinks.forEach((navlink) => {
         navlink.addEventListener("click", (event) => {
            document.querySelector(".nav-link.active").classList.remove("active");
            navlink.classList.add("active");
            console.log(event.target.innerHTML);
            this.getGames(event.target.innerHTML);
         });
      });
      this.getGames("MMORPG")
   }


   async getGames(category) {
      const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
      const options = {
         method: 'GET',
         headers: {
            'x-rapidapi-key': 'ba6de019c7mshb6bae0b651df27cp1144cfjsnf059b9726170',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
         }
      };
      try {
         document.querySelector(".loading").classList.remove("d-none")
         const response = await fetch(url, options);
         const result = await response.json();
         console.log(result);
         let ui = new Ui(result);
         document.querySelector(".loading").classList.add("d-none")
      } catch (error) {
         console.error(error);
         
      }
   }
}