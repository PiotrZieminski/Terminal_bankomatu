/**
 * Created by piotr on 02.03.2017.
 */
define (
    [],
    function () {
        $('button[data-role="number"]').click(function() {
            if($('#ekran').val().length <= 8) {
                $('#ekran').val($('#ekran').val() + $(this).text());
            }
        });

        $('button[id]').click(function () {
            // można stworzyć osobny moduł do sterowania 
            // interfejsem
            // mamy metodę która ma switch'a i na podstawie parametru
            // steruje ustawieniem interfejsu
            $('#Delete').attr('disabled', false);
        });

        // id powinny być pisane małymi literami
        $('#Cancel').click(function () {
            $('#ekran').val("PIN: ");
            $('button[id]').attr('disabled', false);
            $('#Delete').attr('disabled', true);
        });

        $('#Delete').click(function () {
            // wszystkie 5, 8, 9 -> przenieść do stałych
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