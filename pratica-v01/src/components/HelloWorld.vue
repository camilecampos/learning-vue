<template>
<div class="hello">
  <h1>Exemplo de Manipulação de Array e Objetos em JavaScript</h1>
    <form name="funcForm">
        <fieldset>
            <legend>Manutenção de Funcionários</legend>
            <p>Por favor, preencha os dados abaixo:</p>

            <label for="firstname">CPF:</label>
            <input type="text" name="cpf" v-model="cpf" placeholder="Informe o cpf" autofocus>

            <label for="firstname">Nome:</label>
            <input type="text" name="nome" v-model="nome" placeholder="Informe o nome" autofocus>


            <label for="lastname">Cargo:</label>
            <input type="text" name="cargo" v-model="cargo" placeholder="Informe o cargo">


            <label for="age">Salário:</label>
            <input type="number" name="salario" v-model="salario" required>

            <button type="button" v-on:click="adicionarFuncionario">Adicionar</button>
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
    <div id="tabela">
      <table>
        <tr>
          <th>CPF</th>
          <th>Nome</th>
          <th>Sobrenome</th>
          <th>Salario</th>
          <th></th>
        </tr>
        <tr v-for="funcionario in funcionarios" :key="funcionario.cpf">
          <td>{{ funcionario.cpf }}</td>
          <td>{{ funcionario.nome }}</td>
          <td>{{ funcionario.cargo }}</td>
          <td>{{ funcionario.salario }}</td>
          <td><button type="button" v-on:click="removeFuncionario(funcionario.cpf)">x</button></td>
        </tr>
      </table>
    </div>
    </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      cpf: "",
      nome: "",
      cargo: "",
      salario: "",
      funcionarios: [
        {
          cpf: "09659377777",
          nome: "camile",
          cargo: "prog",
          salario: 30000
        },
        {
          cpf: "25874125478",
          nome: "debora",
          cargo: "medica",
          salario: 500000
        },
        {
          cpf: "32145698762",
          nome: "cecilia",
          cargo: "pediatra",
          salario: 500000
        },
        {
          cpf: "65874133654",
          nome: "juliana",
          cargo: "eng",
          salario: 500002
        }
      ]
    };
  },
  methods: {
    adicionarFuncionario: function() {
      var func = {
        cpf: this.cpf,
        nome: this.nome,
        cargo: this.cargo,
        salario: this.salario
      };
      this.funcionarios.push(func);
      //apaga os inputs
      this.cpf = "";
      this.nome = "";
      this.cargo = "";
      this.salario = "";
    },
    removeFuncionario: function(cpf) {
      console.log("cpf " + cpf);
      console.log("funcionarios " + JSON.stringify(this.funcionarios));
      //this.funcionarios.$delete(this.funcionarios, cpf);
      //this.funcionarios.splice(cpf, 1);
      var index = this.funcionarios.indexOf(cpf);
      this.funcionarios.splice(index, 1);
      console.log("funcionarios " + JSON.stringify(this.funcionarios));
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
table {
  width: 100%;
}

table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
}

th {
  background-color: cornsilk;
}

th,
td {
  padding: 5px;
  text-align: left;
}
</style>
