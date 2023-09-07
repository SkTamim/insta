const likeIcon = document.querySelectorAll(".like_icon");
likeIcon.forEach((icon) => {
	icon.addEventListener("click", () => {
		const img =
			icon.parentElement.parentElement.parentElement.previousElementSibling;
		likesCount(icon, img);
	});
});

const postImage = document.querySelectorAll(".post_img");

postImage.forEach((img) => {
	img.addEventListener("dblclick", () => {
		const likeIcon = img.nextElementSibling.querySelector(".like_icon");
		likesCount(likeIcon, img);
	});
});

function likesCount(icon, img) {
	icon.classList.toggle("liked");
	let likes = Number(icon.parentElement.nextElementSibling.innerText);
	if (icon.classList.contains("liked")) {
		likes += 1;
		icon.parentElement.nextElementSibling.innerText = likes;

		img.querySelector(".inpicture_love_icon").classList.add("active");
	} else {
		likes -= 1;
		icon.parentElement.nextElementSibling.innerText = likes;
		img.querySelector(".inpicture_love_icon").classList.remove("active");
	}
}
function togglePicLike(isLiked) {
	if (isLiked) {
	}
}
