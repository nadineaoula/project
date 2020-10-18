var stat_url='https://data.iledefrance.fr/api/records/1.0/search/?dataset=repertoire-bibliotheques&q=&rows=279&refine.typeinst=Biblioth%C3%A8que+ou+institut+universitaire'
$.getJSON(stat_url,function(data){
  alert(" data loaded ")
  console.log(data);
  console.log(data.records[0]);
    console.log(data.records[0].datasetid);
   console.log(data.records[0].fields.telephone);
   console.log(data.records[0].fields.commune);
   console.log(data.records[0].fields.nomtutelle);
   console.log(data.records[0].fields.typeinst);
  /*cache h2 au clic*/
  $(document).ready(function(){
  $("h5").click(function(){
    $(this).hide();
  });
});
  
   
  /* alerte que le paragraphe a été cliqué */
  $(document).ready(function(){
    
        $("#test").click(function(){
        alert("Look the table");
        });

  });
  
  $('span').css('color','red');
  $('ul#list li:first').css('color','red');
    $('ul#list li:last').css('color','yellow');
    $('ul#list li:even').css('background-color','green');
    $('ul#list li:odd').css('background-color','#A18080');
 
  
  $('[href]').css('color','grey');
  $('a[href="http://yahoo.com"]').css('color','green');
  
   $(".para1").hide();
   $(".para2").hide();
   $('#btn2').on('click',function(){
    $(".para1").hide();
    });
  
  
   
   $('#btn1').on('click',function(){
    $(".para1").show();
    });
  
     
  
   $('#btn3').on('click',function(){
    $(".para2").hide();
    });
  
     $('#btn4').on('click',function(){
    $(".para2").show();
    });
  
     
  $('#btn1').click(function(e){
  //alert(e.currentTarget.id);
  //alert(e.currentTarget.innerHTML);
    //alert(e.currentTarget.outerHTML);
    alert(e.currentTarget.className);
});
  
  $(document).on('mousemove', function(e){
               $("#coord").html('The coords of your mouse is actually :' +e.clientY +" for y " + "and  "  + e.clientX + "  for x")
               });
  






$('#list').before('<p> From 1789 until 1933, the terms of President and Vice President and the term of the Congress coincided,beginning on March 4 and ending on March 3. This changed when the 20th amendment to the Constitution wasadopted in 1933. Beginning in 1934, the convening date for Congress became January 3 (unless Congress by law appoints a different day), and beginning in 1937 the starting date for the presidential term became January 20. </p>');

  
  
//$('.para1').appendTo('.para2');
//$('.para1').prependTo('.para2');
  



  $(".users").append('<li>'+  data.records[0].fields.typeinst + '</li>');
  $(".users").append('<li>'+  data.records[0].fields.commune + '</li>');
    $(".users").append('<li>'+  data.records[0].fields.nomtutelle + '</li>');

  $(".tel").append('<li>'+  data.records[0].fields.telephone + '</li>');

  $("#nom2").append('<li>'+  data.records[0].fields.nomrue + '</li>');


     $("#nom").append('<a> ' +  data.records[0].fields.accesweb +'<\a>');
  
  

  

  });
