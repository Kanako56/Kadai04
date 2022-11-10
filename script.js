$(document).ready(function(){


$("#save").on('click', function () {
    let datalist = [];
    let key = $("#key").val();
    
    const data = {
        data0:$("#value").val(),
        data1:$("#value1").val(),
        data2:$("#value2").val(),
    };

    datalist.push(data)

    localStorage.setItem(key,JSON.stringify(datalist));

    alert("saved");
    
});


$("#clear").on("click",function(){
    localStorage.clear();
    $("#list").empty();

});



const html = `
    <tr>
        <th>${key}</th>
        <td>${value}</td>
        <td>${value1}</td>
        <td>${value2}</td>
    </tr>    
`;
$("#list").append(html);




});