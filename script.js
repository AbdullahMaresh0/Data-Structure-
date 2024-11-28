// وظيفة التبديل بين الوضع النهاري والليلي
function toggleMode() {
    const body = document.body; // الحصول على عنصر <body>
    body.classList.toggle('dark-mode'); // تبديل الفئة dark-mode
    body.classList.toggle('light-mode'); // تبديل الفئة light-mode

    // تغيير الأيقونة داخل الزر
    const toggleBtn = document.querySelector('.toggle-btn span');
    if (body.classList.contains('dark-mode')) {
        toggleBtn.textContent = '🌙'; // أيقونة النهار
    } else {
        toggleBtn.textContent ='☀️'; // أيقونة الليل
    }
}
