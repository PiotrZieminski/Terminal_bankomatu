/**
 * Created by piotr on 02.03.2017.
 */
require.config({
    baseUrl: "./js_1",
    paths: {
        'keyboard': 'Classes/keyboard',
        'app': 'app',
        'Data': 'Classes/Data',
    },
    waitSeconds: 15
});

requirejs(['app', 'Data', 'keyboard']);
