function calculateAge()
{
    x = prompt('enter your year of birth');
    y = new Date().getFullYear();
    age = (y - x);
    alert(age);

}

calculateAge();
