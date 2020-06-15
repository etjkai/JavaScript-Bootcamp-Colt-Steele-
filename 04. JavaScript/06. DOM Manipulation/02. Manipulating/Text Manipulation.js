<p>
    This is a <strong>awesome</strong> paragraph
</p>

var tag = document.querySelector("p")

// 2 ways of grabbing content of element
// (1) textContent
tag.textContent // Returns only text inside HTML element,as a string (excluding tags e.g. Strong tags)
tag.textContent = "New text content" // Will overwrite any HTML tags (strong/em) + does not treat string as HTML

// (2) innerHTML - Keeps HTML elements intact
tag.innerHTML // This is a <strong>awesome</strong> paragraph
tag.innerHTML = "<h1>New text content</h1>"  // Will be rendered as HTML