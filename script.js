const links = {
    github: "thiagorochatr",
    youtube: "channel/UCqNMMhWfBWZZ-snXxtv63Pg",
    instagram: "thiagorochatr",
    facebook: "thiago.rocha.56884",
    twitter: "thiagorochatr1"
}

function changeSocialMediaLinks() {
    for (let li of socialLinks.children) {
        const social = li.getAttribute('class')
        li.children[0].href = "https://www." + social + ".com/" + links.social
        li.children[0].href = `https://www.${social}.com/${links[social]}`

        // alert(li.children[0].href)
    }
}

changeSocialMediaLinks()