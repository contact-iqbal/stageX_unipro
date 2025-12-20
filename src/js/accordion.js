export function initAccordion() {
  const accordions = document.querySelectorAll(".accordion-container")
  const buttons = document.querySelectorAll(".accordion-toggle")

  if(!accordions && !buttons) return

  accordions.forEach(acc => {
    const header = acc.querySelector(".accordion-header")
    const style = getComputedStyle(acc)
    const border =
      parseFloat(style.borderTopWidth) +
      parseFloat(style.borderBottomWidth)

    acc.style.height = header.clientHeight + border + "px"
  })

  buttons.forEach(btn => {
    btn.addEventListener("click", e => {
      const container = e.currentTarget.closest(".accordion-container")
      const header = container.querySelector(".accordion-header")
      const content = container.querySelector(".accordion-content")
      const icon = e.currentTarget.querySelector("svg")

      const style = getComputedStyle(container)
      const border =
        parseFloat(style.borderTopWidth) +
        parseFloat(style.borderBottomWidth)

      const isOpen = container.classList.contains("open")

      accordions.forEach(acc => {
        if (acc !== container) {
          const h = acc.querySelector(".accordion-header")
          const i = acc.querySelector(".accordion-toggle svg")
          const s = getComputedStyle(acc)
          const b =
            parseFloat(s.borderTopWidth) +
            parseFloat(s.borderBottomWidth)

          acc.style.height = h.clientHeight + b + "px"
          acc.classList.remove("open")
          i?.classList.remove("rotate-z-135")
          i?.classList.add("rotate-z-0")
        }
      })

      if (!isOpen) {
        container.classList.add("open")
        container.style.height =
          header.clientHeight + content.scrollHeight + border + "px"
        icon.classList.add("rotate-z-135")
        icon.classList.remove("rotate-z-0")
      } else {
        container.classList.remove("open")
        container.style.height = header.clientHeight + border + "px"
        icon.classList.add("rotate-z-0")
        icon.classList.remove("rotate-z-135")
      }
    })
  })
}
