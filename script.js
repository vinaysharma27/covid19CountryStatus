
function showData()
{
    event.preventDefault();
    var country=document.getElementById("country").value;
    var sDate=document.getElementById("start").value;
    var eDate=document.getElementById("end").value;

    var confirmed=document.getElementById("confirmed");
    var active=document.getElementById("active");
    var deaths=document.getElementById("deaths");

    console.log(start);

    if(country=='' || start=='' || end=='')
    alert("Field is empty");

    else
    {
        var url="https://api.covid19api.com/country/"+country+"?from="+start+"T00:00:00Z&to="+end+"T00:00:00Z";

        fetch(url)
        .then((wrapper) => wrapper.json())
        .then((wrapper) => {
            console.log(wrapper);
            var length=wrapper.length;
            var index=length-1;

            var c=wrapper[index].Confirmed;
            var a=wrapper[index].Active;
            var d=wrapper[index].Deaths;

            confirmed.innerHTML=c;
            active.innerHTML=a;
            deaths.innerHTML=d;

            document.getElementById("wrapper").style.display="block";
            
        })
    }
}