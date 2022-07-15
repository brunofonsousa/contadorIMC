
//MÁSCARA
$('#alt').mask('#####0.00', { reverse: true });
$('#alt').on('keyup', function () {
    if ($(this).val().length > 3) {
        mascara = '####00,00';
    } else {
        mascara = '####0,0';
    }
    $('#alt').mask(mascara, { reverse: true });
});


$(document).ready(function () {
    $("button").click(function () {
        // MANIPULANDO SELETORES
        $("#imc").animate({ left: '500px' });
        $("#imc").css("background-color", "#BCAAA9");
        $("#imc").css("border", "none");
        $("#campos").css("border", "none");
        $("#vezes").css("color", "#FFFFFF");
        $("button").css("border", "1px solid white");
        $("input").css("background-color", "#BCAAA9");
        $("input").css("opacity", "0.2");
        $("label").css("color", "#FFFFFF");
        $("span").css("color", "#FFFFFF");

        // CALCULANDO IMC
        var peso = $('#pes').val();
        var altura = $('#alt').val();
        var imc = peso / (altura * altura);
        var imcvirgula = imc.toFixed(2).replace('.', ',')
        $('#resultado').text('IMC:  ' + imcvirgula);


        // SELECIONADO OPÇÕES
        if (imc < 18.5) {
            $('#diagnostico').text("ABAIXO DO PESO");
            $("#diagnostico").css("background-color", "#ADD8E6");
            $("#diagnostico").css("border", "1px solid #ADD8E6");
        } else if (imc >= 18.5 && imc < 24.9) {
            $('#diagnostico').text("PESO IDEAL");
            $("#diagnostico").css("background-color", "#ACD286");
            $("#diagnostico").css("border", "1px solid #ACD286");
        } else if (imc >= 25 && imc < 30) {
            $('#diagnostico').text("SOBREPESO");
            $("#diagnostico").css("background-color", "#FFCDD2");
            $("#diagnostico").css("border", "1px solid #FFCDD2");
        } else if (imc >= 30 && imc < 35) {
            $('#diagnostico').text("OBESIDADE GRAU 1");
            $("#diagnostico").css("background-color", "#FA7A7A");
            $("#diagnostico").css("border", "1px solid #FA7A7A");
        } else if (imc >= 35 && imc < 40) {
            $('#diagnostico').text("OBESIDADE GRAU 2");
            $("#diagnostico").css("background-color", "#E57373");
            $("#diagnostico").css("border", "1px solid #E57373");
        } else if (imc > 40) {
            $('#diagnostico').text("OBESIDADE GRAU 3");
            $("#diagnostico").css("background-color", "#050000");
            $("#diagnostico").css("border", "1px solid #050000");
        }
        else {
            $('#diagnostico').text("NÃO CALCULADO");
        }
    });

});


