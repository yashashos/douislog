(function() {
    'use strict';

    // تحديد النمط المحدد للزر الذي سيتم حذفه
    var targetStyle = 'border-radius: 50%; background-color: green; color: white; position: fixed; top: 10px; right: 10px;';

    // البحث عن الأزرار التي تحمل النمط المحدد وحذفها
    var buttonsToRemove = document.querySelectorAll('button[style="' + targetStyle + '"]');
    buttonsToRemove.forEach(function(button) {
        button.remove();
    });

    // إنشاء زر جديد
    var newButton = document.createElement('button');
    newButton.style.borderRadius = '25%'; // تغيير نسبة الانحناء
    newButton.style.backgroundColor = 'blue'; // تغيير لون الخلفية
    newButton.style.color = 'white';
    newButton.style.position = 'fixed';
    newButton.style.top = '10px';
    newButton.style.right = '10px';
    newButton.style.fontSize = '16px';
    newButton.textContent = 'By DOUIS';

    // إضافة حدث النقر على الزر الجديد
    newButton.addEventListener('click', function() {
        // توجيه المستخدم إلى الرابط عند النقر
        window.location.href = 'https://t.me/essekhaya';
    });

    // إنشاء عنصر لعرض التاريخ
    var currentDate = new Date();
    var dateElement = document.createElement('div');
    dateElement.style.position = 'fixed';
    dateElement.style.top = '50px'; // تحديد المسافة بين الزر والتاريخ
    dateElement.style.right = '10px';
    dateElement.style.color = 'white';
    dateElement.style.backgroundColor = 'black';
    dateElement.style.padding = '5px';
    dateElement.textContent = currentDate.toLocaleDateString();

    // إضافة الزر وعنصر التاريخ إلى الصفحة
    document.body.appendChild(newButton);
    document.body.appendChild(dateElement);

})();
