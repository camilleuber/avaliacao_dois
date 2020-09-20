$(function() { 
    
    $.ajax({
        url: 'http://localhost:5000/listar_cachorros',
        method: 'GET',
        dataType: 'json',
        success: listar, 
        error: function() {
            alert("erro ao ler dados, verifique o backend");
        }
    });

    function listar (cachorros) {
        
        for (var i in cachorros) {
            lin = '<tr>' + 
              '<td>' + cachorros[i].id + '</td>' + 
              '<td>' + cachorros[i].nome + '</td>' + 
              '<td>' + cachorros[i].genero + '</td>' + 
              '<td>' + cachorros[i].idade + '</td>' + 
              '<td>' + cachorros[i].raca + '</td>' + 
              '<td>' + cachorros[i].porte + '</td>' + 
              '<td>' + cachorros[i].cor + '</td>' + 
              '</tr>';
           
            $('#corpoTabelaCachorros').append(lin);
        }
    }

});