import { Details } from "./details.js";

export class Ui {
    constructor(result) {
        this.gameData = document.querySelector("#gameData")
        this.resultArray = result;
        this.displayCategory()
        document.querySelectorAll("#mainCard").forEach((card) => {
            card.addEventListener("click", () => {
                this.getGameDetails(card.getAttribute("data-id"))
            })
        })
    }

    displayCategory() {
        let gamesBox = ``
        for (let i = 0; i < this.resultArray.length; i++) {
            gamesBox += `
            <div class="col-lg-3 col-md-6">
                    <div id="mainCard" data-id="${this.resultArray[i].id}" class="card bg-dark text-white h-100 border-black">
                        <div class="card-body pb-0">
                            <img src="${this.resultArray[i].thumbnail}" alt="" class="w-100 pb-2">
                            <div class="d-flex justify-content-between align-items-center py-1">
                                <p>${this.resultArray[i].title}</p>
                                <p class="bg-primary p-1 px-2 rounded">Free</p>
                            </div>
                            <p>${this.resultArray[i].short_description.split(" ").splice(0, 13).join(" ")}</p>
                        </div>
                        <div class="card-footer d-flex justify-content-between align-items-center pb-0">
                            <p class="bg-secondary p-1 px-2 rounded" style="font-size: 12px;">${this.resultArray[i].genre}</p>
                            <p class="bg-secondary p-1 px-2 rounded" style="font-size: 12px;">${this.resultArray[i].platform}</p>
                        </div>
                    </div>
            </div>
            `
        }
        this.gameData.innerHTML = gamesBox
    }


    async getGameDetails(id) {
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '109837ac7dmshc131cb52885d51dp148db3jsnd46cb0e69857',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        try {
            document.querySelector(".loading").classList.remove("d-none")
            const response = await fetch(url, options);
            const result = await response.json();
            const detail = new Details(result)
            document.querySelector(".loading").classList.add("d-none")
        } catch (error) {
            console.error(error);
        }
    }
}