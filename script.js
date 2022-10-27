"use strict"

const addTask = document.getElementById("add-task")
const list = document.getElementById("list")
const input = document.getElementById("inp-text")

addTask.addEventListener("click", () => {
  let task = document.createElement('div')
  task.classList.add("list-item");

  let li = document.createElement('li')
  li.textContent = `${input.value}`;
  task.appendChild(li)

  let checkTask = document.createElement("span")
  checkTask.textContent = '✓'
  checkTask.classList.add('check-icon')
  task.appendChild(checkTask)

  let deleteTask = document.createElement("span")
  deleteTask.textContent = 'X'
  deleteTask.classList.add('delete-icon')
  task.appendChild(deleteTask)

  if (input.value === "") {
    alert("Adicione algo na lista.")
  } else {
    list.appendChild(task)
  }

  input.value = "";

  checkTask.addEventListener("click", () => {
    checkTask.parentElement.classList.toggle("item-checked")
  })

  deleteTask.addEventListener("click", () => {
    deleteTask.parentElement.remove()
  })
})

/* CHANGE THEME */
const color = document.querySelectorAll(".color")
console.log(color)

const blueTheme = {
  '--body-color': 'radial-gradient(#112, #000)',
  '--list-color': '#00aaff20',
  '--btn-text-color': '#00aaff',
  '--border': '.1rem solid #00aaff50',
  '--input-color': '#00aaff20',
  '--input-text-color': '#00aaff',
  '--input-border': '.1rem solid #00aaff50',
  '--btn-color': '#00aaff40',
  '--btn-text-color': '#00aaff',
  '--pick-color-bg': '#222'
}