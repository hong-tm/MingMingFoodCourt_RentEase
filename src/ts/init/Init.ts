import "../../scss/index.scss"
import "../../scss/mainPage/MainPage.scss"
import "../../scss/navigatioBar/NavigationBar.scss"
import "../../scss/authPage/AuthPage.scss"
import "../../scss/footer/Footer.scss"
import "../../scss/meterialDesign/MaterialDesign.scss"
import { MainPage } from "../mainPage/MainPage"
import { NavigationBar } from "../navigationBar/NavigationBar"
import { Footer } from "../footer/Footer"

class Init {
    public init() {
        
        const navigationBar = new NavigationBar()
        navigationBar.create()

        const mainPage = new MainPage()
        mainPage.create()

        const footer = new Footer()
        footer.create()

    }
}

const init = new Init()
init.init()