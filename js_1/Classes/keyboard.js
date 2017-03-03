/**
 * Created by piotr on 02.03.2017.
 */
define (
    [],
    function () {
        $('button[id]').click(function () {
            $('#Delete').attr('disabled', false);
        });
        $('#one').click(function () {
            if($('#ekran').val().length <= 8){
                $('#ekran').val($('#ekran').val() + "1");
            }
        });
        $('#two').click(function () {
            if($('#ekran').val().length <= 8){
                $('#ekran').val($('#ekran').val() + "2");
            }
        });
        $('#three').click(function () {
            if($('#ekran').val().length <= 8){
                $('#ekran').val($('#ekran').val() + "3");
            }
        });
        $('#four').click(function () {
            if($('#ekran').val().length <= 8){
                $('#ekran').val($('#ekran').val() + "4");
            }
        });
        $('#five').click(function () {
            if($('#ekran').val().length <= 8){
                $('#ekran').val($('#ekran').val() + "5");
            }
        });
        $('#six').click(function () {
            if($('#ekran').val().length <= 8){
                $('#ekran').val($('#ekran').val() + "6");
            }
        });
        $('#seven').click(function () {
            if($('#ekran').val().length <= 8){
                $('#ekran').val($('#ekran').val() + "7");
            }
        });
        $('#eight').click(function () {
            if($('#ekran').val().length <= 8){
                $('#ekran').val($('#ekran').val() + "8");
            }
        });
        $('#nine').click(function () {
            if($('#ekran').val().length <= 8){
                $('#ekran').val($('#ekran').val() + "9");
            }
        });
        $('#zero').click(function () {
            if($('#ekran').val().length <= 8){
                $('#ekran').val($('#ekran').val() + "0");
            }
        });
        $('#Cancel').click(function () {
            $('#ekran').val("PIN: ");
            $('button[id]').attr('disabled', false);
            $('#Delete').attr('disabled', true);
        });
        $('#Delete').click(function () {
            if($('#ekran').val().length > 5) {
                var kasowanie = $('#ekran').val().slice(0, -1);
                $('#ekran').val(kasowanie);
                if ($('#ekran').val().length <= 5) {
                    $('#Delete').attr('disabled', true);
                }

            }
        });

    }
);