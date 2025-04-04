
document.getElementById('saveBtn').addEventListener('click', () => {
  const site = document.getElementById('site').value;
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (site && username && password) {
    const creds = JSON.parse(localStorage.getItem('credentials')) || [];
    creds.push({ site, username, password });
    localStorage.setItem('credentials', JSON.stringify(creds));
    document.getElementById('site').value = '';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    loadCredentials();
  }
});

function loadCredentials() {
  const list = document.getElementById('credentialsList');
  list.innerHTML = '';
  const creds = JSON.parse(localStorage.getItem('credentials')) || [];
  creds.forEach((cred, index) => {
    const li = document.createElement('li');
    li.innerHTML = `${cred.site} - ${cred.username} - ${cred.password} <button onclick="deleteCredential(${index})">Delete</button>`;
    list.appendChild(li);
  });
}

function deleteCredential(index) {
  const creds = JSON.parse(localStorage.getItem('credentials'));
  creds.splice(index, 1);
  localStorage.setItem('credentials', JSON.stringify(creds));
  loadCredentials();
}

loadCredentials();
