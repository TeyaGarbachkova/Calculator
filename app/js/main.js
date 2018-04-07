(function() {
    "use strict"

    // Variables
    var screen = document.querySelector('.display-num'), // Display numbers
        screenResult = document.querySelector('.display'),
        warming = document.querySelector('.warming'),
        equals = document.querySelector('#equals'),
        elem = document.querySelectorAll('.num'), // List of numbers
        elem1 = document.querySelectorAll('.ops'), // List of operators
        clear = document.querySelector('.clear'),
        delLast = document.querySelector('.del-last'),
        zero = document.querySelector('.num-null'),
        period = document.querySelector('.period'),
        output = '',
        result, //Result
        operator,
        limit;


    var setNum = function() {
        var num = this.getAttribute("data-num");
        output += num;
        result = screen.innerHTML += num;
        screenResult.innerHTML = output;

        limit = result.length;
        if(limit > 30 ) {
            warming.innerHTML = "Sorry no more input is allowed";
            for (var i = 0, len = elem.length; i < len; i++ ) {
                elem[i].setAttribute("disabled", "true");
            }
        }
    };

    var moveNum = function() {
        operator = this.getAttribute("data-ops");
        if(screen.innerHTML === "") {
            screen.innerHTML = screen.innerHTML.concat("");
        }
        else if(result) {
            result = result.concat(operator);
            screen.innerHTML = result;
            output = "";
            screenResult.innerHTML = output;
        }
    };

    var zeroNum = function() {
        zero = this.getAttribute("data-num");
        if(screen.innerHTML === "") {
            output = screen.innerHTML = zero;
        }
        else if(screen.innerHTML === output) {
            output = screen.innerHTML += zero;
        }
    };

    var periodNum = function() {
        period = this.getAttribute("data-num");
        if(screen.innerHTML === "") {
            output = screen.innerHTML = screen.innerHTML.concat("0.");
        }
        else if(screen.innerHTML === output) {
            screen.innerHTML = screen.innerHTML.concat(".");
        }
    };

    var equalsNum = function() {
        if(screen.innerHTML === result) {
            screenResult.innerHTML = eval(result);
            screen.innerHTML = result + "=" + eval(result);
        }
        else {
            screenResult.innerHTML = "";
        }
    };

    var clearNums = function() {
        output = "";
        result = "";
        screen.innerHTML = "";
        screenResult.innerHTML = "";
    };

    for(var i = 0, len = elem.length; i < len; i++ ) {
        elem[i].onclick = setNum;
    }

    for(var i = 0, len1 = elem1.length; i < len1; i++ ) {
        elem1[i].onclick = moveNum;
    }

    zero.onclick = zeroNum;

    period.onclick = periodNum;

    equals.onclick = equalsNum;

    clear.onclick = clearNums;

    delLast.onclick = function() {
        if (screenResult.innerHTML !== "") {
            screenResult.innerHTML = output.slice(0, -1);
        }
    };

}());