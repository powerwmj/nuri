
$('.wrap').prepend('<header></header>')
.append('<footer></footer>');

$('header').load('inc.html header .header_w',menu);
$('footer').load('inc.html footer .footer_w',family);

function menu(){
    $('header .hd button').on('click',function(){
        $('header .hd button').toggleClass('close');
        $('.s_mn').toggleClass('active');
    })
}

function family(){
    $('.family a').on('click', function(){
        $('.all_fam').toggle();
    })
}