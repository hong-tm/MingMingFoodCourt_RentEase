import { AuthPage } from "../authPage/AuthPage"
import { Auth } from "../fetch/api/auth/Auth"

export class NavigationBar {
    public create() {
        const body = document.body
        const nav = document.createElement("div")
        nav.classList.add("nav")
        nav.appendChild(this.leftNavContent())
        nav.appendChild(this.rightNavContent())
        body.appendChild(nav)
    }

    private leftNavContent() {
        function leftNavButton(btitle: string, bfunction: Function) {
            const button = document.createElement("div")
            button.innerHTML = btitle
            button.onclick = () => bfunction()
            button.classList.add("nav_left_button")
            return button
        }

        const leftNav = document.createElement("div")

        const logo = document.createElement("img")
        logo.src = "https://www.creativefabrica.com/wp-content/uploads/2021/03/20/Mountain-logo-Design-Graphics-9785421-1-1-580x435.png"
        logo.alt = "Logo"
        logo.classList.add("nav_left_logo")
        logo.innerHTML = "Ming Ming Food Court"
        leftNav.appendChild(logo)

        const title = document.createElement("div")
        title.innerHTML = "Ming Ming Food Court"
        title.classList.add("nav_left_title")
        leftNav.appendChild(title)

        type Button = [string, Function]

        const button: Button[] = [
            ["Dashboard", function () { console.log("Dashboard") }],
            
        ]

        button.forEach((t) => {
            leftNav.appendChild(leftNavButton(t[0], t[1]))
        })

        leftNav.classList.add("nav_left")
        return leftNav
    }

    private rightNavContent() {
        function rightNavButton(btitle: string, bfunction: Function) {
            const button = document.createElement("div")
            button.innerHTML = btitle
            button.onclick = () => bfunction()
            button.classList.add("nav_right_button")
            return button
        }
        const rightNav = document.createElement("div")

        type Button = [string, Function]

        const button: Button[] = [
            ["Login", async function () {

                const authPage = new AuthPage()
                authPage.createAuthPage("login")
            }],
            ["Sign Up", function () { console.log("Sign Up") }]
        ]

        button.forEach((t) => {
            rightNav.appendChild(rightNavButton(t[0], t[1]))
        })


        rightNav.classList.add("nav_right")
        return rightNav
    }
}