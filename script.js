const switchColor = document.getElementById('switch-color');

switchColor.addEventListener('input', (e) => {

  const selectedColor = switchColor.value;

  const colorScheme = (selectedColor === 'dark') ? 'only dark' : 
                      (selectedColor === 'light') ? 'only light' : 
                      'dark light';

  document.querySelector(':root').style = `
    color-scheme: ${colorScheme};
  `;
  
});