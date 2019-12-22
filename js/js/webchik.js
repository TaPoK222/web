var anch = 'Anchor';
var newAnch = 'New Anchor';
document.write('<br>','Новый анкор: ',anch.anchor('a1'),'<br>');
document.write('Еще один анкор: ',newAnch.anchor('a2'),'<br>');
document.write('<form><input type="text" value="Третья форма"></form><br><br>');

document.write('<b>Показать текст в браузер с помощью document.write()</b><br>');
document.write('Показал<br>');
document.write('<b>Показать отформатированный текст в браузер с помощью document.write()</b><br>');
document.write('<i>Показал</i><br>');
document.write('<b>Показать количество анкоров в документе</b><br>');
document.write('Кол-во анкоров: ', document.anchors.length,'<br>');
document.write('<b>Показать содержимое (innerHTML) первого анкора в странице</b><br>');
document.write('Содержимое первого анкора: ', document.anchors[0].innerHTML, '<br>');
document.write('<b>Показать количество форм в документе</b><br>');
document.write('Кол-во форм: ', document.forms.length, "<br>");
document.write('<b>Показать название (имя) первой формы в документе </b><br>');
document.write('Имя первой формы: ', document.forms[0].name, "<br>");
document.write('<b>Показать количество изображений в документе </b><br>');
document.write('Кол-во картинок: ', document.images.length, '<br>');
document.write('<b> Показать id первого изображения в документе</b><br>');
document.write('id первой картинки: ', document.images[0].id, '<br>');
document.write('<b> Показать количество ссылок в документе</b><br>');
document.write('Кол-во ссылок: ', document.links.length, '<br>');
document.write('<b> Показать id первой ссылки в документе</b><br>');
document.write('id первой ссылки: ', document.links[0].id, '<br>');
document.write('<b> Показать имя домена сервера, который загрузил документ</b><br>');
document.write('Имя домена сервера: ', document.domain, '<br>');
document.write('<b>Показать URL документа, который загрузил текущий документ </b><br>');
document.write('URL документа: ', window.location, '<br>');
document.write('<b> Показать заголовок документа</b><br>');
document.write("Заголовок: ", document.title, '<br>');
document.write('<b>Показать полный адрес URL документа </b><br>');
document.write('URL адрес: ', document.URL, '<br>');
document.write('<b> Сделать кнопку в состояние disabled при ее нажатии</b><br>');
document.write('<form id="formForBtn"><input type="button" name="btn" value="Click me!" id="btn2" onclick="turnOffBtn()"></form>');
function turnOffBtn(){
	document.getElementById("btn2").disabled = true;
}
document.write('<b> Показать имя кнопки</b><br>');
document.write('Имя кнопки: ', document.getElementById('btn2').name, '<br>');
document.write('<b> Показать тип кнопки</b><br>');
document.write('Тип кнопки: ', document.getElementById('btn2').type, '<br>');
document.write('<b> Показать текст, отображаемый на кнопке</b><br>');
document.write('Текст на кнопке: ', document.getElementById('btn2'). value, '<br>');
document.write('<b> Показать id формы, которой принадлежит кнопка</b><br>');
document.write('id формы: ', document.getElementById('btn2').parentNode.id, '<br>')
document.write('<b>Рассмотрим данную форму: </b><br>');
document.write('<form id="frm5" name="form5" action="form_action.php" enctype="text/plain" method="get">Имя: <input type="text" name="fname" value="Иван" /><br />Фамилия: <input type="text" name="lname" value="Петров" /><br /><input type="submit" value="Отправить" /></form> ');
document.write('<b> Показать значение каждого элемента на форме</b><br>');
var x=document.getElementById("frm5");
for (var i=0;i<x.length;i++)
  {
  document.write(x.elements[i].value);
  document.write("<br />");
  }
document.write('<b> Показать значение атрибута action формы</b><br>');
document.write('Значение атрибута action: ', document.getElementById("frm5").action, '<br>');
document.write('<b> Показать значение атрибута enctype формы</b><br>');
document.write('Значение атрибута enctype: ', document.getElementById("frm5").enctype, '<br>');
document.write('<b> Показать количество элементов на форме</b><br>');
document.write('Кол-во элементов: ', document.getElementById("frm5").length, '<br>');
document.write('<b> Показать метод отправки данных с формы</b><br>');
document.write('Метод отправки: ', document.getElementById("frm5").method, '<br>');
document.write('<b> Показать имя (название) формы</b><br>');
document.write('Имя формы: ', document.getElementById("frm5").name, '<br>');
document.write('<b> Сбросить форму</b><br>');
document.write('<p>Введите какой-нибудь текст в поля ниже, затем нажмите кнопку "Сбросить форму", чтобы сбросить введенные данные.</p><form id="frm6">Имя: <input type="text" name="fname" /><br />Фамилия: <input type="text" name="lname" /><br /><br /><input type="button" onclick="formReset()" value="Сбросить форму" /></form>');
function formReset(){
	document.getElementById("frm6").reset();
}

