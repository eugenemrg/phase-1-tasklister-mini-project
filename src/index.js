document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  const input = document.getElementById('new-task-description');
  const taskList = document.getElementById('tasks')

  form.addEventListener("submit", (e) => {
    e.preventDefault()

    let taskInput = input.value

    let taskListItem = document.createElement('li')
    taskListItem.textContent = `${taskInput}  `

    let button = document.createElement('button')
    button.textContent = 'x'
    button.addEventListener('click', (e) => {
      e.target.parentNode.remove()
    })

    taskListItem.append(button)

    taskList.append(taskListItem)
  });

});
