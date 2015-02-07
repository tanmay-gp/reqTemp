define([
    'jquery',
    'underscore',
    'backbone',
    'subrouter',
    'helpers'
  ],
  function($, _, Backbone, subrouter, H) {
    'use strict';
    var Router = Backbone.SubRoute.extend({
      initialize: function() {
      },
      routes: {
        "": 'index',
      },

      index:function(){
        H.render_view('{%= name %}/views/{%= name %}.js')
      },


    });
    return Router;
  });