export class AuthPage{

    async createAuthPage(type: string) { 
        const body = document.body
        const authPage = document.createElement("div")
        authPage.classList.add("authPage")

        authPage.onclick = async () => {
            this.hideAuthPage(authPage)
         }

        console.log("Auth Page")
        body.appendChild(authPage)
        this.showAuthPage(authPage)
    }


    async showAuthPage(authPage: HTMLDivElement) { 

        setTimeout(() => {
            authPage.style.opacity = "1"
        }, 1);
    }

    async hideAuthPage(authPage: HTMLDivElement) { 

        authPage.style.opacity = "0"
        authPage.addEventListener("transitionend", (event) => {
            if (event.propertyName === "opacity") {
                authPage.remove()
            }
         })
    }
}