function calculateAge()
{
    var x = prompt('enter your year of birth');
    y = new Date().getFullYear();
    age = (x - y).toString;
    alert(y);

}

calculateAge();
