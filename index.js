const input = document.getElementById("nameTag");
const tags = document.querySelector(".tags");
const addTag = () => {
    const tag = document.createElement("div");

    tag.innerText = `Hey, i am ${input.value}`;
    tag.setAttribute("class","tag");
    tags.append(tag);
}