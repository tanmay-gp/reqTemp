define([
  '{%= name %}/config',
  '{%= name %}/router',
  '{%= name %}/apps',
],
function(config, Router , apps ){
     var initialize = function(){   
      apps.initialize()
      Router();
    }
    return { 
        initialize: initialize
    };  
});