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

  function employeeList() {
    return $('.employee-list')
    }

  return employeeList().append(input);
}

function addNewLiOnClick() {
}

function clearEmployeeListOnLinkClick() {
}
