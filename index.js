function save() {
    let username = document.getElementById('username').value;
    let task = document.getElementById('task').value;
    let description = document.getElementById('description').value;
    let li = document.createElement('li');
    li.className = 'task'
    document.getElementsByClassName('task-list-ul')[0].appendChild(li)
    document.getElementsByClassName('task')[0].innerHTML = `<p>${username}<p> \n<p>${task}<p> \n${description}`
    console.log(username, task, description);
}