function showModal(title, content){
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-content').textContent = content;
    document.getElementById('threat-modal').classList.remove('hidden');
    document.getElementById('threat-modal').classList.add('flex');
}

document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('threat-modal').classList.remove('flex');
    document.getElementById('threat-modal').classList.add('hidden');
})