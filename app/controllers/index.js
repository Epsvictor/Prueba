function doClick(e) {
    alert('succes');
}

$.index.open();
	
    var url = "http://www.tvazteca.com/historico/index/more/format/json?program=272&string=&category=0&type=2&page=-2&numItems=100&imgW=65&imgH=65";
    var ol;
   
    var client = Ti.Network.createHTTPClient({
  
     onload : function(e) {
     	 ol=JSON.parse(this.responseText);
         Ti.API.info(this.responseText);
         JSON.stringify(ol);
         // alert(JSON.stringify(ol));
         for (var i=0;i<ol.items.length;i++){
         	
        //datos
			var row = Ti.UI.createTableViewRow({
				
				datos:ol.items[i],
			
			});
			
			
			var view = Ti.UI.createView({
						
			});	
			
			
			var titulo = Ti.UI.createLabel({
						
			});	
			
					
			var imagen = Ti.UI.createImageView({
						
						
			});
        
         	
         };
     },
     
     onerror : function(e) {
         Ti.API.debug(e.error);
         alert('ERROR');
     },
     timeout : 5000 
 });
 
   client.open("GET", url);
   client.send();
 

