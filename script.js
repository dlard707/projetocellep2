$(document).ready(function () {
  $("#loginAluno").submit(function (event) {
    if (
      $("#inputUsuario").val() == "root" &&
      $("#inputSenha").val() == "1234"
    ) {
      $("#mensagem").addClass(
        "alert alert-success alert-dismissible fade show"
      );
      $("#mensagem").removeClass("alert-warning");
      $("#mensagem").text("Usuário Logado!").show().fadeOut(3000);
    }
  });
});
