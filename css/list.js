  const addListItem = () => {
    const list = document.getElementById("myList");
    const newTerm = document.getElementById("newTerm").value;
    const newDefinition = document.getElementById("newDefinition").value;
    const dt = document.createElement("dt");
    const dd = document.createElement("dd");
    dt.appendChild(document.createTextNode(newTerm));
    dd.appendChild(document.createTextNode(newDefinition));
    list.appendChild(dt);
    list.appendChild(dd);
    document.getElementById("newTerm").value = '';
    document.getElementById("newDefinition").value = '';
  }

  const deleteListItem = () => {
    const list = document.getElementById("myList");
    const terms = list.getElementsByTagName("dt");
    const definitions = list.getElementsByTagName("dd");
    if (terms.length > 0 && definitions.length > 0) {
      list.removeChild(terms[terms.length - 1]);
      list.removeChild(definitions[definitions.length - 1]);
    }
  }

  const addBtn = document.getElementById("addBtn");
  addBtn.addEventListener('click', addListItem);

  const deleteBtn = document.getElementById("deleteBtn");
  deleteBtn.addEventListener('click', deleteListItem);