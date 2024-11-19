alert('Boas vindas ao jogo do n.° secreto');
let secretNumber = 5;
console.log(secretNumber);
let kick;
let attempts = 1;

while (kick != secretNumber) {
  kick = prompt('Escolha um n.° entre 1 e 10');

  if (kick == secretNumber) {
    break;
  } else {
    if (secretNumber > kick) {
      alert(`O número secreto é maior que ${kick}`);
    } else if (secretNumber < kick) {
      alert(`O número secreto é menor que ${kick}`);
    }
    attempts++;
  }
}
let attemptWord = attempts > 1 ? 'tentativas' : 'tentativa';
alert(
  `Isso aí, você acertou! O número secreto era ${secretNumber}. Você acertou com ${attempts} ${attemptWord}.`
);
