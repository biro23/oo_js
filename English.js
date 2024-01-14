// Criando um objeto literal com atributos do professor de ingles

const englishTeacher0 = {
  ingles: "basico",
  ensinarIngles: function () {
    console.log("Teach English");
  },
};

const englishTeacher2 = {
  ingles: "intermediario",
  ensinarIngles: function () {
    console.log("Teach English");
  },
};

// // Criando uma função construtora para a classe Ensinar
function Ensinar(basico, intermediario, avancado) {
  this.basico = basico;
  this.intermediario = intermediario;
  this.avancado = avancado;
  this.ensinar = function () {
    console.log("Ensinar");
  };
}

// Criando instâncias da classe Ensinar

const englishTeacher1 = new Ensinar("basico", "intermediario", "avancado");
const englishTeacher3 = new Ensinar("intermediario", "avancado", "fluente");


//Exibindo as instâncias
console.log(englishTeacher1);
console.log(englishTeacher2);
