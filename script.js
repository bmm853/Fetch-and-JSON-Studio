// TODO: add code here
window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(data) {
            const container = document.getElementById("container");
            for (let i = 0; i < data.length; i++) {
                container.innerHTML += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${data[i].firstName} ${data[i].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${data[i].hoursInSpace}</li>
                            <li>Active: ${data[i].active}</li>
                            <li>Skills: ${data[i].skills.join(", ")}</li>
                        </ul>
                    </div>
                    <img class="avatar" src="images/${data[i].picture}">
                </div>
            `;
            }
        });
     });
});
