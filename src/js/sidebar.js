export function initSidebar(){
    console.log("Sidebar script running")
    const sidebar = document.getElementById("sidebar")
    const toggle = document.querySelector(".sidebar-toggle")
    const close = document.querySelector(".close-toggle")
    const overlay = document.querySelector(".overlay")
    let sidebarOpen = false

    toggle.addEventListener("click", (e)=>{
        console.log("toggle clicked")
        e.stopPropagation()
        sidebarOpen = true
        sidebar.classList.remove("translate-x-full")
        sidebar.classList.add("translate-x-0")
        sidebar.classList.add("z-5")
        overlay.classList.remove("opacity-0")
        overlay.classList.add("opacity-100")
        overlay.classList.add("z-4")
    })

    close.addEventListener("click", (e)=>{
        sidebarOpen = false
        e.stopPropagation()
        sidebar.classList.add("translate-x-full")
        sidebar.classList.remove("translate-x-0")
        overlay.classList.add("opacity-0")
        overlay.classList.remove("opacity-100")
        setTimeout(()=>{
            sidebar.classList.remove("z-5")
            overlay.classList.remove("z-4")
        }, 200)
    })

    document.addEventListener("click", (e)=>{
        if(!sidebarOpen){
            return
        }else{
            const containSidebar = sidebar.contains(e.target)
            if(!containSidebar){
                sidebarOpen = false
                sidebar.classList.add("translate-x-full")
                sidebar.classList.remove("translate-x-0")
                overlay.classList.add("opacity-0")
                overlay.classList.remove("opacity-100")
                setTimeout(()=>{
                    sidebar.classList.remove("z-5")
                    overlay.classList.remove("z-4")
                }, 200) 
            }
        }
    })
}