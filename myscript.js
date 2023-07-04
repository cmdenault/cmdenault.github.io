function showResume() {
    document.getElementById('tton').style.display='none';
    document.getElementById('demo').style.display='block';
    

}

function navBarResponsive() {
    var x = document.getElementById('myTopnav');
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }