import { Auth } from "../fetch/api/auth/Auth";

export class AuthPage {
  async createAuthPage(type: string) {
    function createRegForm() {
      const authForm = document.createElement("div");
      authForm.classList.add("authForm");
      return authForm;
    }

    function createAuthTitle() {
      const authFormTitle = document.createElement("div");
      if (type === "Login") {
        authFormTitle.innerHTML = "Login";
      } else {
        authFormTitle.innerHTML = "Register";
      }
      authFormTitle.classList.add("authForm_Title");
      return authFormTitle;
    }

    function createAuthInput(
      name: string,
      inputType: string,
      required: number
    ) {
      const authFormInput = document.createElement("input");
      authFormInput.type = inputType;
      authFormInput.name = name;
      authFormInput.placeholder = name;
      authFormInput.required = true;
      authFormInput.classList.add("authForm_Input");

      if (required === 0) {
        authFormInput.style.height = "0px";
        authFormInput.style.padding = "0px";
        authFormInput.style.margin = "0px";
        authFormInput.style.opacity = "0";
      }

      return authFormInput;
    }

    function createAuthButton() {
      const authFormSubmit = document.createElement("div");
      if (type === "Login") {
        authFormSubmit.innerHTML = "Login";
      } else {
        authFormSubmit.innerHTML = "Register";
      }
      authFormSubmit.classList.add("authForm_Submit");

      authFormSubmit.onclick = async () => {
        const authFormInput_collection = document.querySelectorAll(
          ".authForm_Input"
        ) as NodeListOf<HTMLInputElement>;

        const data = {
          username: authFormInput_collection[0].value,
          email: authFormInput_collection[1].value,
          password: authFormInput_collection[2].value,
          confirmPassword: authFormInput_collection[3].value,
        };

        const auth = new Auth();

        if (type === "Login") {
          console.log(data);
        } else {
          const result = await auth.register(data.username, data.password, data.email);
          console.log(result);
        }
      };

      return authFormSubmit;
    }

    function createAuthRegister() {
      const authFormRegister = document.createElement("div");
      if (type === "Login") {
        authFormRegister.innerHTML = "No account? Register here.";
      } else {
        authFormRegister.innerHTML = "Already have an account? Login here.";
      }
      authFormRegister.classList.add("authForm_Register");

      authFormRegister.onclick = async () => {
        const authForm_Input = document.querySelectorAll('.authForm_Input') as NodeListOf<HTMLInputElement>;
        const title = document.querySelector('.authForm_Title') as HTMLDivElement;
        const submit = document.querySelector('.authForm_Submit') as HTMLDivElement;
        authForm_Input.forEach((t, index) => {
          if (type === "Login") {
            t.style.height = "";
            t.style.padding = "";
            t.style.margin = "";
            t.style.opacity = '1';
          } else {
            if (index === 0 || index === 3) {
              t.style.height = "0px";
              t.style.padding = "0px";
              t.style.margin = "0px";
              t.style.opacity = "0";
            }
          }
        })
        if (type === "Login") {
          authFormRegister.innerHTML = "Already have an account? Login here.";
          title.innerHTML = "Register";
          submit.innerHTML = "Register";
        } else {
          authFormRegister.innerHTML = "No account? Register here.";
          title.innerHTML = "Login";
          submit.innerHTML = "Login";

        }
        type === "Login" ? type = "Register" : type = "Login";
      };
      return authFormRegister;
    }

    const body = document.body;
    const authPage = document.createElement("div");
    authPage.classList.add("authPage");

    const authPageOutsideClick = document.createElement("div");
    authPageOutsideClick.classList.add("authPage_OutsideClick");
    authPage.appendChild(authPageOutsideClick);

    authPageOutsideClick.onclick = async () => {
      this.hideAuthPage(authPage);
    };

    type InputObject = [string, string, number];
    let inputObject: InputObject[];

    if (type === "Login") {
      inputObject = [
        ["Username", "text", 0],
        ["Email", "email", 1],
        ["Password", "password", 1],
        ["Confirm Password", "password", 0],
      ];
    } else {
      inputObject = [
        ["Username", "text", 1],
        ["Email", "email", 1],
        ["Password", "password", 1],
        ["Confirm Password", "password", 1],
      ];
    }

    const authForm = createRegForm();
    const title = createAuthTitle();
    authForm.appendChild(title);

    inputObject.forEach((t) => {
      const input = createAuthInput(t[0], t[1], t[2]);
      authForm.appendChild(input);
    });

    const submit = createAuthButton();

    authForm.appendChild(submit);

    const authFormRegister = createAuthRegister();
    authForm.appendChild(authFormRegister);

    authPage.appendChild(authForm);

    body.appendChild(authPage);

    this.showAuthPage(authPage);
  }

  async showAuthPage(authPage: HTMLDivElement) {
    setTimeout(() => {
      authPage.style.opacity = "1";
    }, 1);
  }

  async hideAuthPage(authPage: HTMLDivElement) {
    authPage.style.opacity = "0";
    authPage.addEventListener("transitionend", (event) => {
      if (event.propertyName === "opacity") {
        authPage.remove();
      }
    });
  }
}
