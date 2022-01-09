// var name = ["PRANESH", "APPU", "AHAAN", "MITHRA"];
// for(i=0;i<name.length;i++){
//     console.log("Hello" +" "+ name[i]);
// };

(function(window) {
	var speakWord = "Hello";
	var helloSpeaker = function (name) {
		console.log(speakWord + " " + name);
	}

	window.helloSpeaker = helloSpeaker;

})(window);