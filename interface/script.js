//Dropdown menu
const dropdown = document.querySelector('.dropdown');

dropdown.addEventListener('click', () => {
    dropdown.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {
    const logoutButton = document.getElementById('sign-out-btn'); // Corrected button ID
    if (logoutButton) {
        logoutButton.addEventListener('click', signOut);
    }
});

function signIn() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        document.querySelector('.notification-title').textContent = 'Đăng Nhập Thành Công!';
        document.querySelector('.notification-icon').className = 'fas fa-check-circle notification-icon';
        showModal('Chào mừng bạn đã quay trở lại!');
        
        setTimeout(() => {
            closeModal();
            showLoading();
            
            setTimeout(() => {
                window.location.href = '/interface/news.html';
            }, 1500);
        }, 1500);
    }
}

function signUp() {
    // Removed showModal call
}

function signOut() {
    showLoading();
    
    const delay = Math.random() * 500 + 2000; // Random delay between 2000ms and 2500ms
    setTimeout(() => {
        window.location.href = '/interface/before.html';
    }, delay);
}

function showLoading() {
    document.getElementById('loading').style.display = 'block';
}

function hideLoading() {
    document.getElementById('loading').style.display = 'none';
}

