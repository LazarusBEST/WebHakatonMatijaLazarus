function toggleTheme() {
    const body = document.body;
    const btn = document.getElementById('themeBtn');
    
    body.classList.toggle('dark');

    if (body.classList.contains('dark')) {
        btn.innerText = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        btn.innerText = '🌙';
        localStorage.setItem('theme', 'light');
    }
}