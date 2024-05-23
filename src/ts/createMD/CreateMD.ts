export class CreateMD {
    public getmd(code: string, className: string) {
        const md = document.createElement("div")

        md.classList.add("material-symbols-rounded")
        md.classList.add(className)
        md.innerHTML = `&#x${code};`

        return md
    }
}