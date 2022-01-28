

let boxCA = document.querySelectorAll(".Box-container");
// console.log(boxCA)
gsap.registerPlugin(ScrollTrigger);

// let tl = gsap.timeline();



boxCA.forEach((e,index) => {
   e.classList.toggle(`ani${index}`)
});
const ulCA = document.querySelector("#zeit-list")

    },})
     .to(`#zeit-list`, {
        y: `-${index * 20}px`,
        duration: 0.1,
        

    })
})


