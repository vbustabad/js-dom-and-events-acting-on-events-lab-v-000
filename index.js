function preventRefreshOnSubmit() {
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  const input = document.querySelector("input").value;

  return input;
}

function addNewElementAsLi() {
  const input = document.querySelector("input").value;
  const newitem = document.createElement("li");
  const textnode = document.createTextNode(input);
  newItem.appendChild(textnode);

  const list = document.getElementsByClassName("employee-list");
  return list.insertBefore(newitem, list.childNodes[0]);
}

function addNewLiOnClick() {
}

function clearEmployeeListOnLinkClick() {
}
