
function RandomInteger(min, max) {
    return Math.floor(min + Math.random()*(max - min + 1))
  }
 var a = [];
    for(var i=1;i<=6;i++)
    {
        a[i] = RandomInteger(1,55);
        console.log(a[i]);
    }
 
setTimeout(function() {
    var t = [];
    for(var i=1;i<=6;i++){
    t[i]= prompt("Enter a number: ");
    t[i]=parseInt(t[i]);
    while(isNaN(t[i]) || t[i]<1 || t[i]>55   )
    {
    t[i] = prompt("Enter: ");
    t[i]=parseInt(t[i]);
    }
}
var result = t.filter(function (o1) {
    return !a.some(function (o2) {
        return o1 === o2; 
   });
});
var dem = 6 - result.length
if(dem < 3) alert("co cai l djt me may");
if(dem == 3) alert("200.000");
if(dem == 4) alert("1.700.000");
if(dem == 5) alert("82.500.000");
if(dem == 6) alert("JackPot");
    }
    
,3000)
    
  




