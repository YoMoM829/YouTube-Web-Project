button = document.querySelector('.js-description-more');
descriptionHTML = document.querySelector('.js-main-video-description').innerHTML
let initial = true;

document.querySelectorAll('.js-description-more').forEach((button) => 
    button.addEventListener('click', () => {
        if (initial === true) {
            descriptionHTML = `
                <p class="description-stats">4.2M views 2 years ago</p>
                <p class="description-info">Talking tech and AI on the heels of Google I/O. Also a daily driver phone reveal from Google's CEO. Shoutout to Sundar!</p>
                <p class="description-expansion">MKBHD Merch: <a class="description-link" href="https://mkbhd.com/">http://shop.MKBHD.com</a></p>
                <p class="description-expansion">MKBHD Merch: <a class="description-link" href="https://mkbhd.com/">http://shop.MKBHD.com</a></p>
                <button class="description-more js-description-more">Show more</button>`;
                initial = false;
        }
        else {
            descriptionHTML = `
                <p class="description-stats">4.2M views 2 years ago</p>
                <p class="description-info">Talking tech and AI on the heels of Google I/O. Also a daily driver phone reveal from Google's CEO. Shoutout to Sundar!</p>
                <p class="description-expansion">MKBHD Merch: <a class="description-link" href="https://mkbhd.com/">http://shop.MKBHD.com</a></p>
                <button class="description-more js-description-more">Show more</button>`;
            initial = true;
        }
        
}))