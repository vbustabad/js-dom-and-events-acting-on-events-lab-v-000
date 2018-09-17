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
  const input = retrieveEmployeeInformation();
  document.querySelector(".employee-list").innerHTML = input;
}

function addNewLiOnClick() {
  document.querySelector("form").addEventListener('click', addNewElementAsLi());
  document.querySelector("input").value = '';
}

function clearEmployeeListOnLinkClick() {

  function clearList() {
    let list = document.querySelector("ul");
    list.innerHTML = '';
  }

  document.querySelector("a").addEventListener('click', clearList());
}
