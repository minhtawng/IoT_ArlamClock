const app = require ("express")();
const PORT = process.env.PORT || 3000;
//const db = require('./config/db')

 //db.connect();


app.get("/", (req, res) => {
    res.send(`
    <table cellpadding="10" cellspacing="0">
        <tbody><tr valign="TOP">
        
        <td valign="TOP" width="151">
        
        <img class="intro" src="https://sieupet.com/sites/default/files/pictures/images/1-1473150685951-5.jpg"><p>
        
        </p></td>
        
        <td valign="TOP">
        
        <div><h2>Tăng Quốc Minh<br>
        Class: CTTT2019.2<br>
        Student ID: 19521854
        </h2>
        
        <p>
        <strong>I really into swimming, beside I also falling in love with MN.</strong>
        </p>
        
        <p><strong>Soon to be genius BA,
            <a href="https://www.uit.edu.vn/">UIT, <a href="https://vnuhcm.edu.vn/">VNU-HCM</a></a>
        </strong> </p>
        
        <p>
        
        Student <a href="https://www.uit.edu.vn/">University of Information Technology</a>, 2019.</p><p>
        
        </p><dd>
        <b>
            <a href="https://github.com/minhtawng">Github</a><br> 
            <a href="https://www.facebook.com/minhtang208/">Facebook</a></div>
        
        </b>
        
        
        </dd></td>
        </tr>
        </tbody></table>
        <hr>
            <h2 class="learn">Subject and Learning</h2>
            <ul>
                <li >Web application and development</li>
                <li >MSIS207.N12.CTTT</li>
                <li >IEM5723.N12.CTTT</li>
            </ul>
        
        <hr>
        
        <hr>
            <h2 class="learn">Working Experience</h2>
            <ul>
                <li>Dates Work</li>
                <li>2019-2023 Student at UIT</li>
            </ul>
        </hr>
        
        <hr>
            <h2>Skill</h2>
            <ul>
                <li class="fa fa-star checked">HTML/CSS/JS</li><br>
                <li class="fa fa-star checked">ReactJS</li><br>
                <li class="fa fa-star checked">Nodejs/Express</li><br>
                <li class="fa fa-star checked">Presentation, Communication Skills, Teamwork skills</li><br>
                <li class="fa fa-star checked">Word,Excel,PowerPoint</li>
            </ul>
        </hr>
        
        </script>`);
});

app.listen(PORT, () => {
    console.log(`App up at port ${PORT}`);
});