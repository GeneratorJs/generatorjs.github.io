function loadInstall(){
    
append(appmain, gen(section, "install", gen(h1, "", "Install"), 'section container'))
append(install, gen(div, "github", gen(h2, "", "Clone from Github")))
append(github, gen(code, '', `git clone https://github.com/GeneratorJs/generatorjs.cdn.git`, 'code, small'))
//html include script tag
append(install, gen(div, "scriptTag", gen(h2, "", "Add script tag in html")))

append(scriptTag, gen(code, '', `
<script src="https://generatorjs.github.io/generatorjs.cdn/generator.js"></script>
`, 'code,small'))

append(scriptTag, gen(code, '', `
<script src="https://generatorjs.github.io/generatorjs.cdn/generator.js"></script>
<script defer>
    window.$ = GeneratorJs()
    $.init()

    //your app logic
    append(app, "", "over") /* reset app */
    append(app, gen(header, "appheader", 'Header content', 'header'));
    append(app, gen(main, "appmain", 'Main content', 'appmain container'));
    append(app, gen(footer, "appfooter", "Footer content", 'container'));
</script>`, 'code, small'))

append(scriptTag, gen(p, "", "By default it will try to load 'script.js from dir where index.html is located, so you can write code in script.js and place it with 'index.html'"))


append(install, gen(div, "singlefile", gen(h2, "", "Template index.html")))











getfile("https://generatorjs.github.io/starter.html", (resp) => { append(singlefile, gen(code, 'singlefilecode', resp, 'code,small')) });



document.getElementById(`installButton`).addEventListener('click', () => { install.scrollIntoView({ block: 'center', behavior: 'smooth' }) })



}

loadInstall()