const menu = document.querySelector(".header .menu");
const toggleBtn = document.querySelector(".toggle-btn");
const closeBtn = document.querySelector(".close-btn");

toggleBtn.addEventListener("click", ()=> {
    menu.classList.add("show-menu")
})
closeBtn.addEventListener("click", ()=> {
    menu.classList.remove("show-menu")
})

/////
const links = document.querySelectorAll(".header .list a")
links.forEach(e=> {
    e.addEventListener("click", ()=> {
        menu.classList.remove("show-menu")
    })
})

// ============== types ==============

const showTypes = document.querySelectorAll(".show-type > div");
const types = document.querySelectorAll(".type")

types.forEach(e=> {
    e.addEventListener("click", ()=> {
        types.forEach(el=> {
            el.classList.remove("active")
        })
        e.classList.add("active")
        changeType(e.id)
    })
})

const changeType = (id)=> {
    showTypes.forEach(e=> {
        e.style.display = "none";
        if(e.dataset.type == id) {
            e.style.display = 'grid'
        }
    })
}

// ================ accordains ================
const accordains = document.querySelectorAll(".accordian");

accordains.forEach(e=> {
    e.addEventListener("click", ()=> {
        e.classList.toggle("active")
        const panel = e.querySelector(".panel");
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px"
        }
    })
})

