let save = document.querySelector('.save')

let name = document.querySelector('.name')
let pawd = document.querySelector('.pawd')
let content = document.querySelector('.content')


let obj = []


inputHandler = () => {
  if (name === null || pawd === null) {
    return;
  } else {
    obj.push({
      'name': name.value,
      'pawd': pawd.value,
    })
    this.show()
    console.log(obj)
  }
}

show = () => {
  tempContent = '';
  obj.forEach((param, index) => {
    tempContent +=
      `
        <tr class="contentBody">
        <td>${index + 1}</td>
        <td>${param['name']}</td>
        <td>${param['pawd']}</td>
        <td>
        <button onclick="deleteHandler(${index})">Delete</button>
        <button onclick="editHandler(${index})">Edit</button>
        </td>
        </tr>
      `
  })
  content.innerHTML = tempContent
}

save.addEventListener('click', inputHandler)

deleteHandler = (index) => {
  console.log(index)
  obj.splice(index, 1)
  console.log(obj.splice(index,1))
  this.show()
}

updateHandler = (index) => {
  let inputName = document.querySelector('.inputName')
  let inputPawd = document.querySelector('.inputPawd')
  obj[index]['name'] = inputName.value
  obj[index]['pawd'] = inputPawd.value
  console.log(obj[index])
  this.show()
}

editHandler = (index) => {
  let contentBody = document.querySelectorAll('.contentBody')
  contentBody[index].innerHTML =
    `
    <td>${index + 1}</td>
    <td><input type="text" class="inputName" value="${obj[index]['name']}"></td>
    <td><input type="text" class="inputPawd" value="${obj[index]['pawd']}"></td>
    <td>
        <button onclick="deleteHandler(${index})">Delete</button>
        <button onclick="updateHandler(${index})">Save</button>
        <button onclick="show()">Cancel</button>
    </td>
  `
}
