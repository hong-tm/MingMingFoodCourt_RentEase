import { AuthPage } from "../authPage/AuthPage"
import { Auth } from "../fetch/api/auth/Auth"
import config from "../config/config"
import { CreateMD } from "../createMD/CreateMD"

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
        logo.src = `${config.apiUrl}/images/logo.png`
        logo.alt = "Logo"
        logo.classList.add("nav_left_logo")
        logo.innerHTML = "Ming Ming Food Court"
        leftNav.appendChild(logo)

        type Button = [string, Function]

        const button: Button[] = [
            ["Dashboard", function () { console.log("Dashboard") }],
            ["Stall", function () { console.log("Stall") }],
            ["Payment", function () { console.log("Payment") }],
            ["Data Exportation", function () { console.log("Data Exportation") }]
            

        ]

        button.forEach((t) => {
            leftNav.appendChild(leftNavButton(t[0], t[1]))
        })

        leftNav.classList.add("nav_left")
        return leftNav
    }

    private rightNavContent() {
        function rightNavButton(btitle: string, bfunction: () => void, iconPath?: string) {
            const button = document.createElement("div")

            button.innerHTML = btitle;

            button.onclick = () => bfunction()
            button.classList.add("nav_right_button")
            return button
        }
        const rightNav = document.createElement("div")

        const createMD = new CreateMD()
        const md = createMD.getmd("e7f4", "nav_right_icon")
        rightNav.appendChild(md)

        type Button = [string, () => void, string?];



        const button: Button[] = [
            ["Login", async function () {
                const authPage = new AuthPage()
                authPage.createAuthPage("Login")
            }],
            ["Sign Up", async function () {
                const authPage = new AuthPage()
                authPage.createAuthPage("Sign Up")
            }]
        ]

        button.forEach((t) => {
            rightNav.appendChild(rightNavButton(t[0], t[1], t[2]));
        })


        rightNav.classList.add("nav_right")
        return rightNav
    }
}