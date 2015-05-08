#pragma strict

var warehouse: Transform;
var flagone=0;
var flagtwo=0;
public var target : Transform;

function OnTriggerEnter( other : Collider ) 
{ 
if (other.tag == "TV") {
flagone=1;}

if(other.tag=="desk") {
flagtwo=1;}

if (flagone==1 && flagtwo==1){
	Destroy(warehouse);
	}
}	