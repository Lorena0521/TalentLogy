document.addEventListener("DOMContentLoaded", function () {
    const optionSelect = document.getElementById('optionSelect');
    
    optionSelect.addEventListener('change', function () {
        const selectedOption = optionSelect.value;
        const optionElement = document.getElementById(selectedOption);
        optionElement.textContent = parseInt(optionElement.textContent) + 1;
        const optionText = optionElement.textContent;
        optionSelect.querySelector(`option[value="${selectedOption}"]`).textContent = `${selectedOption}`;
    });
});