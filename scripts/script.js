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
        title: "super-adventure-charlie",
        author: "Skyler Saunders", 
        link: "https://skysaunders.github.io/super-adventure-charlie/",
        
        title2: "animated-sniffle-foxtrot",
        author2: "Skyler Saunders", 
        link2: "https://skysaunders.github.io/animated-sniffle-foxtrot/"
      },
      {
        title: "Glowing Meme Foxtrot",
        author: "Candice Buford", 
        link: "https://cbuf0rd.github.io/glowing-meme-foxtrot/",
        
        title2: "Glowing Giggle Echo Lab",
        author2: "Candice Buford", 
        link2: "https://cbuf0rd.github.io/glowing-giggle-echo-lab/"
      },
      {
        // this is for the last game notice it doesnt have a comma on the closed curly bracket 
      }
    ];
    // iterate over the JSON array
    $.each(games, function (index, item) {
      console.log(item.title);
      console.log(item.author);
      console.log(item.link);
      console.log(item.title2);
      console.log(item.author2);
      console.log(item.link2);
    
    

    var el = `<div class='container'> \
      <div class='card'> \
           <h3>${ item.title } </h3>\
           <h4>By ${ item.author } </h4> \
           <a href="${ item.link }" target="_blank" class="link-info" >Game 🎮</a> \
       </div>
           <div class='card'> \
           <h3>${ item.title2 } </h3>\
           <h4>By ${ item.author2 } </h4> \
           <a href="${ item.link2 }" target="_blank" class="link-info" >Game 🎮</a> \
       </div>
       </div>`;
     
    
     console.log(el); 
    
    $('#gameCard').append(el);
    
    });
    });
