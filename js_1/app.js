/**
 * Created by piotr on 02.03.2017.
 */

// to całe do zamienienia na moduł

var error = 0;

var CONSTANTS = Object.freeze({
    OK_LENGTH: 9,
    ERROR: {
        TERMINAL_BLOCKED: 2,
        PIN_INCORRECT: 1,
    }
});

var $ekran = $('#ekran');

//var KODPIN = 0;$('#Cancel').attr('enabled', 'enabled');
$('#Enter').click(function () {
    if ($ekran.val().length == CONSTANTS.OK_LENGTH && $ekran.val() == 'PIN: ' + $SECRET_KEY) {
        $ekran.val('PIN jest OK');
    } else if ($ekran.val().length < CONSTANTS.OK_LENGTH) {
        $ekran.val('Niepoprawna ilosć znaków');
        setTimeout(function() {
            $ekran.val('PIN: ');
        }, 2500);
    } else {
        if (error == CONSTANTS.ERROR.TERMINAL_BLOCKED) {
            $ekran.val('Blokada terminala');
            $('button[id]').attr('disabled', true);
            $('#Cancel').attr('disabled', false);
            $('#Delete').attr('disabled', true);
        }
        if (error == CONSTANTS.ERROR.PIN_INCORRECT) {
            $ekran.val('Pin jest Zły. Pozostało prób 1');
            error++;
            setTimeout( function () {
                $('#ekran').val('PIN: ');
            }, 2500);
        }
        // 0 prznieść do stałych
        if (error == 0) {
            $('#ekran').val('Pin jest Zły. Pozostało prób 2');
            error++;
            setTimeout( function () {
                // obiekty jQuery przenieść do zmiennych
                $('#ekran').val('PIN: ');
            }, 2500);
        }
    }
    $('#Delete').attr('disabled', true);
});