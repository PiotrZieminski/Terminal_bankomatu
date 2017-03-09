/**
 * Created by piotr on 02.03.2017.
 */
define (
    ['Data'],
    function (Data) {
        //var $button = $('button[data-role="number"]');
        //var $ekran = $('#ekran');
        Data.$button.click(function () {
            if(Data.$ekran.val().length <= Data.CONSTANTS.LENGTH_TERMINAL) {
                Data.$ekran.val(Data.$ekran.val() + $(this).text());
            }
        });
        Data.$button_msg.click(function () {
            $('#delete').attr('disabled', false);
        });
        $('#cancel').click(function () {
            $('#ekran').val(Data.MSG.pin);
            Data.$button_msg.attr('disabled', false);
            $('#delete').attr('disabled', true);
            Data.wrong_key = 0;
        });
        $('#delete').click(function () {
            if (Data.$ekran.val().length <= Data.CONSTANTS.DELETE_ON_OFF) {
                $('#delete').attr('disabled', true);
            }
            if(Data.$ekran.val().length > Data.CONSTANTS.DELETE_ON_OFF) {
                var kasowanie = Data.$ekran.val().slice(0, -1);
                Data.$ekran.val(kasowanie);
            }
        });
    }
);