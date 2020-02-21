//clicks the Android
document.getElementById('Android').addEventListener('click', Androidfct)

//click the Apple
document.getElementById('Apple').addEventListener('click', Applefct)

// Android functions
function Androidfct() {
    console.log('set android');
    // changes img
    document.getElementById('img').src = ('images/Android-Logo.jpg');
    //change the href link
    document.getElementById('link').href = ('https://www.android.com/');
    //change the text
    document.getElementById('link').innerHTML = 'Android Home';
    // change the button background color
    document.getElementById('link').style.backgroundColor = '#a4c93b';
    //change body background color
    document.body.style.backgroundColor = '#a4c93b';
}

// apple function
function Applefct() {
    //change img
    document.getElementById('img').src = ('images/Apple-Logo.jpg');
    //change the href link
    document.getElementById('link').href = ('https://www.apple.com/')
    //change the text
    document.getElementById('link').innerHTML = 'Apple Home';
    // change the button background color
    document.getElementById('link').style.backgroundColor = '#b6bcca';
    //change body background color
    document.body.style.backgroundColor = '#b6bcca';
}