// Функция для создания элемента списка
document.addEventListener('keydown', (e) => {
    if (e.key == 'A')
    {
        let newLi = document.createElement("li");
        //Создание элемента списка
        newLi.innerText = 'Test string';
        document.getElementsByName('formatlist')[0].appendChild(newLi)
    }
})


// Функция для удаления случайного элемента списка
function del_list_element()
{
    var lis = document.getElementById('formatlist');
    // Выбор всех элементов списка
    var items = document.querySelectorAll("#formatlist > li");
    if (items.length)
    {
        // Выбор случайного элемента списка и его удаление
        var ind = Math.floor(Math.random() * items.length);
        lis.removeChild(items[ind]);
    }
}
