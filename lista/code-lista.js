$(function()
{
    $(".add-item").submit(adicionar)
});

var Lista = [];

function adicionar(ev)
{
    ev.preventDefault();
    Lista.push($("#item").val());
    $("#item").val('');
    update();
}

function update()
{
    lines = '';

    Lista.forEach((item, id) =>
    {
        row = '<tr>';
        row += '<td>' + (id + 1) + '</td>';
        row += '<td>' + item + '</td>';
        row += '<td> <button type = " button " class = " btn btn-outline-danger " data-id' + id + '> Remover </button> </td>';
        row += '</tr>';

        lines += row;
    });
    
    $(".table tbody").html(lines);
    $(".table .btn").click(deleteItem);
}

function deleteItem(ev)
{
    var id = $(ev.target).data('id');
    Lista.splice(id,1);
    update();
}

