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
  const new_line_item = document.createElement("li");
  const text_node = document.createTextNode(input);
  new_line_item.appendChild(text_node);

  const list = $(".employee-list");
  // document.getElementsByClassName("employee-list");
  list.insertBefore(new_line_item, list.firstChild);
}

function addNewLiOnClick() {
}

function clearEmployeeListOnLinkClick() {
}
