function toggleMenu() {
    var menu = document.getElementById("pgMenu");
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  }

  $(function() {
  

    const games = [
      {
        title: "007",
        author: "James Bond", 
        link: "Games Bond"
      
      },
      {
        title: "Name Game",
        link: "https://zanemoon13.github.io/lab-echo/index.html", 
        author: "Zane Mooney"
      },
      
        {
          title: "namePage",
          link: "https://2fortdev.github.io/Echo-lab/",
          author: "Sam Aaron"
          }
    ];
    // iterate over the JSON array
    $.each(games, function (index, item) {
      console.log(item.title);
      console.log(item.author);
      console.log(item.link);
    
    

    var el = `<div class='container'> \
      <div class='card'> \
           <h3>${ item.title } </h3>\
           <h4>${ item.author } </h4> \
           <a href="${ item.link }" target="_blank" class="link-info" >Game 🎮</a> \
       </div>
       </div>`;
     
    
     console.log(el); 
    
    
    $('#firstCard').append(el);
    
    
    });
    
    
    });