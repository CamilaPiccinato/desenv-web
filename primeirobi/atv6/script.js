const input = document.getElementById('input');
const lista = document.getElementById('lista');
const button = document.getElementById('button');

button.addEventListener('click', adicionarTarefa);

function adicionarTarefa() {
  if (input.value === '') {
    alert('Por favor, digite uma tarefa.');
    return;
  }

  const li = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', () => {
    li.classList.toggle('concluida', checkbox.checked);
  });

  const span = document.createElement('span');
  span.textContent = input.value;

  const btnRemover = document.createElement('button');
  btnRemover.textContent = '✕';
  btnRemover.classList.add('btn-remover');

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(btnRemover);
  lista.appendChild(li);

  input.value = '';
}

lista.addEventListener('click', function(event) {
  if (event.target.classList.contains('btn-remover')) {
    const li = event.target.closest('li');
    if (li) li.remove();
  }
});

input.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') adicionarTarefa();
});