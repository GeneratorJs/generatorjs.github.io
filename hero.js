//hero section
function LoadHero(){
    append(appmain, gen("section", "hero", gen("h1", "", site.title), 'section container'), 'over')

append(hero,
    [
        gen(p, '', 'Website frontend design with less typing, less editing to HTML CSS <br />Few functions to learn or precisely <b>three</b> functions to be learned</b>.'),
        gen(span, 'installButton', 'Install', 'button')
    ]
)

//main functions
append(hero, gen(span, 'instructionsButton', 'Instructions', 'button-blank', { "href": "#instructions" }))


}

LoadHero()