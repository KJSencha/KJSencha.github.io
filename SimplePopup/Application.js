//
// Copyright (c) 2016 Wilke Global, Inc.
//
// Application.js
//
// 2016/08/08 - Matthew L. Schwickerath
//   simplePopup - Created

/*global Ext */

Ext.define('SimplePopup.Application', {
    extend: 'Ext.app.Application',

    requires: ['SimplePopup.view.MainPanel'],

    mainView: 'MainPanel',
    name: 'SimplePopup'
});
