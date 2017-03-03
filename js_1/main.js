/**
 * Created by piotr on 02.03.2017.
 */
require.config({
    baseUrl: "./js_1",
    paths: {
        'panelview': 'Classes/panelview',
        'keyboard': 'Classes/keyboard'
    },
    waitSeconds: 15
});

requirejs(['app', 'panelview', 'keyboard']);
