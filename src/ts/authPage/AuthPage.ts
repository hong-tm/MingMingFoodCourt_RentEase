export class AuthPage {

    async createAuthPage(type: string) {
        function createRegForm() {
            const authForm = document.createElement("div")
            authForm.classList.add("authForm")
            return authForm
        }

        function createAuthTitle() {
            const authFormTitle = document.createElement("div")
            if (type === "Login") {
                authFormTitle.innerHTML = "Login"
            } else {
                authFormTitle.innerHTML = "Register"
            }
            authFormTitle.classList.add("authForm_Title")
            return authFormTitle
        }

        function createAuthInput(name: string, inputType: string, required: number) {
            const authFormInput = document.createElement("input")
            authFormInput.type = inputType
            authFormInput.name = name
            authFormInput.placeholder = name
            authFormInput.required = true
            authFormInput.classList.add("authForm_Input")

            if (required === 0) {
                authFormInput.style.display = "none"
            }

            return authFormInput
        }

        function createAuthButton() {
            const authFormSubmit = document.createElement("div")
            if (type === "Login") {
                authFormSubmit.innerHTML = "Login"
            } else {
                authFormSubmit.innerHTML = "Register"
            }
            authFormSubmit.classList.add("authForm_Submit")

            authFormSubmit.onclick = async () => {
                const authFormInput_collection = document.querySelectorAll(".authForm_Input") as NodeListOf<HTMLInputElement>

                const data = {
                    username: authFormInput_collection[0].value,
                    email: authFormInput_collection[1].value,
                    password: authFormInput_collection[2].value,
                    confirmPassword: authFormInput_collection[3].value
                }
                alert(JSON.stringify(data))
            }

            return authFormSubmit
        }
        
        //FIXME: The layer of the register form is doubled, it become black
        function createAuthRegister() {
            const authFormRegister = document.createElement("div")
            if (type === "Login") {
                authFormRegister.innerHTML = "No account? Register here."
            }
            authFormRegister.classList.add("authForm_Register")

            authFormRegister.onclick = async () => {
                const authPage = new AuthPage()
                authPage.createAuthPage("Register")
            }
            return authFormRegister
        }

        const body = document.body
        const authPage = document.createElement("div")
        authPage.classList.add("authPage")

        const authPageOutsideClick = document.createElement("div")
        authPageOutsideClick.classList.add("authPage_OutsideClick")
        authPage.appendChild(authPageOutsideClick)

        authPageOutsideClick.onclick = async () => {
            this.hideAuthPage(authPage)
        }


        type InputObject = [string, string, number]
        let inputObject: InputObject[]

        if (type === "Login") {
            inputObject = [
                ["Username", "text", 0],
                ["Email", "email", 1],
                ["Password", "password", 1],
                ["Confirm Password", "password", 0],
            ]
        } else {
            inputObject = [
                ["Username", "text", 1],
                ["Email", "email", 1],
                ["Password", "password", 1],
                ["Confirm Password", "password", 1]
            ]
        }

        const authForm = createRegForm()
        const title = createAuthTitle()
        authForm.appendChild(title)

        inputObject.forEach((t) => {
            const input = createAuthInput(t[0], t[1], t[2])
            authForm.appendChild(input)
        })

        const submit = createAuthButton()

        authForm.appendChild(submit)

        const authFormRegister = createAuthRegister()
        authForm.appendChild(authFormRegister)

        authPage.appendChild(authForm)

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