$(function(){
    
    // Disini mulai slider image

    var $slider = $('.slider')
    var $slideImages = $slider.find('.slideImages')
    var $images = $slideImages.find('.image')
    var currSlide = 1

    // Operasi slide
    setInterval(function(){
    var img = document.getElementById('imageId'); 
    var height = img.clientHeight;
        $slideImages.animate({'margin-top': ('-='+height)}, 1500, function(){
            currSlide++
            if(currSlide === $images.length){
                currSlide = 1
                $slideImages.css('margin-top', 0)
            }
        })
    }, 3000)
})