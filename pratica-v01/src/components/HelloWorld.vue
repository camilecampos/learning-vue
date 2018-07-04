<template>
<div class="hello">
  <h1>Exemplo de Manipulação de Array e Objetos em JavaScript</h1>
    <form name="funcForm">
        <fieldset>
            <legend>Manutenção de Funcionários</legend>
            <p>Por favor, preencha os dados abaixo:</p>

            <label for="firstname">CPF:</label>
            <input type="text" name="cpf" placeholder="Informe o cpf" autofocus>

            <label for="firstname">Nome:</label>
            <input type="text" name="nome" placeholder="Informe o nome" autofocus>


            <label for="lastname">Cargo:</label>
            <input type="text" name="cargo" placeholder="Informe o cargo">


            <label for="age">Salário:</label>
            <input type="number" name="salario" required>

            <input type="button" value="Adicionar" onclick="adicionar()" />
        </fieldset>
    </form>

    <br>
    <h2>Lista de Funcionários</h2>
    <input type="button" value="Ordernar por Cpf" />
    <input type="button" value="Ordernar por Nome" />
    <input type="button" value="Ordernar por Salário (DESC)" /> <p>Salario maior que:</p>
    <input type="number" id="filtoSalario">
    <input type="button" value="Filtrar" />

    <br>
    <br>
    <div id="tabela"></div>
    </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
