const request = fetch('https://hackremote.today/ideas');

const app = document.getElementById('app');
const ideas = document.createElement('div');

ideas.setAttribute('class', 'ideas');
app.appendChild(ideas)

request
    .then(data => data.json())
    .then(data => {
      

        data.forEach((_id) => {

            const ideadetail = document.createElement('div');
            ideadetail.setAttribute('class','ideadetail');

            const name = document.createElement('h2');
            name.textContent= `${_id.name}`;

            const description = document.createElement('p');
            description.textContent = `${_id.description}...`

           const team = _id.team;

           const teamblock = document.createElement('div');

           team.forEach((teammember) =>{
                let member = document.createElement('span')
                member.textContent = `${teammember.firstName + ' '}`;
                teamblock.appendChild(member);
            });
           

            // const joinbtn = document.createElement("BUTTON");
            // joinbtn.innerHTML = "JOIN";

            

            ideas.appendChild(ideadetail);
            ideadetail.appendChild(teamblock);
            ideadetail.appendChild(name);
            ideadetail.appendChild(description);

            // ideadetail.appendchild(joinbtn)

            
        });



    })
    .catch((err) => {
        console.error(err);
    });