const body = document.querySelector ("body"),
        nav = document.querySelector("nav"),
        modeToggle = document.querySelector(".dark-light"),
        searchToggle = document.querySelector(".searchBox");

    modeToggle.addEventListener ("click" , () =>{
      modeToggle.classList.toggle("active");
      body.classList.toggle("dark");  
    });

    modeToggle.addEventListener ("click" , () =>{
      modeToggle.classList.toggle("active");
    });

    