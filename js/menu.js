document.addEventListener('DOMContentLoaded', () => {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const menuCategories = document.querySelectorAll('.menu-category');

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            menuCategories.forEach(category => category.classList.add('hidden'));
            
            button.classList.add('active');
            document.getElementById(button.dataset.category).classList.remove('hidden');
        });
    });
});
