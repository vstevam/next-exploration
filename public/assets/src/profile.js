
// Random profile photo
$(document).ready(function () {
    const profilePics = {
        0: {
            url: './assets/images/profile/profile3_.png'
        },
        1: {
            url: './assets/images/profile/profile4.png'
        },
        2: {
            url: './assets/images/profile/profile5_.png'
        },
        3: {
            url: './assets/images/profile/profile6_.png'
        }
    }

    let profileDOM = document.getElementById('randomProfile');
    const number = Math.floor(Math.random() * 4);
    if (profileDOM) {
        profileDOM.src = profilePics[number].url;
    }
});