$(function () {
    $(".add-item").submit(addItem)
});

var items = [];

function addItem(ev) 
{
    ev.preventDefault();
    var item = $("#item").val();
    items.push(item);
    $("#item").val('');
    updateTable();
}

function updateTable() 
{
    lines = '';
    items.forEach((item, id) => 
    {
        row = '<tr>';
        row += '<td>' + (id + 1) + '</td>';
        row += '<td>' + item + '</td>';
        row += '<td>'
                +  '<button type="button"'
                    +  ' class="btn btn-outline-danger"'
                    +  ' data-id=' + id + '> '
                    + ' Remover '
                + '</button>'
                + '</td>';
        row += '</tr>';

        lines += row;
    });

    $('.table tbody').html(lines);
    $('.table .btn').click(deleteItem);
}

function deleteItem(ev)
 {
    var id = $(ev.target).data('id');
    items.splice(id,1);
    updateTable();
}