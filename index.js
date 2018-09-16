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
  document.querySelector('form').addEventListener('click', addNewElementAsLi());
  document.querySelector('input').value = '';
}

function clearEmployeeListOnLinkClick() {

  function clearList() {
    let list = document.querySelector('ul')
    list.innerHTML = '';
    // let list = document.querySelector(".employee-list");
    // list = '';
    // list = removeAllChildrenFromNode(list);
    // while (list.firstChild) {
    //   list.removeChild(parent.firstChild);
    // }
    // const list = document.querySelector(".employee-list");
    // list = [];
    // return list;
  }

  document.querySelector('a').addEventListener('click', clearList());
}
