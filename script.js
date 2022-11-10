$(document).ready(function(){

let value0 = "";
let value1 = "";
let value2 = "";
let count = 0;

$("#save").on('click', function () {
    let datalist = [];
    let key=$("#key").val();
    let value0=$("#value0").val();
    let value1=$("#value1").val();
    let value2=$("#value2").val();
    let object = {
        key1:key,
        key2:value0,
        key3:value1,
        key4:value2,
    };
    count = localStorage.length;

    console.log(key, "datacheck")
    console.log(value0, "datacheck")
    console.log(value1, "datacheck")
    console.log(value2, "datacheck")
  
    //datalist.push([])
    localStorage.setItem(count, JSON.stringify(object));
    console. log(localStorage)

    let html = `
    <tr>
        <th>${key}</th>
        <td>${value0}</td>
        <td>${value1}</td>
        <td>${value2}</td>
    </tr>    
`;

$("#list").append(html);
    alert("saved");   
});


$("#clear").on("click",function(){
    localStorage.clear();
    $("#list").empty();
    alert("cleared");
});

});

for (let i = 0; i < localStorage.length; i++) {
    let getval = localStorage.getItem('count');
    data = JSON.parse(getval);
    // let key = data;
    console.log(data)
    // const value = localStorage.getItem(key);
    // console.log (localStorage)
    // date5 = key.key1
    // value0 = key.key2
    // value1 = key.key3
    // value2 = key.key4
    // console.log(date5)

    // let html = `
    // <tr>
    //     <th>${date5}</th>
    //     <td>${value0}</td>
    //     <td>${value1}</td>
    //     <td>${value2}</td>
    // </tr>
    // `;
    // $("#list1").append(html);
    // console.log("AAA")
}
