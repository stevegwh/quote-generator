$(document).ready(function() {
    var textAltered = false;
    var getQuote = function() {
        addStyle(null);
        textAltered = false;
        $('#quote-body').attr("style", "display:");
        $('#quote-mod').attr("style", "display:none");
        $('.btn').removeClass("disabled");
        $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=0&callback=", {
            _: new Date().getTime()
        }, function(a) {
            $('#quote-body').empty().append(a[0].content);
            $('#quote-mod').empty().append(a[0].content);
            $("#author").empty().append("- " + a[0].title);
        });
    }


    var addStyle = function(style) {
        var styletorem = document.getElementById('css');
        styletorem.parentNode.removeChild(styletorem)
        var newstyle = document.createElement("link");
        newstyle.setAttribute("rel", "stylesheet");
        newstyle.setAttribute("type", "text/css");
        newstyle.setAttribute("id", "css");
        newstyle.setAttribute("href", style + ".css");
        document.getElementsByTagName("head")[0].appendChild(newstyle);
    }
    var btnToggle = function() {
        if (!textAltered) {
            $('#quote-body').toggle();
            $('#quote-mod').toggle()
        }

    }


    var _1337Quote = function(quote) {
        textAltered = true;
        var leet = {
            A: '@',
            B: '8',
            C: '(',
            D: 'D',
            E: '3',
            F: 'F',
            G: '6',
            H: '#',
            I: '!',
            J: 'J',
            K: 'K',
            L: '1',
            M: 'M',
            N: 'N',
            O: '0',
            P: 'P',
            Q: 'Q',
            R: 'R',
            S: '$',
            T: '7',
            U: 'U',
            V: 'V',
            W: 'W',
            X: 'X',
            Y: 'Y',
            Z: '2'
        }
        quote = quote.split("");
        var _1337 = "";
        for (var i = 0; i < quote.length; i++) {
            for (var x = 0; x < quote[i].length; x++) {
                var regex = /[a-zA-z]/gi;
                if (quote[i][x].match(regex)) {
                    var key = quote[i][x].toUpperCase();
                    _1337 += leet[key];
                } else {
                    _1337 += quote[i][x];
                }
            }
        }
        $('#quote-mod').empty().append("<p>" + _1337 + "</p>");
        addStyle("1337-sp33k");
    }

    var foxtrotQuote = function(words) {
        textAltered = true;
        var nato = {
            "a": "Alfa ",
            "b": "Bravo ",
            "c": "Charlie ",
            "d": "Delta ",
            "e": "Echo ",
            "f": "Foxtrot ",
            "g": "Golf ",
            "h": "Hotel ",
            "i": "India ",
            "j": "Juliett ",
            "k": "Kilo ",
            "l": "Lima ",
            "m": "Mike ",
            "n": "November ",
            "o": "Oscar ",
            "p": "Papa ",
            "q": "Quebec ",
            "r": "Romeo ",
            "s": "Sierra ",
            "t": "Tango ",
            "u": "Uniform ",
            "v": "Victor ",
            "w": "Whiskey ",
            "x": "Xray ",
            "y": "Yankee ",
            "z": "Zulu "
        };
        var result = "";
        words = words.replace(/[\s]/g, "").toLowerCase();
        for (var i = 0; i < words.length; i++) {
            if (nato[words[i]] !== undefined) {
                result += nato[words[i]];
            } else {
                result += words[i] + " ";
            }
        }
        result = result.replace(/\s$/, "");
        addStyle("foxtrot");
        $('#quote-mod').empty().append("<p>" + result + "</p>");
    }

    var reverseQuote = function(quote) {
        quote = quote.split(" ");
        for (var i = 0, length = quote.length; i < length; i++) {
            quote[i] = quote[i].split("")
            if (quote[i] == ")") {
                quote[i] = "(";
            } else if (quote[i] == "(") {
                quote[i] = ")";
            } else {
                quote[i].reverse();
            }

            quote[i] = quote[i].join("");
        }

        quote = quote.reverse().join(" ");

        var btn_text = $('#reverse').text().split("").reverse().join("");
        $('#reverse').text(btn_text);

        $('#quote-mod').empty().append("<p>" + quote + "</p>");


    }



    $("#quote-button").click(function() {
        getQuote();
    });

    $("#reverse").click(function() {
        btnToggle();
        reverseQuote($('#quote-mod').text());

    });

    $('#foxtrot').click(function() {
        btnToggle();
        foxtrotQuote($('#quote-body').text());


    })

    $('#1337-sp33k').click(function() {
        btnToggle();
        _1337Quote($('#quote-body').text());

    })




    var tweetIt = function() {
        var tweetText = $('#quote_area').text();
        var emptyText = "<p> Click to get a quote, first! </p>"
        if (!tweetText || tweetText === emptyText) {
            $("#quote_area").empty().append(emptyText)
            return;
        }
        window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(tweetText));
    }

    getQuote();
})
