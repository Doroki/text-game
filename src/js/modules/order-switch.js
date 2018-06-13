class OrderSwitch {
    constructor(parent) {
        this.parent = parent;
        this.actualOrders = this.default,
        this.specialOrders,
        this.specialAnswers;
    }

    addOrders(orderPattern) {
        this.specialOrders = orderPattern;
    }

    addAnswers(answerPattern) {
        this.specialAnswers = answerPattern;
    }

    change(orderSetup) {
        this.actualOrders = this[orderSetup];
    }

    fight() {
        switch (order.toLowerCase()) {
            case "użyj eliksir hp":
                // funkcja
                break;
            case "użyj eliksir mana":
                // funkcja
                break;
            case "statystyki":
                // funkcja
                break;
            case "załóż":
                // funkcja
                break;
            case "zamknij ekwipunek":
                // funkcja
                this.change("default");
                break;
            default:
                this.parent.GameConsole.error("Nie ma takiego polecenia");
                break;
        }
    }

    equipment(order) {
        switch (order.toLowerCase()) {
            case "użyj eliksir hp":
                // funkcja
                break;
            case "użyj eliksir mana":
                // funkcja
                break;
            case "statystyki":
                this.parent.showPlayerStats();
                break;
            case (order.toLowerCase().match(/^sprawdź (\s*\b[a-zA-Z]+\b){1,3}/) || "").input: // sprawdź nazwa przedmiotu
                this.parent.checkItem(order);
                break;
            case "pokaż eq":
                this.parent.checkEquipment();
                break;
            case (order.toLowerCase().match(/^załóż (\s*\b[a-zA-Z]+\b){1,3}/) || "").input: // Załóż nazwa przedmiotu
                this.parent.wearItem(order);
                break;
            case "zamknij":
                this.parent.GameConsole.info("zamknąłeś ekwipunek");
                this.change("default");
                break;
            default:
                this.parent.GameConsole.error("Nie ma takiego polecenia z poziomu ekwipunku");
                break;
        }
    }

    special(order) {
        switch (order.toLowerCase()) {
            case this.specialOrders[0] || null:
                this.parent.specialAction(this.specialAnswers[0])
                break;
            case this.specialOrders[1] || null:
                this.parent.specialAction(this.specialAnswers[1]);
                this.change("default");
                break;
            default:
                this.parent.GameConsole.error("Nie ma takiego polecenia");
                break;
        }
    }

    default (order) {
        switch (order.toLowerCase()) {
            case "idź na wschód":
                this.parent.move(0, 1, "wyruszasz na wschód");
                break;
            case "idź na zachód":
                this.parent.move(0, -1, "wyruszasz na zachód");
                break;
            case "idź na północ":
                this.parent.move(-1, 0, "wyruszasz na północ");
                break;
            case "idź na południe":
                this.parent.move(1, 0, "wyruszasz na południe");
                break;
            case "sprawdź":
                this.parent.checkPlace();
                break;
            case "ekwipunek":
                this.change("equipment");
                this.parent.checkEquipment();
                break;
            case "atakuj":
                this.change("fight");
                this.parent.startFigth(order);
                break;
            default:
                this.parent.GameConsole.error("Nie ma takiego polecenia");
                break;
        }
    }
}

export default OrderSwitch;