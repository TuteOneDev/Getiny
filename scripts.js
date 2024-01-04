function generarMiniatura() {
	var inputLink = document.getElementById("youtubeLink").value;
	var videoId = obtenerVideoId(inputLink);
	if (videoId) {
		var miniaturaUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
		window.open(miniaturaUrl, "_blank");
	} else {
		alert("El enlace de YouTube no es válido.");
	}
}

function obtenerVideoId(link) {
	var regex = /[?&]v=([^#\&\?]*).*/.exec(link);
	if (regex && regex[1]) {
		return regex[1];
	}
	regex = /youtu\.be\/([^#\&\?]*)/.exec(link);
	if (regex && regex[1]) {
		return regex[1];
	}
	regex = /\/shorts\/([^#\&\?]*)/.exec(link);
	if (regex && regex[1]) {
		return regex[1];
	}
	regex = /\/shorts\/[^#\&\?]*\?si=[^#\&\?]*&video_id=([^#\&\?]*)/.exec(link);

	if (regex && regex[1]) {
		return regex[1];
	}

	regex = /\/live\/([^#\&\?]*)/.exec(link);

	if (regex && regex[1]) {
		return regex[1];
	}

	return null;
}
