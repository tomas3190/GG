var activities = ["in Mekáč", "at family grilovačka", "at his chata","making milkshake","chopping wood","playing Zakázané ovoce"];
var images = ["./images/0.jpg","./images/1.png","./images/2.jpg","./images/3.jpg","./images/4.png","./images/5.jpg","./images/6.jpg","./images/7.jpg","./images/8.jpg","./images/9.jpg","./images/10.jpg","./images/11.jpg","./images/12.jpg","./images/13.png","./images/14.jpg","./images/15.png","./images/16.png","./images/17.png","./images/18.jpeg","./images/19.jpeg","./images/20.jpeg","./images/21.png","./images/22.jpeg","./images/23.png","./images/24.png","./images/25.gif","./images/26.jpeg","./images/27.png","./images/28.png","./images/29.png","./images/30.png","./images/31.png","./images/32.png","./images/33.png","./images/34.png","./images/35.png","./images/36.png","./images/37.jpeg","./images/38.jpeg","./images/39.jpeg","./images/40.jpeg","./images/41.png","./images/42.png","./images/43.jpeg","./images/44.png"];

photoChange();

document.querySelector("button").addEventListener("click", function() {
    changeAnswer();
});

document.querySelector("img").addEventListener("click", function() {
photoChange();
});

function photoChange() {
    var randomNumber = Math.floor(Math.random()*images.length);
    document.querySelector("img").src = images[randomNumber];
}

function changeAnswer() {
    var randomNumber = Math.floor(Math.random()*activities.length);
    var date = new Date(document.querySelector("input").value);

    if (date.toDateString() !== "Invalid Date") {
        photoChange();
        document.querySelector(".answer").textContent = "GG was " + date.toDateString() + " " + activities[randomNumber];
        document.querySelector("input").value = "";   
    } else {
        document.querySelector(".answer").textContent = "Input date you piece of shit!";
    }

    
}