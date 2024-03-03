import {sidebar_videos} from '../data/sidebar-videos.js'
import { comments } from '../data/comments.js'

let sidebarVideosHTML = '';
let commentSectionHTML = '';

sidebar_videos.forEach((video) => {
    sidebarVideosHTML += `
        <div class="sidebar-video">
            <div class="thumbnail-row">
                <a href=${video.link}>
                    <img class="thumbnail" src=${video.thumbnail}>
                    <p class="video-time">${video.time}</p>
                </a>
            </div>
            <div class="video-info">
                <a href=${video.link}>
                    <p class="video-title">${video.title}</p>
                    <p class="video-author">${video.author}</p>
                    <p class="video-stats">${video.stats}</p>
                </a>
            </div>
            <button class="video-elipsis">&#8942
                <div class="video-elipsis-info">
                    <div class="video-elipsis-container">
                        <img class="video-elipsis-info-icon" src="icons/elipsis-menu/queue.png">
                        <p class="video-elipsis-info-text">Add to Queue</p>
                    </div>
                    <div class="video-elipsis-container">
                        <img class="video-elipsis-info-icon" src="icons/elipsis-menu/save.png">
                        <p class="video-elipsis-info-text">Save to Watch Later</p>
                    </div>
                    <div class="video-elipsis-container">
                        <img class="video-elipsis-info-icon" src="icons/elipsis-menu/save-playlist.png">
                        <p class="video-elipsis-info-text">Save to playlist</p>
                    </div>
                    <div class="video-elipsis-container">
                        <img class="video-elipsis-info-icon" src="icons/elipsis-menu/download.png">
                        <p class="video-elipsis-info-text">Download</p>
                    </div>
                    <div class="video-elipsis-container">
                        <img class="video-elipsis-info-icon" src="icons/elipsis-menu/share.png">
                        <p class="video-elipsis-info-text">Share</p>
                    </div>  
                    <hr class="video-separator">
                    <div class="video-elipsis-container">
                        <img class="video-elipsis-info-icon" src="icons/elipsis-menu/not.png">
                        <p class="video-elipsis-info-text">Not interested</p>
                    </div>
                    <div class="video-elipsis-container">
                        <img class="video-elipsis-info-icon" src="icons/elipsis-menu/dont.png">
                        <p class="video-elipsis-info-text">Don't recommend channel</p>
                    </div>
                    <div class="video-elipsis-container">
                        <img class="video-elipsis-info-icon" src="icons/elipsis-menu/report.png">
                        <p class="video-elipsis-info-text">Report</p>
                    </div>
                </div>
            </button>
        </div>
    `
});

document.querySelector('.js-videos').innerHTML = sidebarVideosHTML;

comments.forEach((comment) => {
    commentSectionHTML += `
        <div class="comment-section-comment">
            <img class="comment-section-profile" src=${comment.image}>
            <div class="comment-section-content">
                <div class="comment-section-title">
                    <p class="comment-section-author">@${comment.author}</p>
                    <p class="comment-section-time">${comment.time}</p>
                </div>
                <p class="comment-section-text">${comment.title}</p>
                <div class="comment-section-buttons">
                    <img src="icons/main-video/like.png">
                    <p class="comment-section-likes">${comment.likes}</p>
                    <img class="comment-section-dislike" src="icons/main-video/dislike.png">
                    <p class="comment-section-reply">Reply</p>
                </div>
                <button class="comment-section-reply-button">
                    <img src="icons/main-video/down.png">
                    <p class="comment-section-view-replies">${comment.replies}</p>
                </button>
            </div>
            <button class="video-elipsis">&#8942
                <div class="video-elipsis-info">
                    <div class="video-elipsis-container">
                        <img class="video-elipsis-info-icon" src="icons/elipsis-menu/report.png">
                        <p class="video-elipsis-info-text">Report</p>
                    </div>
                </div>
            </button>
        </div>
    `
})

document.querySelector('.js-comment-section-comments').innerHTML = commentSectionHTML;

