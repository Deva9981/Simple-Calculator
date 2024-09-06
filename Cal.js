new Vue({
    el: '#app',
    data: {
        display: '',
        buttons: [
            '7', '8', '9', '/',
            '4', '5', '6', '*',
            '1', '2', '3', '-',
            'C', '0', '=', '+'
        ]
    },
    methods: {
        handleClick(button) {
            if (button === 'C') {
                this.display = '';
            } else if (button === '=') {
                this.evaluateExpression();
            } else {
                this.display += button;
            }
        },
        evaluateExpression() {
            try {
                this.display = eval(this.display);
            } catch (e) {
                this.display = 'Error';
            }
        }
    }
});
