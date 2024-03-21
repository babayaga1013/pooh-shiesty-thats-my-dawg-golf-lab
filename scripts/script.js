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
        title: "Delta",
        author: "Mohammed Alrasheidi", 
        link:"https://mohammedalrasheidi.github.io/Delta-lab/",
        
        title2: "Charlie",
        author2: "Mohammed Alrasheidi",
        link2: "https://mohammedalrasheidi.github.io/Charlie//"
      },
      {
        title: "Charlie",
        author: "Grant Hartley", 
        link:"https://hrantgartley.github.io/improved-train-charlie/",
        
        title2: "Delta",
        author2: "Grant Hartley",
        link2: "https://hrantgartley.github.io/didactic-waffle-delta/"
      },
      {
        title:"Delta",
        author:"Ayman Alluhaybi", 
        link:"https://aalluhaybi1.github.io/DELTA-LAB/",
        
        title2:"CHARLIE",
        author2:"Ayman Alluhaybi", 
        link2:"https://aalluhaybi1.github.io/CHARLIE_LAB/"
      },
      {
        title:"Charlie",
        author:"Brayden Bolton", 
        link:"https://bbolton1.github.io/CIS376-Charlie-Brayden/",
        
        title2:"Delta",
        author2:"Brayden Bolton", 
        link2:"https://bbolton1.github.io/delta-lab-brayden/",
      },
      {
        title:"probable-charlie",
        author:"Navraj_Singh",
        link:"https://quantumcoder-242.github.io/probable-charlie/",
        
        title2:"turbo-delta",
        author2:"Navraj_Singh", 
        link2:"https://quantumcoder-242.github.io/turbo-delta/"
      },
      {
        title:"psychic-delta",
        author:"AkashdeepSingh0047",
        link:"https://akashdeepsingh0047.github.io/psychic-delta/",
        
        title2:"Chrlie-lab-By-Akashdeep",
        author2:"AkashdeepSingh0047", 
        link2:"https://akashdeepsingh0047.github.io/Chrlie-lab-By-Akashdeep/"
      },
      {
        title:"charlie-lab-zrundle",
        author:"Zach Rundle", 
        link:"https://zrundle.github.io/charlie-lab-zrundle/",
        
        title2:"zrundle-delta-lab",
        author2:"Zach Rundle", 
        link2:"https://zrundle.github.io/zrundle-delta-lab/"
      },
      {
        title:"Delta",
        author:"isabellerushing",
        link:"https://isabellerushing.github.io/crispy-octo-carnival-delta/",
        
        title2:"Charlie",
        author2:"isabellerushing", 
        link2:"https://isabellerushing.github.io/improved-octo-giggle-charlie/"
      },
      {
        title:"Delta Lab Spirit Animal",
        author:"Marvin De La Cruz",
        link:"https://marvin-2056.github.io/Delta-CIS-367/",
        
        title2:"echo",
        author2:"Grant Hartley", 
        link2:"https://hrantgartley.github.io/jubilant-bassoon-echo/"
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
