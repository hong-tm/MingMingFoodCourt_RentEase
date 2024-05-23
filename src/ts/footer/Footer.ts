export class Footer {
    public create() {
        const body = document.body
        const footer = document.createElement("div")
        footer.classList.add("footer")
        footer.appendChild(this.leftFooter())
        footer.appendChild(this.rightFooter())
        body.appendChild(footer)
    }

    private leftFooter() {
        function leftFooterButton(btitle: string, bfunction: Function) {
            const button = document.createElement("div")
            button.innerHTML = btitle
            button.onclick = () => bfunction()
            button.classList.add("footer_left_button")
            return button
        }

        const leftFooter = document.createElement("div")

        type Button = [string, Function]

        const button: Button[] = [
            ["Feedback", function () { console.log("Feedback") }]
        ]

        button.forEach((t) => {
            leftFooter.appendChild(leftFooterButton(t[0], t[1]))
        })

        leftFooter.classList.add("footer_left")
        return leftFooter
    }

    private rightFooter() {
        const copyRight = document.createElement("div")
        copyRight.innerHTML = "@2024 Ming Ming Food Court"
        copyRight.classList.add("footer_copyRight")
        return copyRight
    }
}
