function doClick(e) {
    alert('succes');
}

$.index.open();
	
    var url = "http://www.tvazteca.com/historico/index/more/format/json?program=272&string=&category=0&type=2&page=-2&numItems=100&imgW=65&imgH=65";
    var OL;
   
    var client = Ti.Network.createHTTPClient({
  
     onload : function(e) {
     	 OL=JSON.parse(this.responseText);
         Ti.API.info(this.responseText);
         JSON.stringify(OL);
         alert(JSON.stringify(OL));
         alert(JSON.parse(OL));
         for (var i=0;i<OL.items.length;i++){
         	
        //creacion de datos
			var row = Ti.UI.createTableViewRow({
				
				datos:OL.items[i],
			
			});
			
			//Donde se va a ver
			var view = Ti.UI.createView({
						
			});	
			
			//label que va a llevar cada seccion		
			var titulo = Ti.UI.createLabel({
						
			});	
			
			//imagen que va a llevar cada seccion		
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
 

