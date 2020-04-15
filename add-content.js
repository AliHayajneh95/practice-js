function calculateAge()
{
    x = prompt('enter your year of birth');
    y = new Date().getFullYear();
    age = (x - y);
    alert(age);

}

calculateAge();
