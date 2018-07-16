function buttonFunction()
{
    //alert("Testing Connection");
    var what = document.getElementById("question1");
    var when = document.getElementById("question2");
    var why = document.getElementById("question3");
    var how = document.getElementById("question4");

    if(what.checked)
    {
        //alert("Testing 123");
        document.getElementById("whatanswer").style.visibility = "visible";
    }
    if(when.checked)
    {
        document.getElementById("whenanswer").style.visibility = "visible";
    }
    if(why.checked)
    {
        document.getElementById("whyanswer").style.visibility = "visible";
    }
    if(how.checked)
    {
        document.getElementById("howanswer").style.visibility = "visible";
    }
}