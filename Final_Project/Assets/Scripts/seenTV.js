#pragma strict

static var seenTV : boolean = false;


function OnTriggerEnter (other : Collider){
 	if(other.tag == "Player") {
  seenTV = true;}
  }