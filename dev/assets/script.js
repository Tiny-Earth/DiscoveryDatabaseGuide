window.addEventListener("load", function(){
    for (const a of document.body.getElementsByTagName("a")){
        // Open external links in new tabs
        if (a.href.length > 0 && new URL(a.href).origin !== location.origin){
            a.setAttribute("target", "_blank");
        }
    }

    // Render yuml code blocks as images
    for (const yuml of this.document.querySelectorAll("pre > code.language-yuml")){
        console.log(yuml.innerText);
        const pre = yuml.parentNode;
        const alt = pre.nextSibling;
        const src = "https://yuml.me/diagram/plain/class/" + encodeURIComponent(yuml.innerText.replaceAll("\n", ",")) + ".svg";
        const img = document.createElement("img");
        img.setAttribute("src", src);
        img.setAttribute("alt", alt.innerText);
        pre.parentNode.insertBefore(img, pre);
        pre.parentNode.removeChild(alt);
        pre.parentNode.removeChild(pre);
    }

    // Display alt text as figure captions
    let fig_no = 1;
    for (const img of document.querySelectorAll("img[alt]")){
        const figure = document.createElement("figure");
        const figcaption = document.createElement("figcaption");
        const p = document.createElement("p");
        const strong = document.createElement("strong");
        const br = document.createElement("br");
        const span = document.createElement("span");
        img.parentNode.insertBefore(figure, img);
        img.parentNode.removeChild(img);
        figure.appendChild(figcaption);
        figure.appendChild(img);
        figcaption.appendChild(p);
        p.appendChild(strong);
        p.appendChild(br);
        p.appendChild(span);
        strong.innerText = `Figure ${fig_no++}.`;
        span.innerText = img.getAttribute("alt");
    }

    // Make the edit link show the plain view so it is quicker to add line-level comments
    document.querySelector('a[title^="Edit"]').href += "?plain=1";

    // Reword "search docs"
    document.getElementById("documenter-search-query").innerText = "Search";
});