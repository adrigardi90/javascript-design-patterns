
document.onreadystatechange = () => {

    const init = (() => {

        // Private 
        const createAlert = (message) => {
            alert(message);
        }

        // Public
        return {

            showAlert: (message) => {
                createAlert(message);
                console.log(message)
            }
        }
    })();


    if (document.readyState === 'complete') {
        const alert_button = document.getElementById('alert_button');
        alert_button.addEventListener( 'click', () => {
            const alert_text = document.getElementById('alert_text').value;
            init.showAlert(alert_text);
        })
    }
};
