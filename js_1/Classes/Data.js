define (function () {
        return {
            // Definicja Zmiennych
            $button: $('button[data-role="number"]'),
            $button_msg: $('button[id]'),
            wrong_key: 0,
            $SECRET_KEY: 1234,
            $ekran: $('#ekran'),
            $enter: $('#enter'),
            $delete: $('#delete'),
            $cancel: $('#cancel'),
            CONSTANTS: Object.freeze({
                OK_LENGTH: 9,
                LENGTH_TERMINAL: 8,
                DELETE_ON_OFF: 5,
                ERROR: {
                    TERMINAL_BLOCKER: 2,
                    PIN_INCORRECT: 1
                }
            }),
            //Wiadomości
            MSG: Object.freeze({
                pin_ok: "PIN jest OK",
                pin: 'PIN: ',
                low_marks: "Niepoprawna ilosć znaków",
                key_wrong: "Pin jest Zły. Pozostało prób",
                terminal_block: "Blokada terminala"
            })
        }
    }
);