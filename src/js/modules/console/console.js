import ConsoleHistory from './console-history.js'

class Console {
    constructor() {
        this.ConsoleHistory = new ConsoleHistory();
        this.user = "Player"

        this.input = document.querySelector("#input"),
        this.output = document.querySelector("#output"),
        this.consoleHP = document.querySelector("#hp"),
        this.consoleMP = document.querySelector("#mp"),

        this.infoColor = "#00da12",
        this.errorColor = "#da0000",
        this.warningColor = "#24a2ff"
        this.presentColor = "#a5a5a5",
        this.history = [],
        this.historyIterator;
    }

    typingAnimation(element, text, iterator = 0, speed = 25) {
        if (iterator < text.length) {
            element.textContent += text.charAt(iterator);
            this.scrollOutput();
            iterator++;
            setTimeout(() => this.typingAnimation(element, text, iterator, speed), speed);
        }
    }

    write(value) {
        let newParagraph = document.createElement("p");
        newParagraph.textContent = value;
        this.output.appendChild(newParagraph);
        this.scrollOutput();
    }

    info(value) {
        let newParagraph = document.createElement("pre");
        newParagraph.style.color = this.infoColor;
        newParagraph.textContent = value;
        this.output.appendChild(newParagraph);
        this.scrollOutput();
    }

    present(value) {
        let newParagraph = document.createElement("p");
        newParagraph.style.color = this.presentColor;
        this.output.appendChild(newParagraph);
        this.typingAnimation(newParagraph, value, 0, 10);

        return value.length * 11; // zwraca czas wykonywania dla funkcji asynchronicznej
    }

    warning(value) {
        let newParagraph = document.createElement("p");
        newParagraph.style.color = this.warningColor;
        newParagraph.textContent = value;
        this.output.appendChild(newParagraph);
        this.scrollOutput();
    }

    error(value) {
        let newParagraph = document.createElement("p");
        newParagraph.style.color = this.errorColor;
        newParagraph.textContent = value;
        this.output.appendChild(newParagraph);
        this.scrollOutput();
    }

    listenPlayer(callback) {
        this.input.addEventListener("keydown", (e) => {

            if (e.keyCode === 13) { //enter
                e.preventDefault();
                if(e.target.value === "" || e.target.value.indexOf(" ") === 0) return; // sprawdza czy w input jest pusty czy czy ma spacje jako pierwszy znak i zapobiega dalszej akcji

                const inputText = this.input.value;
                this.write(`${this.user}: ${inputText}`);
                this.input.value = "";

                this.ConsoleHistory.add(inputText);
                this.ConsoleHistory.resetIndex();
                callback(inputText);
            } else if (e.keyCode === 38) { // strzałka w góre - wczytuje wartosci z historii konsoli
                e.preventDefault();
                let prevValue = this.ConsoleHistory.getPrevOrder();
                if (!prevValue) return;
                this.input.value = prevValue;
            } else if (e.keyCode === 40) { // strzałka w dół - wczytuje wartosci z historii konsoli
                e.preventDefault();
                let prevValue = this.ConsoleHistory.getNextOrder();
                if (!prevValue) return;
                this.input.value = prevValue;
            }
        })
    }

    scrollOutput() {
        this.output.scrollTo(0, this.output.scrollHeight);
    }

    updateStats(statsObj) {
        const HPToShow = Math.round(statsObj.actualHP / statsObj.hp * 100);
        const MPToShow = Math.round(statsObj.actualMP / statsObj.mana * 100);

       this.consoleHP.textContent = `HP: ${(HPToShow < 0)? 0 : HPToShow}%`
       this.consoleMP.textContent = `MP: ${(MPToShow < 0)? 0 : MPToShow}%`
    }
}


export default Console;