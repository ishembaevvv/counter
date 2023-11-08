class Counter {
    constructor(count) {
        this.count = count;
        this.btn = `Btn-${count}`;
        this.text = `Res-${count}`;
        this.a = 0;
    }

    Shoblon = () => {
        let Btn_plus = document.createElement('button');
        Btn_plus.id = this.btn;
        Btn_plus.innerHTML = "Plus";

        let Btn_minus = document.createElement('button');
        Btn_minus.id = this.btn;
        Btn_minus.innerHTML = "Minus";

        let Btn_reset = document.createElement('button');
        Btn_reset.id = this.btn;
        Btn_reset.innerHTML = "RESET";

        let res = document.createElement('h1');
        res.id = this.text;
        res.innerHTML = "0";

        Btn_plus.addEventListener('click', this.Plus);
        Btn_minus.addEventListener('click', this.Minus);
        Btn_reset.addEventListener('click', this.Reset);

        document.body.append(res);
        document.body.append(Btn_plus);
        document.body.append(Btn_minus);
        document.body.append(Btn_reset)
    }

    Plus = () => {
        let text = document.getElementById(this.text);
        this.a++;
        text.innerHTML = this.a
    }
    Minus = () => {
        let text = document.getElementById(this.text);
        this.a--;
        text.innerHTML = this.a;
    }
    Reset = () => {
        let text = document.getElementById(this.text);
        this.a = 0;
        text.innerHTML = this.a;
    }
}

const Con1 = new Counter(1);
Con1.Shoblon();