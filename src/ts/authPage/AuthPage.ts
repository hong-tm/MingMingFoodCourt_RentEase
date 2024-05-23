export class AuthPage {


    async createAuthPage(type: string) {
        function createRegForm() {
            const registerForm = document.createElement("div")
            registerForm.classList.add("registerForm")
            return registerForm
        }

        function createAuthTitle() {
            const registerFormTitle = document.createElement("div")
            if (type === "Login") {
                registerFormTitle.innerHTML = "Login"
            } else {
                registerFormTitle.innerHTML = "Register"
            }
            registerFormTitle.classList.add("registerForm_Title")
            return registerFormTitle
        }

        function createAuthInput(name: string, inputType: string, required: number) {
            const registerForm_input = document.createElement("input")
            registerForm_input.type = inputType
            registerForm_input.name = name
            registerForm_input.placeholder = name
            registerForm_input.required = true
            registerForm_input.classList.add("registerForm_Input")

            if (required === 0) {
                registerForm_input.style.display = "none"
            }

            return registerForm_input
        }

        function createAuthButton() {
            const registerFormSubmit = document.createElement("div")
            if (type === "Login") {
                registerFormSubmit.innerHTML = "Login"
            } else {
                registerFormSubmit.innerHTML = "Register"
            }
            registerFormSubmit.classList.add("registerForm_Submit")

            registerFormSubmit.onclick = async () => {
                const registerForm_Input_collection = document.querySelectorAll(".registerForm_Input") as NodeListOf<HTMLInputElement>

                const data = {
                    username: registerForm_Input_collection[0].value,
                    email: registerForm_Input_collection[1].value,
                    password: registerForm_Input_collection[2].value,
                    confirmPassword: registerForm_Input_collection[3].value
                }
                alert(JSON.stringify(data))
            }

            return registerFormSubmit
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
                ["Confirm Password", "password", 0]
            ]
        } else {
            inputObject = [
                ["Username", "text", 1],
                ["Email", "email", 1],
                ["Password", "password", 1],
                ["Confirm Password", "password", 1]
            ]
        }

        const registerForm = createRegForm()
        const title = createAuthTitle()
        registerForm.appendChild(title)

        inputObject.forEach((t) => {
            const input = createAuthInput(t[0], t[1], t[2])
            registerForm.appendChild(input)
        })

        const submit = createAuthButton()

        registerForm.appendChild(submit)

        authPage.appendChild(registerForm)

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