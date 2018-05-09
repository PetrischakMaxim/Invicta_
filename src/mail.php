<?php
//Принимаем постовые данные
$name=$_POST['user_name'];
$phone=$_POST['user_phone'];
//Тут указываем на какой ящик посылать письмо
$to = "vovaz0307@gmail.com";
//Далее идет тема и само сообщение
// Тема письма
$subject = "Заявка с сайта Invicta";
// Сообщение письма
$message = "
Имя пользователя: ".htmlspecialchars($name)."<br />
Телефон: <a href='tel:$phone'>".htmlspecialchars($phone)."</a>";
// Отправляем письмо при помощи функции mail();
$headers = "From: Invicta \r\nContent-type: text/html; charset=UTF-8 \r\n";
mail ($to, $subject, $message, $headers);
// Перенаправляем человека на страницу благодарности и завершаем скрипт
header('Location: thanks.html');
exit();
?>
