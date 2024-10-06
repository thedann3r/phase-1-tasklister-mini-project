document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let myForm = document.getElementById("create-task-form")
  myForm.addEventListener("submit", (eg) => {
    eg.preventDefault()
    let value = document.getElementById("new-task-description").value
    let task = document.getElementById("tasks")
    let taskItems = document.createElement("li")
    taskItems.textContent = value
    task.appendChild(taskItems)
    let buton = document.createElement("button")
    buton.textContent = "X"
    buton.style.marginLeft  = "20px"
    buton.style.backgroundColor = "black"
    buton.style.color = "white"
    buton.addEventListener("click", () =>{
      buton.parentNode.remove()
    })
    taskItems.appendChild(buton)
    myForm.reset()
  })
});
