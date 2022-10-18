﻿// injection
document.querySelector("#sidebar-inject").innerHTML = `
<svg class="closebtn" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

<a href="/public pages/RC beam.html">RC beam</a>
<a href="/steel wide flange.html">steel wide flange</a>
`


document.querySelector(".hamburger").addEventListener("click", () => {
	document.querySelector("#sidebar-inject").classList.add("open")
})

document.querySelector(".closebtn").addEventListener("click", () => {
	document.querySelector("#sidebar-inject").classList.remove("open")
})