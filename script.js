function alertFunction()
{
    alert("Scroll down and click on the pictures to see the content change!");
}

function colorFunction()
{
    //alert("Hello. I'm the Color Function!");
    document.getElementById('content').style.color ="#063";
}

function visibleFunction()
{
    //alert("Hello. I'm the Visible Function!");
    let content = document.getElementById('content');
    if(content.style.visibility == 'hidden')
    {
        content.style.visibility = 'visible';
    }
    else
    {
        content.style.visibility = 'hidden';
    }
}