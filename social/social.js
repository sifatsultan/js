var answer = prompt ("What social network do you use?");

switch(answer)
{
case "facebook" || "Facebook":
    document.writeln("Ah! FB, add me as a friend!");
    break;
   
 case 'twitter' || "Twitter":
	document.writeln("Ah! Tweet me something, and follow me!");
	break;
 
 case 'instagram' || "Instagram":
	document.writeln("Ah! instagram, follow me and double tap if you     like!");
	break;

 default:
	document.writeln("Please enter a valid expression!");
}