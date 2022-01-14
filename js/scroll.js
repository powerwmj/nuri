let num = 1;
let txt;
let txtSpan='';
let h2 = '';
let clear;
let pos = {y: 0, dy:0, state: true} // true : 스크롤 내릴때, false : 스크롤 올릴때
    window.onscroll = function(){
        pos.y = window.scrollY;
        pos.state = pos.y > pos.dy;
        pos.dy = pos.y;
            if(pos.state){
                if(window.innerHeight > window.scrollY) {
                    num -= 0.011
                    if(window.innerHeight == window.scrollY){
                        num = 0
                    }
                }

                $('h3').each(function(i){
                    if($(this).offset().top - (window.innerHeight*0.9) < window.scrollY){
                        $(this).css({'transform': 'translateX(0)', 'opacity': '1'});
                    }
                })

                $('h2.mov').each(function(i){
                    if($(this).offset().top - (window.innerHeight*0.9) < window.scrollY){
                        if(!$(this).hasClass('active')){
                            timer($(this));
                        }
                        $(this).addClass('active');
                    }
                })

                $('p, h4, li, a').each(function(i){
                    if($(this).offset().top - (window.innerHeight*0.9) < window.scrollY){
                        $(this).css({'transform': 'translateY(0)', 'opacity': '1'});
                    }
                })
                
            } else {
                //console.log('스크롤 올림');
                //elScrl1.classList.remove('active');
                if(window.innerHeight > window.scrollY) {
                    num += 0.011 
                    if(window.scrollY <= 0) {
                        num = 1
                    }
                }
                
            }
            $('.top').css('opacity',num);
        //elScrl1_div.innerHTML = `스크롤 현재값(${pos.y})/스크롤 상태(${pos.state})/스크롤 전체 길이(${document.documentElement.scrollHeight})`;
        
    }
    
    function timer(h2){
        //console.log('aaa')
            txt = h2.text();
            txtSpan = '';
            for(let i=0;i<txt.length;i++){
                txtSpan += `<span>${txt[i]}</span>`;
            };
            h2.html(txtSpan);
            
            for(let i = 0; i< txt.length; i++){
                setTimeout(function(){
                    h2.find('span').eq(i).css({'transform': 'translateX(0)', 'opacity': '1'});
                },100*i)
            }

        
    }
$(window).scrollTop(1)