function consultaCep(){
    var cep = document.getElementById("cep").value;
    var resp = "https://viacep.com.br/ws/" + cep + "/json/";
    $.ajax({
        url: resp,
        type: "GET",
        success: function(response){
            $("#logradouro").html(response.logradouro);
            $("#complemento").html(response.complemento);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            $("#titulo_cep").html("CEP: " + response.cep);
            $(".cep").show();
        }
    })
}

$(function(){
    $(".cep").hide();
});