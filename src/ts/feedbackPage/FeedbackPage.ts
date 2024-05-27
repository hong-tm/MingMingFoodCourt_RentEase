export class FeedbackPage {
  async createFeedbackPage(type: string) {
    function createFeedbackForm() {
      const feedbackForm = document.createElement("div");
      feedbackForm.classList.add("feedbackForm");
      return feedbackForm;
    }

    function createFeedbackTitle() {
      const feedbackFormTitle = document.createElement("div");
      feedbackFormTitle.innerHTML = "Feedback";
      feedbackFormTitle.classList.add("feedbackForm_Title");
      return feedbackFormTitle;
    }

    function createFeedbackInput(
      name: string,
      inputType: string,
      required: number
    ) {
      let feedbackFormInput;

      if (inputType === "textarea") {
        feedbackFormInput = document.createElement("textarea");
      } else {
        feedbackFormInput = document.createElement("input");
        feedbackFormInput.type = inputType;
      }

      feedbackFormInput.name = name;
      feedbackFormInput.placeholder = name;
      feedbackFormInput.required = required === 1;
      feedbackFormInput.classList.add("feedbackForm_Input");

      if (required === 0) {
        feedbackFormInput.style.display = "none";
      }

      return feedbackFormInput;
    }

    function createFeedbackButton(btitle: string, bfunction: () => void) {
      const feedbackFormSubmit = document.createElement("div");
      feedbackFormSubmit.innerHTML = btitle;
      feedbackFormSubmit.onclick = bfunction;
      feedbackFormSubmit.classList.add("feedbackForm_Submit");
      return feedbackFormSubmit;
    }

    const body = document.body;
    const feedbackPage = document.createElement("div");
    feedbackPage.classList.add("feedbackPage");

    const feedbackPageOutsideClick = document.createElement("div");
    feedbackPageOutsideClick.classList.add("feedbackPage_OutsideClick");
    feedbackPage.appendChild(feedbackPageOutsideClick);

    feedbackPageOutsideClick.onclick = async () => {
      this.hideFeedbackPage(feedbackPage);
    };

    type InputObject = [string, string, number];
    let inputObject: InputObject[] = [
      ["Name", "text", 1],
      ["Email", "email", 1],
      ["Feedback", "textarea", 1],
    ];

    const feedbackForm = createFeedbackForm();
    const feedbackFormTitle = createFeedbackTitle();
    feedbackForm.appendChild(feedbackFormTitle);

    inputObject.forEach((t) => {
      feedbackForm.appendChild(createFeedbackInput(t[0], t[1], t[2]));
    });

    const submitButton = createFeedbackButton("Submit", async function () {
      console.log("Feedback submitted");
    });
    feedbackForm.appendChild(submitButton);

    feedbackPage.appendChild(feedbackForm);
    body.appendChild(feedbackPage);
    this.showFeedbackPage(feedbackPage);
  }

  async showFeedbackPage(feedbackPage: HTMLDivElement) {
    setTimeout(() => {
      feedbackPage.style.opacity = "1";
    }, 1);
  }

  async hideFeedbackPage(feedbackPage: HTMLDivElement) {
    feedbackPage.style.opacity = "0";
    feedbackPage.addEventListener("transitionend", (event) => {
      if (event.propertyName === "opacity") {
        feedbackPage.remove();
      }
    });
  }
}
