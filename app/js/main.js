(function() {
    'use strict'

    // Variables
    var screen = document.querySelector('.display-num'), // Display numbers
        screenResult = document.querySelector('.display'), // Display result
        warming = document.querySelector('.warming'),
        equals = document.querySelector('.equals'),
        elem = document.querySelectorAll('.num'), // List of numbers
        ops = document.querySelectorAll('.ops'), // List of operators
        clear = document.querySelector('.clear'),
        delLast = document.querySelector('.del-last'),
        period = document.querySelector('.period'),
        output = '',
        result, //Result
        operator,
        limit;


    var setNum = function() {
        var num = this.getAttribute('data-num');
        output += num;
        result = screen.innerHTML += num;
        screenResult.innerHTML = output;

        limit = result.length;
        if(limit > 30 ) {
            warming.innerHTML = 'Sorry no more input is allowed';
            for (var i = 0, len = elem.length; i < len; i++ ) {
                elem[i].setAttribute('disabled', 'true');
            }
        }
    };

    var moveNum = function() {
        operator = this.getAttribute('data-ops');

        if(screen.innerHTML === '') {
            screen.innerHTML = screen.innerHTML.concat('');
        }
        else if(result) {
            result = result.concat(operator);
            screen.innerHTML = result;
            output = '';
            screenResult.innerHTML = output;
        }
    };

    var periodNum = function() {
        period = this.getAttribute('data-num');
        if(screen.innerHTML === '' && screenResult.innerHTML === '') {
            result = screen.innerHTML = screen.innerHTML.concat('0.');
            output = screenResult.innerHTML = screenResult.innerHTML.concat('0.');
        }
        else if(screenResult.innerHTML === output && screen.innerHTML === result) {
            output = output + period;
            screen.innerHTML = screen.innerHTML.concat('.');
            screenResult.innerHTML = screenResult.innerHTML.concat('.');
        }
    };

    var equalsNum = function() {
        if(screen.innerHTML === result) {
            screenResult.innerHTML = eval(result);
            screen.innerHTML = result + '=' + eval(result);
        }
        else {
            screenResult.innerHTML = '';
        }
    };

    var clearNums = function() {
        output = '';
        result = '';
        screen.innerHTML = '';
        screenResult.innerHTML = '';
    };

    for(var i = 0, len = elem.length; i < len; i++ ) {
        elem[i].onclick = setNum;
    }

    for(var i = 0, len1 = ops.length; i < len1; i++ ) {
        ops[i].onclick = moveNum;
    }

    period.onclick = periodNum;

    equals.onclick = equalsNum;

    clear.onclick = clearNums;

    delLast.onclick = function() {
        if (screenResult.innerHTML !== '') {
            output = output.slice(0, -1);
            result = result.slice(0, -1);
            screenResult.innerHTML = output;
            screen.innerHTML = result;
        }
    };
}());