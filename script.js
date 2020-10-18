/*
$(document).ready(function(){
  $("button").click(function(){
    $.getJSON("https://data.iledefrance.fr/api/records/1.0/search/?dataset=repertoire-bibliotheques&q=&rows=279&refine.typeinst=Biblioth%C3%A8que+ou+institut+universitaire", function(result){
      $.each(result, function(i, field){
        $("div").append(field + " ");
      });
    });
  });
});*/

$.getJSON("https://data.iledefrance.fr/api/records/1.0/search/?dataset=repertoire-bibliotheques&q=&rows=279&refine.typeinst=Biblioth%C3%A8que+ou+institut+universitaire",
function(data){
  console.log(data);
  
  
})
  .done(function(){
    alert("completed");
})
  .fail(function(e){
    console.log("error:");
    console(e);
});
  

