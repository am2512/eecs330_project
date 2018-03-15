


 <script language="Javascript">

            function IsEmpty(){ 

                if(document.form.question.value == "")
                {
                    alert("empty");
                }
                return;
            }


function IsEmpty(){
  if(document.forms['frm'].question.value === "")
  {
    alert("empty");
    return false;
  }
    return true;
}