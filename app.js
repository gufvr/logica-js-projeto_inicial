alert('Boas vindas ao jogo do n.° secreto');
let secretNumber = 4;
console.log(secretNumber);

let kick = prompt('Escolha um n.° entre 1 e 10');

if (kick == secretNumber) {
  alert(`Isso aí, você acertou! O número secreto era ${secretNumber}`);
} else {
  if (secretNumber > kick) {
    alert(`O número secreto é maior que ${kick}`);
  } else if (secretNumber < kick) {
    alert(`O número secreto é menor que ${kick}`);
  }
}
