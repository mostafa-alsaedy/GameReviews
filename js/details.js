export class Details {
    constructor(detail) {
        this.gameDetail = detail
        console.log(this.gameDetail);
        document.querySelector(".details").classList.remove("d-none")
        document.querySelector("#displayGames").classList.add("d-none")
        document.querySelector(".navbar").classList.add("d-none")
        document.querySelector(".logo").classList.add("d-none")
        this.displayDetails()
        document.querySelector("#btnClose").addEventListener("click", () => {
            document.querySelector(".details").classList.add("d-none")
            document.querySelector("#displayGames").classList.remove("d-none")
            document.querySelector(".navbar").classList.remove("d-none")
            document.querySelector(".logo").classList.remove("d-none")
        })
    }

    displayDetails() {
        document.querySelector("#detailsContent").innerHTML = `
                <div class="col-md-4">
                    <img src="${this.gameDetail.thumbnail}" class="w-100" alt="image details" />
                </div>
                <div class="col-md-8 text-white">
                    <h3 class="mainFont">Title: ${this.gameDetail.title}</h3>
                    <p class="mainFont">Category: <span class="badge text-bg-info "> ${this.gameDetail.genre}</span> </p>
                    <p class="mainFont">Platform: <span class="badge text-bg-info "> ${this.gameDetail.platform}</span> </p>
                    <p class="mainFont">Status: <span class="badge text-bg-info "> ${this.gameDetail.status}</span> </p>
                    <p class="small">${this.gameDetail.description}</p>
                    <a class="btn btn-outline-warning" target="_blank" href="${this.gameDetail.game_url}">Show Game</a>
                </div>
            `
    }




}

