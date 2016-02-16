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
         
         for (var i=0;i<OL.items.length;i++){
         	
         	
         }
     },
     
     onerror : function(e) {
         Ti.API.debug(e.error);
         alert('ERROR');
     },
     timeout : 5000 
 });
 
   client.open("GET", url);
   client.send();
 

