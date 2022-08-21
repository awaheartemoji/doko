const Util = {}

const UtilInit = () => {
    Util.backButton = () => {
        const html = `
        <a href="/" class="back-button"><div><i class="material-icons">arrow_back</i></div></a>
        `

        document.body.innerHTML += html
    }
}

UtilInit()
