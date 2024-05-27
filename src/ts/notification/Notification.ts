export class Notification {
    async createNotification(type: string) {
        function createNotificationForm() {
            const notificationForm = document.createElement("div");
            notificationForm.classList.add("notificationForm");
            return notificationForm;
        }

        function createNotificationTitle() {
            const notificationFormTitle = document.createElement("div");
            notificationFormTitle.innerHTML = "Notification";
            notificationFormTitle.classList.add("notificationForm_Title");
            return notificationFormTitle;
        }

        const body = document.body;
        const notificationPage = document.createElement("div");
        notificationPage.classList.add("notificationPage");

        const notificationPageOutsideClick = document.createElement("div");
        notificationPageOutsideClick.classList.add("notificationPage_OutsideClick");
        notificationPage.appendChild(notificationPageOutsideClick);

        notificationPageOutsideClick.onclick = async () => {
            this.hideNotificationPage(notificationPage);
        };


        const notificationForm = createNotificationForm();
        const title = createNotificationTitle();
        notificationForm.appendChild(title);

        notificationPage.appendChild(notificationForm)
        body.appendChild(notificationPage);
        this.showNotificationPage(notificationPage);

    }

    async showNotificationPage(notificationPage: HTMLDivElement) {
        setTimeout(() => {
            notificationPage.style.opacity = "1";
        }, 1);
    }

    async hideNotificationPage(notificationPage: HTMLDivElement) {
        notificationPage.style.opacity = "0";
        notificationPage.addEventListener("transitionend", (event) => {
            if (event.propertyName === "opacity") {
                notificationPage.remove();
            }
        });
    }
}