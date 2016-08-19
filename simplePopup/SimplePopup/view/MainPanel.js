//
// Copyright (c) 2016 Wilke Global, Inc.
//
// MainPanel.js
//
// 2016/08/08 - Matthew L. Schwickerath
//   simplePopup - Created

/*global Ext */

Ext.define('SimplePopup.view.MainPanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'mainPanel',

    requires: [
        'Ext.button.Button',
        'SimplePopup.view.MainPanelController'
    ],

    controller: 'mainPanel',

    items: [{
        xtype: 'button',
        handler: 'onShowPopupClick',
        text: 'Show Popup MVVM'
    }, {
        xtype: 'button',
        handler: function () {
            window.open('http://www.wilkeglobal.com');
        },
        text: 'Show Popup Direct'
    }]
});
