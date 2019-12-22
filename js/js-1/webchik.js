//1ое задание
var str="Необходимо написать предложение";
document.write(str, "<br>");
var countWords=str.split(' ').length;
document.write("Количество слов: ", countWords,'<br>');
document.write('Количество букв: ', str.length-countWords+1, '<br>');

document.write("Полный URL адрес:  ", window.location, '<br>');
document.write("Протокол:  ", document.location.protocol, '<br>');
var url=document.URL;
document.write("Имя файла:  ", url.split("/").pop(), '<br>');
document.write("Расширение файла:  ", url.split('.').pop(), '<br>');

url2="http://site.com/?search=sometext&page=100&abc=1&abc=qwe";
document.write("Подстрока параметров:  ",url2.split("?").pop());
//document.write(url2.location.search);

//2ое задание
var anch = 'Anchor';
var newAnch = 'New Anchor';
document.write('<br>','Новый анкор: ',anch.anchor('a1'),'<br>');
document.write('Еще один анкор: ',newAnch.anchor('a2'),'<br>');

document.write('<a href="https://www.google.com">Google</a><br>');
document.write('<a href="https://www.yandex.ru">Yandex</a><br>');

document.write('<img id = "chicken" src="chicken.png" width="50" height="50">');
document.write('<img id = "fish" src="fish.png" width="100" height="100">','<br>');

document.write('Кол-во анкоров: ', document.anchors.length,'<br>');
document.write('Кол-во ссылок: ', document.links.length,'<br>');

document.write('Содержимое первого анкора: ', document.anchors[0].innerHTML, '<br>');
document.write('Кол-во картинок: ', document.images.length,'<br>');
document.write('Ширина первой картинки: ', document.images[0].width,'<br>');
var shirina=0;
var summ=0;
for (let i = 0; i < document.images.length; i++) {
  if (document.images[i].width>shirina){
    shirina=document.images[i].width;
  }
  summ+=document.images[i].height;
}
document.write('Ширина самой широкой картинки: ', shirina, '<br>');
document.write('Сумма всех высот картинок: ', summ, '<br>')

//3е задание
for (let i = 0;i<10;i++)
{
  document.write('<form name = "name',i,'" id = "',i,'">');
  document.write('<input type="button" value="Показать имя формы" onClick="alert(\'Показать имя формы\')"class = "reg"></input>');
  document.write('<input type="login"></input>');
  document.write('<input type="button" value="Принадлежность" onClick="alert(',i,')" class = "whois"></input>');
  document.write('<input type="reset" class = "reset"></input>');
  document.write('<input type="button" value="Пок. кол-во. полей" onClick="alert(',document.forms[i].childElementCount+1,')" class="showMe"></input>','</form>');
}

document.write('Имена всех четных форм: ');
for (let i = 0;i<10;i++)
{
    if(i%2==0){
      document.write(document.forms[i].name, ',');
    }
}
document.write('<br>');

//4ое задание
document.write('<a href = "https://www.yandex.ru">Yandex</a><br>');
document.write('<a href = "https://www.mail.ru">Mail</a><br>');
document.write('<a href = "https://www.google.ru">Google</a><br>');
document.write('<a href = "https://www.vk.com">VK</a><br>');
document.write('<a href = "https://www.ok.ru">VK</a><br>');
document.write('<a href = "https://www.de.ifmo.ru">ITMO</a><br>');
document.write('<a href = "https://www.openede.ru">OPENEDU</a><br>');
document.write('<a href = "https://www.repl.it">Repl.it</a><br>');
document.write('<a href = "https://www.wikipedia.org">Wikipedia</a><br>');
document.write('<a href = "https://www.twitter.com">Twitter</a><br>');

document.write('<table><tr><th>Уникальный текст</th><th>Количество ссылок</th><th>Href</th></tr>');
var aTaged = document.getElementsByTagName('a');
for (let i = 4;i<aTaged.length;i++)
{
  var count = 0;
  for (let k = 4; k<aTaged.length; k++)
  {
    if (aTaged[i].innerHTML == aTaged[k].innerHTML)
    {
      count +=1; 
    }
  }
  document.write('<tr><td>',aTaged[i].innerHTML,
  '</td><td>',count,'</td><td>',aTaged[i],'</td></tr>')
}
document.write('</table>');