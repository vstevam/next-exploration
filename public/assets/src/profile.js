
// Random profile photo
$(document).ready(function () {
    const profilePics = {
        0: {
            url: './assets/images/profile/profile3.png'
        },
        1: {
            url: './assets/images/profile/profile4.png'
        },
        2: {
            url: './assets/images/profile/profile5.png'
        },
        3: {
            url: './assets/images/profile/profile6.png'
        }
    }

    let profileDOM = document.getElementById('randomProfile');
    const number = Math.floor(Math.random() * 4);
    if (profileDOM) {
        profileDOM.src = profilePics[number].url;
    }
});