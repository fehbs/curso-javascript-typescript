const elementos = [
    {tag: 'p', texto: 'Vamos estudar!'},
    {tag: 'div', texto: 'Todos os dias!'},
    {tag: 'section', texto: 'Mantenha o foco!'},
    {tag: 'footer', texto: 'Vamos até o alvo!'},
  ];
  
  const container = document.querySelector('.container');
  const div = document.createElement('div');
  
  for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    let textoCriado = document.createTextNode(texto);
  
    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);
  }
  
  container.appendChild(div);