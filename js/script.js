    //    Лампочка. Возможные методы: ввод информации о лампочке (мощность, стоимость
    // электроэнергии), вкл./выкл. лампочки, получение расхода за горение лампочки,
    // счетчик горения лампочки.

    //  Чайник. Возможные методы: ввод инф. о чайнике (мощность, объем, кол-во воды),
    // вкл./выкл., расчет времени закипания воды.

let Kettle = function() {
    this.get = function() {
        this.name = prompt('Марка');
        this.p = +prompt('Мощность, кВт');
        this.v = +prompt('Объем, Л');
        this.t1 = +prompt('Начальная температура воды, градусы');
        this.t2 = +prompt('Нужная температура, градусы');
        this.job = confirm('Включить чайник?');
        

        this.operation();
    };
    this.operation = function() {
        this.time = 0.00117 * this.v * (this.t2 - this.t1) / this.p; 
        this.time2 = this.time * 60;

        this.result();
    };
    this.result = function() {
        if(this.job === true) {
            alert('Время закипания чайника: ' + this.time.toFixed(2) + 'ч. или ' + this.time2.toFixed(2) + 'мин.'   );
            document.write(`Марка чайника: ${this.name}<br>`);
            document.write(`Мощность чайника: ${this.p} кВт.<br>`);
            document.write(`Объем чайника: ${this.v} Л.<br>`);
            document.write('Время закипания чайника: ' + this.time.toFixed(2) + 'ч. или ' + this.time2.toFixed(2) + 'мин.');

        } else {
            alert('Чайник выключен');
            document.write(`Марка чайника: ${this.name} <br>`);
            document.write(`Мощность чайника: ${this.p} кВт.<br>`);
            document.write(`Объем чайника: ${this.v} Л.<br>`);
        };
        
    };

    
}
let kettle = new Kettle();
kettle.get();
console.log(kettle)


    //  Автомобиль. Возможные методы: ввод информации об авто (марка, номер), вкл./выкл.
    // двигателя, вкл./выкл. передачи (вперед, назад, нейтральная), движение вперед и назад
    // (ввод информации о скорости движения), расчет пройденных километров.

