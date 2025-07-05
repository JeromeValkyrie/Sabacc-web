const logBox = document.getElementById('log');
document.querySelectorAll('button').forEach(btn => {
  btn.onclick = () => {
    const div = document.createElement('div');
    div.textContent = btn.textContent + ' clicked';
    logBox.appendChild(div);
  };
});
