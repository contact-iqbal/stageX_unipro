export function initSlider(){
    const data = [
        { label: 'Future', img: '/src/img/building.jpg', header: 'Exploring the Path to Better Health', content: 'A trusted health destination, this post uncovers the principles and practices that make our clinic a center for better care.' },
        { label: 'Techology', img: '/src/img/lab.jpg', header: 'Creating safe medicine for all kind', content: 'A labeled lab that is trusted in each county, preserve 100% safety around all country, serving medicine fast, and high quality.' }
    ]

    const slider = document.getElementById("slider")

    if(!slider) return 

    const img = slider.querySelector(".slider-image")
    const label = slider.querySelector("#slider-wrapper .slider-label")
    const header = slider.querySelector("#slider-wrapper .slider-header")
    const content = slider.querySelector("#slider-wrapper .slider-content")
    const dots = document.querySelector(".slider-dot-container")
    
    if(!img && !label && !header && !content && !dots) return

    data.forEach((_)=> {
        const dot = document.createElement("div")
        dot.className = 'h-4 md:h-2 w-4 md:w-2 rounded-full border border-white slider-dot'
        dots.appendChild(dot)
    })
    const dot = document.querySelectorAll(".slider-dot")
    dot[0].classList.add("bg-white")

    const end = data.length - 1
    let tracker = 0


    function sliderUpdater(i){
        img.style.backgroundImage = `url(${data[i].img})`
        label.textContent = data[i].label
        header.textContent = data[i].header
        content.textContent = data[i].content
    }

    function dotUpdater(i){
        dot.forEach((d, index) => {
            if(i == index){
                d.classList.add("bg-white")
            }else{
                d.classList.remove("bg-white")
            }
        })
    }

    setInterval(()=>{
        tracker++
        
        if(tracker > end){
            tracker = 0
        }

        sliderUpdater(tracker)
        dotUpdater(tracker)
    }, 3000)
}