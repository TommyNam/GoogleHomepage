// redirects input to actual google
function performSearch() {
  const query = document.getElementById('search-input').value.trim();
  if (query !== "") {
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  }
}

document.getElementById('search-btn').addEventListener('click', performSearch);
document.getElementById('search-input').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    performSearch();
  }
});



// Reusable function for both clicks, function for settings & apps not coded in
function showMessage(event) {
    event.preventDefault();
    alert("This function currently doesn't do anything");
}

document.getElementById('app-launcher').addEventListener('click', showMessage);
document.getElementById('settings-link').addEventListener('click', showMessage);