window.addEventListener( 'DOMContentLoaded', function() {
    let videoSrc = this.document.querySelector( '.wl-video__source' );
    let videoThumbnailLink = this.document.querySelector( '.wl-video__thumbnail' );

    if ( videoThumbnailLink ) {
        videoThumbnailLink.addEventListener( 'click', function(e) {
            e.preventDefault();
            if ( videoSrc ) {
                videoThumbnailLink.classList.add( 'wl-hide' );

                videoSrc.classList.remove( 'wl-hide' );
                videoSrc.classList.add( 'wl-show' );
                videoSrc.play();
            }
        })
    }
} )
