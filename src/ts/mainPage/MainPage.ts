import { CreateMD } from "../createMD/CreateMD"

export class MainPage {
    public create() {
        const body = document.body
        body.classList.add("body")

        const title = document.createElement("div")
        title.innerHTML = "Hello World"
        title.classList.add("bodyTitle")
        
        body.appendChild(title)
    }

    
}