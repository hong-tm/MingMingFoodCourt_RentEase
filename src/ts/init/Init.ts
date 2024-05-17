import "../../scss/index.scss"
import "../../scss/mainPage/MainPage.scss"
import "../../scss/navigatioBar/NavigationBar.scss"
import { MainPage } from "../mainPage/MainPage"
import { NavigationBar } from "../navigationBar/NavigationBar"

class Init {
    public init() {
        
        const navigationBar = new NavigationBar()
        navigationBar.create()

        const mainPage = new MainPage()
        mainPage.create()
    }
}

const init = new Init()
init.init()