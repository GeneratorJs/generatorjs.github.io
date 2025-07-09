//hero section
function LoadHero(){
    append(appmain, gen("section", "hero", gen("h1", "", site.title), 'section container'), 'over')

    append(hero,
    [        
        gen(p,"","Also knows as")
        gen(h2,"","SevenJS : 7 function frontend library")
        gen(p, '', 'Frontend design with less typing, less editing to HTML CSS <br />With only <b>Seven</b> functions</b>.'),
        gen(span, 'installButton', 'Install', 'button')
    ]
)

//main functions
append(hero, gen(span, 'instructionsButton', 'Instructions', 'button-blank', { "href": "#instructions" }))


}

LoadHero()
