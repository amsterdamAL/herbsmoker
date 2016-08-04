function isThere(elementToBeChecked) {
    var TopView = $(window).scrollTop();
    console.log('topview: ' + TopView);
    
    var BotView = TopView + $(window).height();
    console.log('botview: ' + BotView);
    
    var TopElement = $(elementToBeChecked).offset().top;
    console.log('topelement: ' + TopElement);
    
    var BotElement = TopElement + $(elementToBeChecked).height() + 20;
    console.log('botelement: ' + BotElement);

    var lowerOffset = (BotElement - BotView) + TopView;

    return [(BotElement < BotView), lowerOffset];

}

$(document).ready(function(){

    var randomguestnumer = Math.floor(Math.random() * 9876) + 1234;

    var nickname = ("guest-" + randomguestnumer);
    
    //lastclicked anchor used for reply section toggle
    var lastClicked = "thc";
    

    



    $("a").unbind("click").click(function (event) {
            
        
        
        //if lastclicked is "thc", then no anchor has been clicked yet.
        if (lastClicked == "thc"){

            //get nessesary variables based on clicked 
            var CommentId = $(this).attr('id')
            var parentId = $(this).attr("data-id");
            var myElement = $(this).parent().parent().parent().next().find('.testscroll').eq(0);

            // set global lastclicked var...
            lastClicked = "#" + CommentId + ".replybox";

                       
            $("#" + CommentId + ".replybox").toggle('slow', function() {
                // Animation complete.
                var resultz = isThere( myElement );
                //console.log($("#" + CommentId + ".replybox").is(':visible') );
                console.log('newone: ' + resultz[0] + " " + resultz[1]);

                $("a" + "#" + CommentId).text('Cancel');
                if (!resultz[0]){

                    $('html,body').animate({scrollTop: resultz[1]}, 1000);
                }

            });
                

          
            $(this).parent().parent().parent().next().find('textarea').eq(0).focus();  
           
        
        }else if (lastClicked == "#" + $(this).attr('id') + ".replybox"){

            //get nessesary variables based on clicked 
            var CommentId = $(this).attr('id');
            var parentId = $(this).attr("data-id");
            var myElement = $(this).parent().parent().parent().next().find('.testscroll').eq(0);

            // reset global lastclicked var...
            lastClicked = "thc";
            $("a#" + CommentId).text('Reply');
            
            $("#" + CommentId + ".replybox").toggle("slow", function () {
                
               // Animation complete.
                var resultz = isThere( myElement );
                //console.log($("#" + CommentId + ".replybox").is(':visible') );
                console.log('newone: ' + resultz[0] + " " + resultz[1]);

                if (!resultz[0]){

                    $('html,body').animate({scrollTop: resultz[1]}, 1000);
                }
            });
            
            $(this).parent().parent().parent().next().find('textarea').eq(0).focus(); 
           
            
        }else{    
            
            var CommentId = $(this).attr('id')
            var parentId = $(this).attr("data-id");
            var myElement = $(this).parent().parent().parent().next().find('.testscroll').eq(0);
            var intro = "a#";
            console.log('fuck: ' + "a#" + parentId)
            //$(intro + parentId).text('Reply');
            // toggle back last clicked
            $(lastClicked).toggle("slow");

            lastClicked = "#" + CommentId + ".replybox";


               
                //InOrOut( myElement );
                

                //$(this).parent().parent().parent().next().find('textarea').eq(0).focus();
                //console.log($("#" + CommentId + ".replybox").is(':visible') );
            $("#" + CommentId + ".replybox").toggle("slow", function () {
                
               
                
               // Animation complete.
                var resultz = isThere( myElement );
                //console.log($("#" + CommentId + ".replybox").is(':visible') );
                console.log('newone: ' + resultz[0] + " " + resultz[1]);
                $("a#" + CommentId).text('Cancel');
                if (!resultz[0]){

                    $('html,body').animate({scrollTop: resultz[1]}, 1000);
                }
            });
            
            
            $(this).parent().parent().parent().next().find('textarea').eq(0).focus(); 
        }
    }); 

    $('#submit0').click(function (event) { 

        event.preventDefault(); 
        console.log('submit0');

        
        var csrnickname = $('#nickname0').val();

        console.log(csrnickname);


        if (csrnickname == "") {

            
            $('#nickname0').val(nickname);
            
            console.log("was blank, loaded default");
        }else{

            console.log("it was added");
        }
        $('#leveloneform').submit();

    });
        



    $('.submit1').click(function (event) { 

        event.preventDefault(); 
        console.log('submit1');

        //$(this).parent().find('.nickname').eq(0).val("fffdf") ;
        var csrnickname = $(this).parent().find('.nickname').eq(0).val();
        //console.log(csrnickname);


        if (csrnickname == "") {

            
            $(this).parent().find('.nickname').eq(0).val(nickname);
            
            //console.log("was blank, loaded default");
        }else{

            //console.log("it was added");
        }
        $(this).parent().parent().submit();

    });

    

    $('.destsubmit').click(function (event) { 

        event.preventDefault(); 
        //console.log('.destsubmit');

        
        var csrnickname = $(this).parent().find('.destnick').eq(0).val();

        //console.log(csrnickname);


        if (csrnickname == "") {

            
            $(this).parent().find('.destnick').eq(0).val(nickname);
            
            //console.log("was bblank, loaded default");
        }else{

            //console.log("it was added");
        }
        $(this).parent().parent().submit();

    });

    

    $('.sourcesubmit').click(function (event) { 

        event.preventDefault(); 
        
        var csrnickname = $(this).parent().find('.sourcenick').eq(0).val();

        if (csrnickname == "") {

            $(this).parent().find('.sourcenick').eq(0).val(nickname);
            
        }else{

            //console.log("it was addedd");
        }
        
        var csrnickname = $(this).parent().find('.sourcenick').eq(0).val();
        //console.log('finish: ' + csrnickname);

        //get parent id from the submit button click
        var destaddress = $(this).attr('data-destaddy');

        //get comment id from the submit button click
        var sourceaddress = $(this).attr('data-sourceaddy');
        
        //use comment id from above to get comment body
        var fulldestaddy = '#sourceaddress' + destaddress;  
        var fullnickaddy = '#destnick' + destaddress;       
        var sourcebody = $('#sourcebody' + sourceaddress).val();
        
        $(fulldestaddy).val(sourcebody);
        $(fullnickaddy).val(csrnickname);
        

        $('#destform' + destaddress).submit();
        


    });

    


    var InOrOut = function(element){
        console.log(element);
        if (element.length) {

            var offset = element.offset().top - $(window).scrollTop();
            offset = offset + 100;
            console.log('windowinnerheight: ' + window.innerHeight);
            console.log(offset);
            console.log('elementoffsettop: ' + element.offset().top);
            console.log('windowscrolltop: ' + $(window).scrollTop());

            if(offset > window.innerHeight){
                // Not in view

                $('html,body').animate({scrollTop: offset}, 1000);
                return false;
            }else{
           return true;
            
            }
        }else{
            console.log('no no no');
        }
    };
    

    var IsIt = function(element){

        var top_of_element = $(element).offset().top;
        var bottom_of_element = $(element).offset().top + $(element).outerHeight;
        var bottom_of_screen = $(window).scrollTop() + $(window).height();

        if((bottom_of_screen > top_of_element) && (bottom_of_screen < bottom_of_element)){
            console.log('is');
        }
        else {
            // The element is not visible, do something else
            console.log('isNOT');
        }


    };
    
});



   



