window.addEventListener('DOMContentLoaded', (event) => {
    console.log("loaded")
   const btn = document.getElementById('crazy');
    btn.addEventListener("click", function(){
    const column = Number(document.getElementById("column").value);
    const row = Number(document.getElementById("row").value);

    console.log(column, row)
        var myTableDiv = document.getElementById("myDynamicTable");
      
        var table = document.createElement('TABLE');
        table.border = '1';
      
        var tableBody = document.createElement('TBODY');
        table.appendChild(tableBody);
      
        for (var i = 0; i < column; i++) {
          var tr = document.createElement('TR');
          tableBody.appendChild(tr);
      
          for (var j = 0; j < row; j++) {
            var td = document.createElement('TD');
            td.width = '75';
            td.height = '75';
            td.appendChild(document.createTextNode(" "));
            tr.appendChild(td);
          }
        }
        myTableDiv.appendChild(table);
      }
    );
});
