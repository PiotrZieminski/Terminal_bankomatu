define (
    ['Data'],
    function (Data) {
        setTimeout(function () {
            Data.$ekran.val(Data.MSG.pin);
        }, 2500);
        Data.$enter.click(function () {
            if (Data.$ekran.val().length == Data.CONSTANTS.OK_LENGTH && Data.$ekran.val() == Data.MSG.pin + Data.$SECRET_KEY) {
                Data.$ekran.val(Data.MSG.pin_ok);
            } else if (Data.$ekran.val().length < Data.CONSTANTS.OK_LENGTH) {
                Data.$ekran.val(Data.MSG.low_marks);
                $('#delete').attr('disabled', true);
                setTimeout(function () {
                    Data.$ekran.val(Data.MSG.pin);

                }, 2500);
            } else {
                if (Data.wrong_key == 2) {
                    Data.$ekran.val(Data.MSG.terminal_block);
                    Data.$button_msg.attr('disabled', true);
                    $('#cancel').attr('disabled', false);
                }
                if (Data.wrong_key == 1) {
                    Data.$ekran.val(Data.MSG.key_wrong + '1');
                    Data.wrong_key++;
                    $('#delete').attr('disabled', true);
                    setTimeout(function () {
                        $('#ekran').val(Data.MSG.pin);
                    }, 2500);
                }
                if (Data.wrong_key == 0) {
                    Data.$ekran.val(Data.MSG.key_wrong + '2');
                    Data.wrong_key++;
                    $('#delete').attr('disabled', true);
                    setTimeout(function () {
                        Data.$ekran.val(Data.MSG.pin);
                    }, 2500);
                }
            }
        });
    });