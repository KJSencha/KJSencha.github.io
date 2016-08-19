//
// Copyright (c) 2016 Wilke Global, Inc.
//
// MainPanelController.js
//
// 2016/08/08 - Matthew L. Schwickerath
//   simplePopup - Created

/*global Ext */

Ext.define('SimplePopup.view.MainPanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mainPanel',

    onShowPopupClick: function () {
        window.open('http://www.wilkeglobal.com');
    }
});
