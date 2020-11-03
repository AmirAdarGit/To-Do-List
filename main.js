
//this function add an item to the list while the user enter an to-do line to the list.
function addItemToOrderList(){
    var list = document.getElementById('item-list');
    var firstItem = document.getElementsByClassName('addItem')[0].value;
    var deleteItemBtn = document.createElement('button'); //boton to clear line.
    var entry = document.createElement('li');
    var doneItem = document.createElement("INPUT"); //checkbox

    entry.setAttribute("id", "task");
    entry.appendChild(document.createTextNode(firstItem));

    deleteItemBtn.setAttribute("id", "del-line-btn");
    deleteItemBtn.setAttribute('onclick','clearOneLine(1);');

    doneItem.setAttribute("type", "checkbox");//set the attributes to cheakitem by adding the input as an input type checkbox.
    doneItem.style.float = "right";
    deleteItemBtn.style.float = "right";


    deleteItemBtn.innerHTML = "delete line!";
    doneItem.innerText = "cheack!";

    entry.appendChild(deleteItemBtn);
    entry.appendChild(doneItem);
    list.appendChild(entry);
    entry.style.display = "block";
}



//this function delete all the items in the list.
function clearAllTheList(){
    document.getElementById("item-list").innerHTML = "";
}

function clearOneLine(num){
    list = document.getElementById("item-list");
    list.removeChild(list.childNodes[1]);
    console.log(num);
}