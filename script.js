document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("container")
  const heart = document.getElementById("heart")
  const text = document.getElementById("love-text")

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event
    const { left, top, width, height } = container.getBoundingClientRect()
    const x = (clientX - left) / width
    const y = (clientY - top) / height

    heart.style.setProperty("--mouse-x", `${x}`)
    heart.style.setProperty("--mouse-y", `${y}`)

    createHoverHeart(clientX, clientY)
  }

  const createHoverHeart = (x, y) => {
    const hoverHeart = document.createElement("div")
    hoverHeart.classList.add("hover-heart")
    hoverHeart.style.left = `${x}px`
    hoverHeart.style.top = `${y}px`
    container.appendChild(hoverHeart)

    setTimeout(() => {
      hoverHeart.remove()
    }, 1000)
  }

  const handleClick = () => {
  heart.classList.add("clicked");
  text.classList.add("text-animate");

  setTimeout(() => {
    heart.classList.remove("clicked");
    text.classList.remove("text-animate");
  }, 1000);
};
  

  container.addEventListener("mousemove", handleMouseMove)
  heart.addEventListener("click", handleClick)
})

