function doClick(e) {
    alert('succes');
}

$.index.open();
	
    var url = "http://www.tvazteca.com/historico/index/more/format/json?program=272&string=&category=0&type=2&page=-2&numItems=100&imgW=65&imgH=65";
    var ol;
   
    var client = Ti.Network.createHTTPClient({
  
     onload : function(e) {
     	 ol=JSON.parse(this.responseText);
         //Ti.API.info(this.responseText);
         //Ti.API.info(JSON.stringify(ol.items.elemento));
       
         //JSON.stringify(ol);
         //alert(JSON.stringify(ol));
         //alert(ol);
         var datosTabla= [];
         
         for (var i=0;i<ol.items.length;i++){
         	
            Ti.API.info(JSON.stringify(ol.items[i].img));        
            //datos
			var fila = Ti.UI.createTableViewRow({
			
			   height:100,
			   width: 320, 
			
			});		
			
			var titulo = Ti.UI.createLabel({
						color: 'white',
						left: 10,
						top: 10,
						text: ol.items[i].title,
						width: 200,
						
			});	
			
					
			var imagen = Ti.UI.createImageView({
						
						right:20,
						borderColor: 'white',
						borderRadius: 2,
						image: ol.items[i].img, 
						height: 60,
						width: 60,
			});
            fila.add(titulo);
         	fila.add(imagen);
         	datosTabla.push(fila);
         	
         };
        $.tabla1.setData(datosTabla);
     },
     
     onerror : function(e) {
         Ti.API.debug(e.error);
         alert('ERROR');
     },
     timeout : 5000 
 });
 
   client.open("GET", url);
   client.send();
 

