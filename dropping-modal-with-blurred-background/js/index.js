{
  const container = document.querySelector('#container');
  const modal = document.querySelector('.modal');
  const close = document.querySelector('.close');
  const button = document.querySelector('#button');

  const display = function() {
    modal.style.display = 'block';
    container.classList.add('blur');
    button.onclick = null;
    setTimeout(function() {
      container.onclick = dismiss;
    });
  };

  const dismiss = function() {
    modal.style.display = 'none';
    container.classList.remove('blur');
    container.onclick = null;
    button.onclick = display;
  };

  button.onclick = display;
  close.onclick = dismiss;
}