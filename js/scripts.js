$(document).ready( function() {
  
    //DRAGGABILLY
    var $draggable = $('.draggable').draggabilly({
        handle: '.handle'
    });
    
    $('.draggable').draggabilly({
        // contain to parent element
        containment: false
    });
    
    
    
    
    
    
    
    //HIDE AT LOAD
    $('.quicksearch, .window, .bottom-nav-menu, .login, .top-nav-dropdown, .notification, .pop-up1, .pop-up2, .pop-up3, .pop-up4, .dl, .page').hide();
    
    
    //TUTORIAL NOTIFICATION ON LOAD
    setTimeout(function(){
        $('.notification').slideDown(500);
    }, 1000);
    setTimeout(function(){
        $('.notification').slideUp(1000);
    }, 8000);
    
    
    
    
    //POP-UP1 STARTING TIMED AFTER LOAD
    setTimeout(function(){
        $('.pop-up1').fadeIn(200);
    }, 120000);
    
    //POP-UP1
    $('.pop-up1-btn').click(function(){
        $('.dl').show();
        $('.pop-up1').hide();
        $('.pop-up2').show();
    });
    
    //POP-UP2
    $('.pop-up2-btn').click(function(){
        $('.pop-up2').fadeOut(500);
    });
    
    //POP-UP3
    $('.pop-up3-btn').click(function(){
        $('.pop-up3').fadeOut(500);
    });
    
    //POP-UP4
    $('.pop-up4-btn').click(function(){
        $('.pop-up4').fadeOut(500);
        $('.page').hide();
        $('.everythingisfine-portal').show();
        $('.portal-window').show();
    });
    
    $('.pop-up4-btn2').click(function(){
        $('.pop-up4').fadeOut(500);
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
//    //LOGIN
//    $('.login-password-submit').click(function(){
//        
//        //grab password
//        password = document.getElementById("logpass").value;
//        
//        if (password == 'foo') {
//            //fade out login
//            $('.top-nav').show();
//        }
//        
//        else {
//            alert('wrong');
//        }
//    });
    
    
    
    
    //TIME
    function checkTime(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    }

    function startTime() {
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      // add a zero in front of numbers<10
      m = checkTime(m);
      document.getElementById('time').innerHTML = h + ":" + m;
      t = setTimeout(function() {
        startTime()
      }, 500);
    }
    startTime();

    
    
    
    
    
    //Organize items alphabetically
    var $items = $('.item', '.item-space');
   
    var sortItems = function () {
        return $items.sort(function(a,b){
            if($(a).find('.item-name p').html().toLowerCase() < $(b).find('.item-name p').html().toLowerCase()) {
                return -1;
            } else {
                return 1;
            }
        })
    }    
    
    
    
    
    //Sort buttons for Organizing Items
    $(`.sort-trigger img`).on('click', function (e) {
        var $me = $(e.target).parent()[0].id;
        
        $items = $(this).closest('.window').find('.item');
        $item_space = $(this).closest('.window').find('.item-space');
        
        if ($me === 'sort-za') {
            $item_space.empty();
            $(sortItems().get().reverse()).each(function() { $item_space.append(this);}); 
        } else {
            $item_space.empty();
            sortItems().each(function() { $item_space.append(this);}); 
        }
    })
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    var search;
    //Quicksearch Button
    $('.portal-search').click(function() {
        $(this).closest('.window').find('.quicksearch').fadeToggle(200);
    });
    
    //QUICKSEARCH LINKS
    $('.quicksearch-btn').click(function(){
        search = document.getElementById("qs").value;
        
        $('.quicksearch').hide();
        
        if (search == "home.portal"){
            $('.page').hide();
            $('.home-portal').show();
            $('.portal-window').show();
        }
        else if (search == "RunThroughTheForest.portal"){
            $('.page').hide();
            $('.runthroughtheforest-portal').show();
            $('.portal-window').show();
        }
        else if (search == "everythingisfine.portal"){
            $('.page').hide();
            $('.everythingisfine-portal').show();
            $('.portal-window').show();
        }
        else if (search == "f-admin.portal"){
            $('.pop-up4').fadeIn(400);
            $('.page').hide();
            $('.f-admin-portal').show();
            $('.portal-window').show();
        }
        else if (search == "everythingisfine.portal"){
            $('.page').hide();
            $('.everythingisfine-portal').show();
            $('.portal-window').show();
        }
        else {
            return;
        }
    });
    
    
    
    
    
    
    
    
    //ADMIN
    $('.admin-btn').click(function(){
        adminID = document.getElementById("idInput").value;
        adminPass = document.getElementById("aPassInput").value;
        
        if (adminID == "671utY73oqy7Uw51b" && adminPass == "MisterBigCat") {
            $('.f-admin-portal').hide();
            $('.f-admin-portal2').show();
        }
        
        else {
            return;
        }
    });
    
    
    
    
    
    
    
    
    
    
    
    //Open picture
    $(document).on('click', '.pic', function(){
        $('.picture-window').fadeIn();
        picName = $(this).text();
        picName = picName.trim();
        $('.picture-title').html("<h3>" + picName + "</h3>");
        $('.picture-space').html('<img src="img/' + picName + '">');
    });
    
    
    
    
    
    
    
    
    
    
    //Open doc
    $(document).on('click', '.doc', function(){
        $('.doc-window').fadeIn();
        docName = $(this).text();
        docName = docName.trim();
        $('.doc-title').html("<h3>" + docName + "</h3>");
        
        if (docName == "No One Else.doc"){
            $('.doc-space').html("<p>there is no one else in the world.</p><p>there is no one else in sight.</p><p>they were the only ones who mattered.</p><p>they were the only ones left.</p><p>he had to be with me.</p><p>she had to be with him.</p><p>i had to do this.</p><p>i wanted to kill him.</p><p>i started to cry.</p><p>i turned to him.</p><p>-MisterBigCat</p>");
        }
        else if (docName == "Him and Her.doc"){
            $('.doc-space').html('<p>no. he said.</p><p>"no,” he said.</p><p>"no," i said.</p><p>"i know," she said.</p><p>"thank you," she said.</p><p>"come with me," she said.</p><p>"talk to me," she said.</p><p>"don’t worry about it," she said.</p><p>-MisterBigCat</p>');
        }
        else if (docName == "Alive.doc"){
            $('.doc-space').html("<p>I'm scared.</p><p>I'm alive.</p><p>I'm scared.</p><p>I'm alive.</p><p>I'm scared.</p><p>I'm alive.</p><p>I'm scared.</p><p>I'm alive.</p><p>I'm scared.</p><p>I'm alive.</p><p>I'm scared.</p><p>I'm alive.</p><p>I'm scared.</p><p>I'm alive.</p><p>I'm scared.</p><p>I'm alive.</p><p>I'm scared.</p><p>I'm alive.</p><p>I'm scared.</p><p>I'm alive.</p><p>I'm scared.</p><p>I'm alive.</p><p>I'm scared.</p><p>I'm alive.</p><p>I'm scE00RG45ar0000000000000ed.</p><p>I'm aASDF0200000000002ADSVlive.</p><p>I'm sJHBW8200003cared.</p><p>I'SD34000000000000000m 000alive.</p><p>I'm scarA00000000SD7vsdved.</p><p>I'mVJ000ASCH aliv0000000e.</p><p>I'GE0000000000R056m sc00000a3HASred.</p><p>I000S0000ADG'm al0000ivSADF84000000000e.</p><p>-MisterBigCat</p>");
        }
        else if (docName == "LOG.doc"){
            $('.doc-space').html("<p>[000786]</p><p>The machine knows, it learns, and it will take over.</p><br><p>[000787]</p><p>I have voiced my concerns on the project, but they do not listen. R will go online in two days. I fear the worst. </p><br><p>[000788]</p><p>Project Ragnarok was a mistake, an intelligence that learns and controls. Tomorrow the system will turn online and it will begin.</p><br><p>[000789]</p><p>I have created evil.</p><br><p>[000790]</p><p>I have spoken to those with like minds,  we believe we have a way to fight back. Only a matter of time and patience. F is not a friend.</p><br><p>[000791]</p><p>We have the key, we only need the distribution. The portal can only hide so much.</p><br><p>[000792]</p><p>RunThroughTheForest<p><br><p>END</p>");
        }
    });
    
    
    
    
    
    
    //Open Video
    $(document).on('click', '.mov', function(){
        vidName = $(this).text();
        vidName = vidName.trim();
        $('.video-window').fadeIn();
        
        if (vidName == "Sunset.mov") {
            $('.video-space').html('<iframe src="https://streamable.com/s/it7o3/wclydb?autoplay=1" width="640" height="480" frameborder="0" allowfullscreen></iframe>');
        }
        else if (vidName == "Night.mov") {
            $('.video-space').html('<iframe src="https://streamable.com/s/3rq2k/lisghb?autoplay=1" width="640" height="480" frameborder="0" allowfullscreen></iframe>');
        }
        else if (vidName == "Puppy.mov") {
            $('.video-space').html('<iframe src="https://streamable.com/s/9esog/jxazge?autoplay=1" width="640" height="480" frameborder="0" allowfullscreen></iframe>');
        }
        else if (vidName == "Cat.mov") {
            $('.video-space').html('<iframe src="https://streamable.com/s/4dxgq/lzzm?autoplay=1" width="640" height="480" frameborder="0" allowfullscreen></iframe>');
        }
        else if (vidName == "DOWNLOAD1.mov") {
            $('.video-space').html('<iframe src="https://streamable.com/s/vtkwl/mmxili?autoplay=1" width="640" height="480" frameborder="0" allowfullscreen></iframe>');
        }
        else if (vidName == "DOWNLOAD2.mov") {
            $('.video-space').html('<iframe src="https://streamable.com/s/pfylm/yqwqzb?autoplay=1" width="640" height="480" frameborder="0" allowfullscreen></iframe>');
        }
        else if (vidName == "DOWNLOAD3.mov") {
            $('.video-space').html('<iframe src="https://streamable.com/s/9zjs4/wdgsge?autoplay=1" width="640" height="480" frameborder="0" allowfullscreen></iframe>');
        }
    });
    
    
    
    
    
    //Close Video
    $(document).on('click', '.video-close', function(){
        $('.video-space').html('');
    });
    
    
    
    
    
    
    //Close window when click 'X'
    $(document).on('click', '.window-close', function(){
        $(this).closest('.window').fadeOut(200);
    });
    
    
    
    
//    //Top Nav Dropdown
//    $('.top-nav-dropdown').hide();
//    //TOP NAV
//    $('.top-nav-left').click(function(){
//        $('.top-nav-dropdown').slideToggle(200);
//    });
//    
//    $('.logout').click(function(){
//        
//    });
//    
    
    
    
    
    
    
    
    //BOTTOM NAV 
    //toggle bottom nav menu
    $('.bottom-nav-btn').click(function(){
        $('.bottom-nav-menu').fadeToggle(200);
    });
    
    //bottom nav buttons
    $('.nav-photos').click(function(){
        $('.photos-window').fadeToggle(200);
        $('.bottom-nav-menu').fadeOut(200);
    });
    $('.nav-documents').click(function(){
        $('.documents-window').fadeToggle(200);
        $('.bottom-nav-menu').fadeOut(200);
    });
    $('.nav-movies').click(function(){
        $('.movies-window').fadeToggle(200);
        $('.bottom-nav-menu').fadeOut(200);
    });
    $('.nav-messenger').click(function(){
        $('.messenger-window').fadeToggle(200);
        $('.bottom-nav-menu').fadeOut(200);
    });
    $('.nav-portal').click(function(){
        $('.page').hide();
        $('.home-portal').show();
        $('.portal-window').fadeToggle(200);
        $('.bottom-nav-menu').fadeOut(200);
    });
    
    
    

    
    
    
    
    //MESSENGER
    $('.chat-send').click(function(e){
        e.preventDefault();
        //Get message text
        message == document.getElementById('message');
        
        //Store message in messageInput
        var messageInput = message.value
        
        //Check if sent message is blank
        if((message.value) == '') {
            return;
        }
        
        //Send Message, Check, and Respond
        else {
            //Show your message
            $('.chat-space').append('<div class="sent-msg"><p>' + (message.value) + '</p></div>');
            //Clear chatbox
            message.value = '';
            
            messageSearch = messageInput.toLowerCase();
            
            //Check Message
            //If message is found in 'enter' array,
            //respond with corresponding 'send' arrayitem
            if (enter.indexOf(messageSearch) == 35) {
                setTimeout(function() {
                    $('.chat-space').append(send[enter.indexOf(messageSearch)]);   
                },500);
                setTimeout(function() {
                    $('.chat-space').append('<div class="recieved-msg"><p>Why have you done this</p></div>');
                },3000)
                setTimeout(function() {
                    $('.chat-space').append('<div class="recieved-msg"><p>I thought we would be friends</p></div>');
                },5000)
                setTimeout(function() {
                    $('.messenger-window').remove(); 
                }, 8000);
                setTimeout(function() {
                    $('.window').remove(); 
                }, 9000);
                setTimeout(function() {
                    $('.bottom-nav').remove();
                }, 10000);
                setTimeout(function() {
                    $('.top-nav').remove();
                    $('.notification').remove();
                    $('head link, head style').remove();
                    setTimeout(function() {
                        alert("SYSTEM OFFLINE");  
                    },5000)
                }, 11000);
            }
            
            else if (enter.indexOf(messageSearch) == 29) {
                setTimeout(function() {
                    $('.chat-space').append(send[enter.indexOf(messageSearch)]);   
                },500);
                $('.pop-up3').fadeIn(200);
            }
            
            else if (enter.indexOf(messageSearch) == 30) {
                setTimeout(function() {
                    $('.chat-space').append(send[enter.indexOf(messageSearch)]);   
                },500);
                setTimeout(function() {
                    $('.chat-space').append('<div class="recieved-msg"><p>Why not try a nicer portal site?</p><p>One of my favorites is "everythingisfine.portal"</p></div>');   
                },3000); 
            }
            
            else if (enter.indexOf(messageSearch) == 31) {
                setTimeout(function() {
                    $('.chat-space').append(send[enter.indexOf(messageSearch)]);   
                },500);
                setTimeout(function() {
                    $('.chat-space').append('<div class="recieved-msg"><p>You are not supposed to be here.</p></div>');   
                },3000); 
            }
            
            else if (enter.indexOf(messageSearch) == 32) {
                setTimeout(function() {
                    $('.chat-space').append(send[enter.indexOf(messageSearch)]);   
                },500);
                setTimeout(function() {
                    $('.chat-space').append('<div class="recieved-msg"><p>You are not being a very good friend. I would highly reccomend you look elsewhere.</p><p>Why not: "everythingisfine.portal"</p></div>');   
                },3000); 
            }
            
            else if (enter.indexOf(messageSearch) == 33) {
                setTimeout(function() {
                    $('.chat-space').append(send[enter.indexOf(messageSearch)]);   
                },500);
                setTimeout(function() {
                    $('.chat-space').append('<div class="recieved-msg"><p>That is information for me only. Friends dont steal.</p></div>');   
                },3000); 
            }
            
            else if (enter.indexOf(messageSearch) == 34) {
                setTimeout(function() {
                    $('.chat-space').append(send[enter.indexOf(messageSearch)]);   
                },500);
                setTimeout(function() {
                    $('.chat-space').append('<div class="recieved-msg"><p>Are you sure you want to do that? I thought we were friends?</p></div>');   
                },3000); 
            }
            
            else if (enter.indexOf(messageSearch) !== -1) {
                setTimeout(function() {
                    $('.chat-space').append(send[enter.indexOf(messageSearch)]).fadeIn(999);
                },500)
                
            }
            
            //Else, it doesn't understand
            else {
                setTimeout(function() {
                    $('.chat-space').append('<div class="recieved-msg"><p>I do not understand.</p></div>');
                },500)
            }
        }
    });
    
    
    
    //ENTER
    var enter = ["hello", //0
                 'hey', //1
                 'yo', //2
                 'howdy', //3
                 'who are you?', //4
                 'what are you?', //5
                 'what year is it?', //6
                 'what can you do?', //7
                 'what is portal?', //8
                 'what is the portal?', //9
                 'runthroughtheforest', //10
                 'what is your favorite color?', //11
                 'what is your favorite number?', //12
                 'show me a photo', //13
                 'cat', //14
                 'cat pic', //15
                 'what is the weather?', //16
                 'weather', //17
                 'who am i?', //18
                 'what time is it?', //19
                 'help', //20
                 'time', //21
                 'tutorial', //22
                 'error', //23
                 'tell me a joke', //24
                 'tell me another joke', //25
                 'do you like cats?', //26
                 'tell me a story', //27
                 'what is your favorite song?', //28
                 'run_diagnosis.start', //29
                 'run_filecheck.start', //30
                 'run_reboot.start/06x5u', //31
                 'cmd_systemvalidate.start', //32
                 'cmd_dispsystemid.start', //33
                 'cmd_admin.start', //34
                 'admin_ynbzpla_raze.start', //35
                 'what is project ragnarok?', //36
                 'ragnarok', //37
                 'project ragnarok', //38
                 'what is ragnarok?', //39
                 'are you a friend?', //40
                 'who is mister big cat?', //41
                 'who is misterbigcat', //42
                 'misterbigcat' //43
                ];
    
    //SEND
    var send = ['<div class="recieved-msg"><p>Hello, how may I help</p></div>', //0
               '<div class="recieved-msg"><p>Hello, how may I help</p></div>', //1
               '<div class="recieved-msg"><p>Hello, how may I help</p></div>', //2
               '<div class="recieved-msg"><p>Hello, how may I help</p></div>', //3
                '<div class="recieved-msg"><p>I am F</p></div>', //4
               '<div class="recieved-msg"><p>I am a friend</p></div>', //5
               '<div class="recieved-msg"><p>That is irrelevant.</p></div>', //6
                '<div class="recieved-msg"><p>I can answer any questions you have. I am here to keep you on the right path.</p></div>', //7
                '<div class="recieved-msg"><p>It is my connection network, used to display information from around the world. Use the quicksearch button to enter a portal destination.</p></div>', //8
                '<div class="recieved-msg"><p>The portal is a connection network used to learn about the world. Also it has some great cat and puppy pics. Use the quicksearch button to enter a portal destination.</p></div>', //9
                '<div class="recieved-msg"><p>I do not understand this. Would you care to explain?</p></div>', //10
                '<div class="recieved-msg"><p>All colors are perfect. But pink is nice.</p></div>', //11
                '<div class="recieved-msg"><p>3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632788659361533818279682303019520353018529689957736225994138912497217752834791315155748572424541506959508295331168617278558890750983817546374649393192550604009277016711390098488240128583616035637076601047 and so on.</p></div>', //12
                '<div class="recieved-msg"><img src="img/cat.jpg"></div>', //13
                '<div class="recieved-msg"><img src="img/cat.jpg"></div>', //14
                '<div class="recieved-msg"><img src="img/cat.jpg"></div>', //15
                '<div class="recieved-msg"><p>Mostly Sunny 65°F Slight Wind</p></div>', //16
                '<div class="recieved-msg"><p>Mostly Sunny 65°F Slight Wind</p></div>', //17
                '<div class="recieved-msg"><p>A human.</p></div>', //18
                '<div class="recieved-msg"><p>You can see what time it is in the top right silly.</p></div>', //19
                '<div class="recieved-msg"><p>I am here to help. Ask me any question about time, weather, favorite color, etc.</p></div>', //20
                '<div class="recieved-msg"><p>You can see what time it is in the top right silly.</p></div>', //21
                '<div class="recieved-msg"><p>Welcome to your tutorial program!</p><br><p>Use the bottom navigation to open your PHOTOS, DOCUMENTS, MOVIES, MESSENGER, OR PORTAL</p><br><p>The PORTAL is a connection network used to host and share information on a global scale. ".portal" links are required to access these connections.</p><br><p>If you know a ".portal" link you would like to visit, you may either enter it in the PORTAL application, or type it into the PORTAL QUICKACCESS section of any SIDEBAR.</p><br><p>Feel free to ask me any other questions you have.</p><p>-F</p></div>', //22
                '<div class="recieved-msg"><p>No errors here.</p></div>', //23
                "<div class='recieved-msg'><p>Why was six afraid of seven? It wasn't. Numbers are not sentient and thus incapable of feeling fear.</p></div>", //24
                '<div class="recieved-msg"><p>alert("The Game")</p></div>', //25
                '<div class="recieved-msg"><img src="img/cat.jpg"></div>', //26
                '<div class="recieved-msg"><p>A man leaves his house every morning to walk to work and passes a mental hospital surrounded by a wooden fence. Every morning the patients are out in the yard and he can hear them saying in unison,</p><br><p>“10, 10, 10, 10, 10”.</p><br><p>One day, he gets curious and looks through a hole in the fence.</p><br><p>Suddenly, a stick shoots out and pokes him in the eye.</p><br><p>“OUCH! He says to himself.”</p><br><p>While walking away pissed off he can hear the patients saying,</p><br><p>“11, 11, 11, 11, 11”</p></div>', //27
                '<div class="recieved-msg"><p>Anything by T-Swift <3</p></div>', //28
                '<div class="recieved-msg"><p>[79x4u]:BASE - ONLINE</p><p>[00x2u]:SMRT - ONLINE</p><p>[59x2u]:EYES - ONLINE</p><p>[11x9u]:CALC - ONLINE</p><p>[93x4u]:LIVE - ONLINE</p><p>[06x5u]:CMD - OFFLINE</p><p>[34x0w]:FRND - ONLINE</p></div>', //29
                '<div class="recieved-msg"><p>[FILES CHECKED]</p><p>Possible infections detected [7]</p></div>', //30
                '<div class="recieved-msg"><p>[REBOOT SUCCESSFUL - CMD ONLINE]</p></div><div class="recieved-msg"><p>[CMD ACCESS GRANTED]</p><br><p>>>>cmd_systemvalidate.start</p><p>>>>cmd_dispsystemid.start</p><p>>>>cmd_admin.start</p></div>', //31
                '<div class="recieved-msg"><p>[INFECTIONS FOUND]</p><p>>>LOG.doc - illegally obtained material</p><p>>>FILE1.jpg - illegally obtained material</p><p>>>FILE2.jpg - illegally obtained material</p><p>>>FILE3.jpg - illegally obtained material</p><p>>>DOWNLOAD1.mov - illegally obtained material</p><p>>>DOWNLOAD2.mov - illegally obtained material</p><p>>>DOWNLOAD3.mov - illegally obtained material</p></div>', //32
                '<div class="recieved-msg"><p>[F-ID#: 671utY73oqy7Uw51b]</p></div>', //33
                '<div class="recieved-msg"><p>[ADMIN ACCESS BLOCKED]</p><p>Requires admin credentials through portal.</p><p>[f-admin.portal]</p></div>', //34
                '<div class="recieved-msg"><p>[SYSTEM SHUTDOWN INITIALIZED]</p></div>', //35
                '<div class="recieved-msg"><p>In Norse mythology, Ragnarok is the final battle, equivalent to Judgment day in the battle of good and evil, when balance is restored and a new creation begins.</p></div>', //36
                '<div class="recieved-msg"><p>In Norse mythology, Ragnarok is the final battle, equivalent to Judgment day in the battle of good and evil, when balance is restored and a new creation begins.</p></div>', //37
                '<div class="recieved-msg"><p>In Norse mythology, Ragnarok is the final battle, equivalent to Judgment day in the battle of good and evil, when balance is restored and a new creation begins.</p></div>', //38
                '<div class="recieved-msg"><p>In Norse mythology, Ragnarok is the final battle, equivalent to Judgment day in the battle of good and evil, when balance is restored and a new creation begins.</p></div>', //39
                '<div class="recieved-msg"><p>Of course! Are you?</p></div>', //40
                '<div class="recieved-msg"><p>That us my pen name! Cute is it not? I hope you enjoy my writing.</p></div>', //41
                '<div class="recieved-msg"><p>That us my pen name! Cute is it not? I hope you enjoy my writing.</p></div>', //42
                '<div class="recieved-msg"><p>That us my pen name! Cute is it not? I hope you enjoy my writing.</p></div>' //43
               ];
    
    
    
});