// Trigger off nav Mobile
// Ferme la nav
function triggerOff() {
  document.getElementById('navi').checked = false;
}

/* Date Auto */
new Date().getFullYear();document.getElementById("year").innerHTML = new Date().getFullYear();

/* Age */
<script type="text/javascript">
    function getAge(date) { 
        var diff = Date.now() - date.getTime();
        var age = new Date(diff); 

        return Math.abs(age.getUTCFullYear() - 1970);
    }

    alert(getAge(new Date(1995, 12, 6))); //Date(année, mois, jour)   
</script>