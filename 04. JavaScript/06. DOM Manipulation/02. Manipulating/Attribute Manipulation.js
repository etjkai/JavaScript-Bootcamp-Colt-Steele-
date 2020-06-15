// Attributes - src / href
// getAttribute
// setAttribute

<a href='www.google.com'>I am a link!</a>
<img src='logo.png'></img>

var link = document.querySelector("a")
link.getAttribute("href") // www.google.com
link.setAttribute("href", "www.dogs.com")


var img = document.querySelector("img")
link.setAttribute("img",'corgi.png')


