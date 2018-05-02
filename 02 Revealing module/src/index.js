
document.onreadystatechange = () => {

    const init = (() => {

        // Public 
        const sumNumber = () => {
            getValue().innerText = +getValue().innerText + 1;
        }

        // Public 
        const restNumber = () => {
            getValue().innerText = +getValue().innerText - 1;
        }

        // Private
        const getValue = () => (document.getElementById('value'));

        return {
            sum: sumNumber,
            rest: restNumber,
        }
    })();


    if (document.readyState === 'complete') {
        const sum_button = document.getElementById('sum_button');
        sum_button.addEventListener( 'click', () => {
            init.sum();
        })

        const rest_button = document.getElementById('rest_button');
        rest_button.addEventListener( 'click', () => {
            init.rest();
        })
    }
};
