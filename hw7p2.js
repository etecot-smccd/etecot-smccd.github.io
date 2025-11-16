/* a script that will save TWO pairs of cookies for the same page - one of the pairs for the name of the user and another one for the username of the user.
TIP: The example from the lecture can be used, just remember that here you will be working with 2 pairs when setting your cookie, instead of only 1 pair!
ANOTHER TIP: The history.go(0) does not necessarily start a new session in the technical sense but forces a FULL PAGE RELOAD FROM THE SERVER or the browser cache. It might be a good idea to use path and expiration date when registering the cookie!

Both cookies should be deleted when the user closes the browser (not simply closes the tab/window) this means closes the session.

So, how this page should work?

If it is the first time the user is opening the page on the browser, you will present a form for the user to type his/her name and his/her username.

If it is not the first time the user is opening the page (if he/she is revisiting the page) while the browser is still opened, you will just display a message of Welcome Back followed by the name of the user that you will retrieve from the cookie previously saved.

The main focus should be that your cookie is registered and that you can read from it - I will not bother if I have to manually delete the cookie myself because browsers have changed to increase security and some will not allow you to register cookies without expiration date and/or path.
*/
window.addEventListener("load", function() {
    let name = getCookie("name");
    if (name != "") {
        console.log(user);
        document.getElementById("result").innerHTML = "Welcome back " + name;
        document.getElementById("myform").style.display = "none";
    } else {
        document.getElementById("myform").style.display = "block";
    }
});

let btn = document.getElementById("btnCreateCookie");
btn.onclick = function() {
    setCookie("name");
    setCookie("user");
}

function setCookie(cName) {
    var cValue = document.getElementById(cName).value;
    document.cookie = cName + "=" + cValue + ";";
}

function getCookie(cName) {
    var name = cName + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