document.write('<b> Выравнять изображения</b><br><img src="content/google.png" id="googleEmblem" name="Такое название" alt="Эмблема компании Google" width="100px"><input type="button" onclick="alignImg()" value="Выравнить изображение" /><br>');
function alignImg(){
	document.getElementById("googleEmblem").align="right";
}
document.write('<b> Показать альтернативный текст для изображения</b><br>');
document.write('Альтернативный текст: ',document.getElementById("googleEmblem").alt, '<br>');
document.write('<b> Добавить границу к изображению</b><br><input type="button" onclick="addBorder()" value="Добавить границу" /><br>');
function addBorder(){
	document.getElementById("googleEmblem").border="2";
}
document.write('<b> Изменить высоту и ширину изображения</b><br><input type="button" onclick="changeSize()" value="Изменить размер изображения" /><br>');
function changeSize(){
	document.getElementById("googleEmblem").height="250";
    document.getElementById("googleEmblem").width="300";
}

document.write('<b> Показать название изображения</b><br>');
document.write('Название картинки: ', document.getElementById('googleEmblem').name, '<br>');	

document.write('Рассмотрим таблицу: <br><table id="thisTable" border="1"><tr id="tr1"><td>1</td><td>2</td><td>3</td><td><input type="button" value="Удалить" onclick="deleteRow(this)"></td></tr><tr id="header"><td>4</td><td>5</td><td>6</td><td><input type="button" value="Удалить" onclick="deleteRow(this)"></td></tr><tr><td>7</td><td>8</td><td>9</td><td><input type="button" value="Удалить" onclick="deleteRow(this)"></td></tr></table><br>');
function deleteRow(r){
   var i=r.parentNode.parentNode.rowIndex;
   document.getElementById('thisTable').deleteRow(i);
}
document.write('<b> Изменить ширину границы таблицы</b><br>');
document.write('<input type="button" onclick="changeBorder()" value="Изменить Границу"><br>');
function changeBorder(){
	document.getElementById('thisTable').border="10px";
}
document.write('<b>Изменить cellPadding и cellSpacing таблицы</b><br><input type="button" onclick="padding()" value="Изменить Cellpadding"><input type="button" onclick="spacing()" value="Изменить Cellspacing"><br>');
function padding(){
	document.getElementById('thisTable').cellPadding="15";
}
function spacing(){
	document.getElementById('thisTable').cellSpacing="15";
}
document.write('<b> Указать рамку таблицы</b><br><input type="button" onclick="aboveFrames()" value="Показать рамку сверху"><input type="button" onclick="belowFrames()" value="Показать рамку снизу"><br>');
function aboveFrames(){
	document.getElementById('thisTable').frame="above";
}
function belowFrames(){
	document.getElementById('thisTable').frame="below";
}
document.write('<b> Создать заголовок для таблицы</b><br> <input type="button" onclick="createCaption()" value="Создать заголовок"><br>');
function createCaption(){
  var x=document.getElementById('thisTable').createCaption();
  x.innerHTML="<b>Мой заголовок таблицы</b>";
}


document.write('<b>Добавить строки в таблицу </b><br> <input type="button" onclick="insRow()" value="Вставить строку"><br>' );
function insRow(){
  var x=document.getElementById('thisTable').insertRow(0);
  var y=x.insertCell(0);
  var z=x.insertCell(1);
  var k=x.insertCell(2);
  y.innerHTML="НОВАЯ ЯЧЕЙКА1";
  z.innerHTML="НОВАЯ ЯЧЕЙКА2";
  k.innerHTML="НОВАЯ ЯЧЕЙКА3";
}
document.write('<b> Добавить ячейки в строку таблицы</b><br><input type="button" onclick="insCell()" value="Вставить ячейку"><br>');
function insCell(){
  var x=document.getElementById('tr1').insertCell(0);
  x.innerHTML="Еще что-то";
}
