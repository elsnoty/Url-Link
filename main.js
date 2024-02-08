let icon = document.querySelector(".burger");
let nav = document.querySelector(".nav");
let nav_bar = document.querySelector(".nav-bar");
let ul_elem = document.querySelector(".ul-elem");
let logo = document.querySelector(".logo");
let header = document.querySelector(".headerOne");
console.log(header);

icon.addEventListener("click", function() {
    // Check if the div with id navcDiv exists
    let navDiv = document.getElementById("navDiv");
    let btn_nav =document.createElement("button");
    btn_nav.textContent = "Get Start"
    btn_nav.id = "btn_phone"
    if (!navDiv) {
        // If the div does not exist create it
        navDiv = document.createElement("div");
        //create nav-element
    let ul = document.createElement("ul");
    ul.classList = "nav-phone"
    console.log(ul);
    navDiv.appendChild(ul);
    for(i=0; i<6; i++){
        let liElement = document.createElement("li");
            liElement.id = "content-" + i;
            let a =document.createElement("a");
            switch (liElement.id) {
                case "content-0":
                a.textContent = "Features";
                liElement.appendChild(a)
                    break;
                case "content-1":
                    a.textContent = "Pricing";
                    liElement.appendChild(a)
                    break;
                case "content-2":
                    a.textContent = "Resources";
                    liElement.appendChild(a)
                    break;
                case "content-3":
                    let hr = document.createElement("hr")
                    liElement.appendChild(hr)
                    break;
                case "content-4":
                    a.textContent = "Register";
                    liElement.appendChild(a)
                    break;
                case "content-5":
                    liElement.appendChild(btn_nav)
                    break;
            }
            liElement.addEventListener ("click",function(){
                navDiv.remove()
            })
            
            ul.appendChild(liElement);
    }
        navDiv.id = "navDiv";
        header.insertAdjacentElement("beforeend", navDiv);
        
    } else {
        // If the div exists remove it
        navDiv.parentNode.removeChild(navDiv);
    }
});
// nav.style.cssText = `display: flex;`
    //     nav.style.cssText = `display: flex;
    //     background-color: red;
    //     position: absolute;
    //     right: 8%;
    //     top: 91px;
    //     z-index: 1;
    //     width: 85%;
    //     height: 22rem;
    //     border-radius: 10px;`
    //     navDiv.appendChild(nav)
        // let grounDiv = document.createElement("div");
        //grounDiv.classList = "grounDiv";
        // navDiv.appendChild(grounDiv);
        //grounDiv.appendChild(ul_elem)



