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
  document.querySelector("a").addEventListener('click', function(event) {
    $("ul").empty();
  });
}
