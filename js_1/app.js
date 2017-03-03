/**
 * Created by piotr on 02.03.2017.
 */


var error = 0;
//var KODPIN = 0;$('#Cancel').attr('enabled', 'enabled');
$('#Enter').click(function () {
    if($('#ekran').val().length == 9 && $('#ekran').val() == 'PIN: ' + $SECRET_KEY) {
        $('#ekran').val('PIN jest OK');
    } else if ($('#ekran').val().length < 9) {
        $('#ekran').val('Niepoprawna ilosć znaków');
        setTimeout( function () {
            $('#ekran').val('PIN: ');
        }, 2500);
    } else {
        if (error == 2) {
            $('#ekran').val('Blokata terminala');
            $('button[id]').attr('disabled', true);
            $('#Cancel').attr('disabled', false);
            $('#Delete').attr('disabled', true);
        }
        if (error == 1) {
            $('#ekran').val('Pin jest Zły. Pozostało prób 1');
            error++;
            setTimeout( function () {
                $('#ekran').val('PIN: ');
            }, 2500);
        }
        if (error == 0) {
            $('#ekran').val('Pin jest Zły. Pozostało prób 2');
            error++;
            setTimeout( function () {
                $('#ekran').val('PIN: ');
            }, 2500);
        }
    }
    $('#Delete').attr('disabled', true);
});