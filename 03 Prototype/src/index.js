
document.onreadystatechange = () => {

    var Clock = () => {
        this.brand = 'ROLEX';
        this.old = 3;
        this.weight = 100
    }

    Clock.prototype = {
        showDate: () => {
            document.getElementById('value').innerText = new Date().toDateString();
        },
    }


    if (document.readyState === 'complete') {

        var myClock = new Clock();
        // Clock.brand  => 'ROLEX'
        // Clock.old   => 3
        // Clock.weight   => 100
        // https://mathieularose.com/javascript-prototype/

        // myClock.brand => undefined

        myClock.brand = 'CASIO';

        document.getElementById('brand').innerText = myClock.brand;

        const date_button = document.getElementById('date_button');
        date_button.addEventListener('click', () => {
            myClock.showDate();
        })

    }
};
