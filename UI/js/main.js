
	var	$window = $(window),
		$banner = $('#banner'),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			default:   ['1681px',   null       ],
			xlarge:    ['1281px',   '1680px'   ],
			large:     ['981px',    '1280px'   ],
			medium:    ['737px',    '980px'    ],
			small:     ['481px',    '736px'    ],
			xsmall:    ['361px',    '480px'    ],
			xxsmall:   [null,       '360px'    ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				target: $body,
				visibleClass: 'is-menu-visible',
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right'
			});


	
            (function(){
            ('#item').click(function(){
                ('#item.active').removeClass('active');
                (this).addClass('active');
            });
        });

        
        
                // Get the modal
                var modal = document.getElementById('myModal');
                
                
                // Get the button that opens the modal
                var btn = document.getElementById("show");
                
                
                // Get the <span> element that closes the modal
                var span = document.getElementsByClassName("close");
                
                // When the user clicks the button, open the modal 
                
                btn.onclick = function() {
                  modal.style.display = "block";
                }
                
                
                // When the user clicks on <span> (x), close the modal
                function close() {
                    modal.style.display = "none";

                }
                span.onclick = close
                  
                
                

                
                // When the user clicks anywhere outside of the modal, close it
                window.onclick = function(event) {
                  if (event.target == modal) {
                    modal.style.display = "none";
                  }
                }
                

                // Get group input on when group text is clicked

                    var groups = document.getElementById('groups')
                    var to = document.getElementById('to')
                    var grp_button = document.getElementById("grp");
                
                    grp_button.onclick = function() {
                        groups.style.display = "block";
                        to.style.display = "none";
                }

                // when the message button is clicked it should hide all new messages

                var inbox = document.getElementById('table_inbox');
                var msg = document.getElementById('msg');
                var draft = document.getElementById('draft');
                var draft_table = document.getElementById('table_draft');
                var sent = document.getElementById('table_sent');

                // once you click on the button with hideMessage class you will get the all inbox nessage 
                var inbox_button = document.getElementsByClassName('item')

                inbox_button.onclick = function() {

                    inbox.style.display = "block";
                    msg.style.display = "none";
                    draft.style.display = "none";
                    draft_table.style.display = "none";
                    sent.style.display = "none";
                    
                }

                // Getting the soecific message once you click on that message
                var msg_btn = document.getElementById('show_msg');


                msg_btn.onclick = function() {
                    inbox.style.display = "none";
                    msg.style.display = "block";

                }

            // Once the show_sent_msg is clicked, a spefici sent message will display

            var sent_btn = document.getElementById('show_sent_msg');

            sent_btn.onclick = function() {
                sent.style.display = "none";
                msg.style.display = "block";

            }

            // Get all sent messages once the sent button is clicked

            var all_sent = document.getElementsByClassName('sent')

            all_sent.onclick = function() {
                inbox.style.display = "none";
                sent.style.display = "block";
                msg.style.display = "none";
                draft.style.display = "none";
                draft_table.style.display = "none";
                

            }

            // Get a specific drafted message once you click on that showdraft button

            var draft_btn = document.getElementById('show_draft_msg');

            draft_btn.onclick = function() {
                draft_table.style.display = "none";
                draft.style.display = "block";
                
            }

            // Get all drafted messages by clicking on the draft button

            var all_draft = document.getElementsByClassName('draft')

            all_draft.onclick = function() {
                inbox.style.display = "none";
                sent.style.display = "none";
                msg.style.display = "none";
                draft.style.display = "none";
                draft_table.style.display = "block";
                

            }

            

