define([
    'jquery',
    'uiComponent',
    'ko',
    'underscore'
], function (
    $,
    Component,
    ko,
    _
) {
    'use strict';

    return Component.extend({
        availableOptions: ko.observableArray([]),
        /**
         * Init component
         */
        initialize: function (config) {
            this._super();
            var self = this;
            self.optionsList;
            //return this;
        },
        optionsList:function(){
            var option = {
                'value': 'Aadhar',
                'label': 0
            };
            self.availableOptions.push(option);
        },
        verify:function(){
            console.log('take actionyyy');
            var cardNumber = $('#card-field').val();
            console.log(cardNumber);

        }
    });
});