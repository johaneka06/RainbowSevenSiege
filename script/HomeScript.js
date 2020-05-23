$(function(){
    
    // Disini mulai slider image

    var $slider = $('.slider')
    var $slideImages = $slider.find('.slideImages')
    var $images = $slideImages.find('.image')
    var currSlide = 1

    // Operasi slide
    setInterval(function(){
        $slideImages.animate({'margin-left': '-=1500px'}, 1000, function(){
            currSlide++
            if(currSlide === $images.length){
                currSlide = 1
                $slideImages.css('margin-left', 0)
            }
        })
    }, 3000)
})