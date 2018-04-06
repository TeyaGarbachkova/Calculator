(function() {
    "use strict"

    // Variables
    var screen = document.querySelector('.display-num'), // Display numbers
        screenResult = document.querySelector('.display'),
        equals = document.querySelector('#equals'),
        elem = document.querySelectorAll('.num'), // List of numbers
        elem1 = document.querySelectorAll('.ops'), // List of operators
        clear = document.querySelector('.clear'),
        delLast = document.querySelector('.del-last'),
        output,
        result, //Result
        operator,
        limit,
        zero = document.querySelector('.num-null'),
        period = document.querySelector('.period');


    for(var i = 0, len = elem.length; i < len; i++ ) {
        elem[i].onclick = function() {
            var num = this.getAttribute("data-num");
            output = num;
            //output = screen.innerHTML + num;
            //console.log(output);
            result = screen.innerHTML += num;
            screenResult.innerHTML = output;
            limit = output.length;
            if(limit > 16 ) {
                alert("Sorry no more input is allowed");
            }
        };
    }

    zero.onclick = function() {
        zero = this.getAttribute("data-num");
        if(screen.innerHTML === "") {
            output = screen.innerHTML = zero;
        }
        else if(screen.innerHTML === output) {
            output = screen.innerHTML += zero;
        }
    };

    period.onclick = function() {
        period = this.getAttribute("data-num");
        if(screen.innerHTML === "") {
            output = screen.innerHTML = screen.innerHTML.concat("0.");
        }
        else if(screen.innerHTML === output) {
            screen.innerHTML = screen.innerHTML.concat(".");
        }
    };

    equals.onclick = function() {
        if(screen.innerHTML === result) {
            screenResult.innerHTML = eval(result);
        }
        else {
            screenResult.innerHTML = "";
        }
    };

    clear.onclick = function() {
        screen.innerHTML = "";
        screenResult.innerHTML = "";
    };

    delLast.onclick = function() {
        if (screenResult.innerHTML !== "") {
            screenResult.innerHTML = output.slice(0, -1);
        }
    };

    for(var i = 0, len1 = elem1.length; i < len1; i++ ) {
        elem1[i].onclick = function() {
            operator = this.getAttribute("data-ops");
            this.setAttribute("clicked", "true");
            if(screen.innerHTML === "") {
                screen.innerHTML = screen.innerHTML.concat("");
            }
            else if(result) {
                result = result.concat(operator);
                screen.innerHTML = result;
                screenResult.innerHTML = output;
                console.log(output);
            }

        };
    }
}());