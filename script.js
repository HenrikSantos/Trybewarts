const btnLogin = document.getElementById('login');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const btnSend = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');
const textarea = document.getElementById('textarea');
const count = document.getElementById('counter');
const valorMaximo = 500;
const btnSubmit = document.getElementById('submit-btn');
const formData = document.getElementById('form-data');

const formContainer = document.getElementById('evaluation-form');
const imageColored = document.getElementById('trybewarts-forms-logo');

btnLogin.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

agreement.addEventListener('click', () => {
  if (agreement.checked === true) {
    btnSend.disabled = false;
  } else if (agreement.checked === false) {
    btnSend.disabled = true;
  }
});

textarea.addEventListener('keyup', () => {
  const contador = valorMaximo - textarea.value.length;
  count.innerText = contador;
});

function renderFormData(object) {
  for (let i = 0; i < object.length; i += 1) {
    const { question, answer } = object[i];
    formData.innerHTML += `<p>${question} ${answer}</p>`;
  }
  const resultMaterias = document.querySelectorAll('input[name="input-checkbox"]:checked');
  const newElement = document.createElement('p');
  newElement.innerText = 'Matérias:';
  resultMaterias.forEach((Element) => {
    newElement.innerText += ` ${Element.value},`;
  });
  formData.appendChild(newElement);
}

function getData() {
  const resultCheckedFamilia = document.querySelector('input[name="family"]:checked');
  const resultNome = document.getElementById('input-name');
  const resultLastName = document.getElementById('input-lastname');
  const resultEmail = document.getElementById('input-email');
  const resultCasa = document.getElementById('house');
  const resultAvaliacao = document.querySelector('input[name="rate"]:checked');
  const resultObservacoes = document.getElementById('textarea');
  const object = [{ question: 'Nome: ', answer: ` ${resultNome.value} ${resultLastName.value}` },
    { question: 'Email: ', answer: `${resultEmail.value}` },
    { question: 'Casa: ', answer: `${resultCasa.value}` },
    { question: 'Família: ', answer: `${resultCheckedFamilia.value}` },
    { question: 'Avaliação: ', answer: `${resultAvaliacao.value}` },
    { question: 'Observações: ', answer: `${resultObservacoes.value}` }];
  renderFormData(object);
}
function handleBtnSubmit(event) {
  event.preventDefault();
  getData();
  imageColored.remove();
  formContainer.style.display = 'none';
  formData.style.display = 'block';
}

btnSubmit.addEventListener('click', handleBtnSubmit);
