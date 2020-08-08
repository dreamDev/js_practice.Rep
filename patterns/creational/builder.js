// Строитель используется для создания объектов со сложными состояниями.
// Так же он может иметь дополнительный слой абстракций, это Директор, который управляет несколькими строителями.

class Button {
    constructor() {
        this.$element = null;
        this.isPrimary = false;
        this.border = "";
        this.color = "";
        this.text = "";
        this.width = "";
        this.height = "";
    }
}

class ButtonBuilder {
    constructor() {
        this.btn = new Button();
    }

    setNodeElement(el) {
        this.btn.$element = el;
        return this;
    }

    setImportance(importance) {
        this.btn.isPrimary = importance;
        return this;
    }

    setBorder(border) {
        this.btn.border = border;
        return this;
    }

    setColor(color) {
        this.btn.color = color;
        return this;
    }

    setText(text) {
        this.btn.text = text;
        return this;
    }

    setWidth(width) {
        this.btn.width = width;
        return this;
    }

    setHeight(height) {
        this.btn.height = height;
        return this;
    }

    build() {
        return this.btn
    }
}

const primaryBtn = new ButtonBuilder()
                            .setNodeElement('btnNode')
                            .setImportance(true)
                            .setBorder('1px solid gold')
                            .setColor('#ffffff')
                            .setText('Hello World!')
                            .setWidth('300px')
                            .setHeight('40px')
                            .build()

const secondaryBtn = new ButtonBuilder()
                            .setNodeElement('secondBtnNode')
                            .setImportance(false)
                            .setColor('#cccccc')
                            .setText('Hello')
                            .setWidth('300px')
                            .setHeight('40px')
                            .build()

                            
console.log(primaryBtn);
console.log(secondaryBtn);