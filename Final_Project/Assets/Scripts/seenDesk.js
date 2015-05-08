#pragma strict

static var seenDesk : boolean = false;


function OnTriggerEnter (other : Collider){
 	if(other.tag == "Player") {
  seenDesk = true;}
  }