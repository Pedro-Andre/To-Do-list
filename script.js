"use strict"

const addTask = document.getElementById("add-task");
const list = document.getElementById("list");
const input = document.getElementById("inp-text");

const addTaskFunc = function () {
  let task = document.createElement('div');
  task.classList.add("list-item")

  let li = document.createElement('li');
  li.textContent = `${input.value}`
  task.appendChild(li)

  let checkTask = document.createElement("span");
  checkTask.textContent = '✓'
  checkTask.classList.add('check-icon')
  task.appendChild(checkTask)

  let deleteTask = document.createElement("span");
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
}

addTask.addEventListener("click", addTaskFunc)
document.addEventListener("keydown", e => {
  const k = e.key
  if (k === "Enter") {
    addTaskFunc()
  }
})

const root = document.documentElement;
const blueTheme = {
  '--body-bg': '#222 radial-gradient(#00aaff40 .15rem, #111 .15rem)',
  '--list-color': '#00aaff50',
  '--border': '.1rem solid #00aaff50',
  '--input-color': '#00aaff20',
  '--input-text-color': '#00aaff',
  '--input-border': '.1rem solid #00aaff50',
  '--btn-color': '#00aaff40',
  '--btn-text-color': '#fff',
  '--pick-color-bg': '#222',
  '--placeholder': '#00aaff80',
  '--icon-border': '.1rem solid #00aaff'
}
const greenTheme = {
  '--body-bg': '#222 radial-gradient(#58ed8040 .15rem, #111 .15rem)',
  '--list-color': '#58ed8080',
  '--border': '.1rem solid #58ed8050',
  '--input-color': '#58ed8020',
  '--input-text-color': '#58ed80',
  '--input-border': '.1rem solid #58ed8050',
  '--btn-color': '#58ed8040',
  '--btn-text-color': '#fff',
  '--pick-color-bg': '#222',
  '--placeholder': '#58ed8080',
  '--icon-border': '.1rem solid #58ed80'
}
const orangeTheme = {
  '--body-bg': '#222 radial-gradient(#f5a34040 .15rem, #111 .15rem)',
  '--list-color': '#f5a34080',
  '--border': '.1rem solid #f5a34050',
  '--input-color': '#f5a34020',
  '--input-text-color': '#f5a340',
  '--input-border': '.1rem solid #f5a34050',
  '--btn-color': '#f5a34040',
  '--btn-text-color': '#fff',
  '--pick-color-bg': '#222',
  '--placeholder': '#f5a34080',
  '--icon-border': '.1rem solid #f5a340'
}
const pinkTheme = {
  '--body-bg': '#222 radial-gradient(#f780ff40 .15rem, #111 .15rem)',
  '--list-color': '#f780ff80',
  '--border': '.1rem solid #f780ff50',
  '--input-color': '#f780ff20',
  '--input-text-color': '#f780ff',
  '--input-border': '.1rem solid #f780ff50',
  '--btn-color': '#f780ff40',
  '--btn-text-color': '#fff',
  '--pick-color-bg': '#222',
  '--placeholder': '#f780ff80',
  '--icon-border': '.1rem solid #f780ff'
}
const purpleTheme = {
  '--body-bg': '#222 radial-gradient(#aa53f240 .15rem, #111 .15rem)',
  '--list-color': '#aa53f280',
  '--border': '.1rem solid #aa53f250',
  '--input-color': '#aa53f220',
  '--input-text-color': '#aa53f2',
  '--input-border': '.1rem solid #aa53f250',
  '--btn-color': '#aa53f240',
  '--btn-text-color': '#fff',
  '--pick-color-bg': '#222',
  '--placeholder': '#aa53f280',
  '--icon-border': '.1rem solid #aa53f2'
}


// troca a cor do tema
const colorPick = document.querySelectorAll(".color").forEach(item => {
  item.addEventListener("click", function (classColor) {
    const color = classColor.target
    if (color.classList.contains("blue")) {
      changeTheme(blueTheme)
    } else if (color.classList.contains("green")) {
      changeTheme(greenTheme)
    } else if (color.classList.contains("orange")) {
      changeTheme(orangeTheme)
    } else if (color.classList.contains("pink")) {
      changeTheme(pinkTheme)
    } else if (color.classList.contains("purple")) {
      changeTheme(purpleTheme)
    }
  })
})

//Troca de tema
function changeTheme(theme) {
  for (let prop in theme) {
    setTheme(prop, theme[prop])
  }
}

function setTheme(property, value) {
  root.style.setProperty(property, value)
}
