//             Some Planign....
//we need to craete a wraper div with name an bio inside ✅
//we need to set the pic as the background inmge of warper div ✅
//we need to set name an bio inside the p tags in the warper div ✅
//we need to append the name and bio to the warper div ✅
//we need to append the warper div to the cards container ✅
//Job done
let container = document.querySelector(".cards-container");
let input = document.querySelector("#SearchBar");

let Users = [
    {
        userName: "smriti Bansal",
        pic: "https://i.pinimg.com/736x/84/cc/12/84cc12b689829801d79fc1c582f4f258.jpg",
        bio: "Creating my own sunshine ✨"
    },
    {
        userName: "rohit Sharma",
        pic: "https://i.pinimg.com/1200x/92/7b/6f/927b6f791f331a2e4c1d8d96689b5ea9.jpg",
        bio: "Living life one goal at a time ⚡"
    },
    {
        userName: "neha Kapoor",
        pic: "https://i.pinimg.com/1200x/50/d4/f6/50d4f69173ca947ebb7ea1488371cf08.jpg",
        bio: "Soft heart, strong mind 🌸"
    },
    {
        userName: "aman Verma",
        pic: "https://i.pinimg.com/736x/af/a4/a2/afa4a2754f1c3745f6435d256e9b6fb4.jpg",
        bio: "Simple guy with big dreams 🚀"
    },
    {
        userName: "ananya Iyer",
        pic: "https://i.pinimg.com/736x/09/b7/e8/09b7e8e704ab670794094028a37d6dfc.jpg",
        bio: "Growing, glowing, evolving 🌱"
    },
    {
        userName: "kunal Mehta",
        pic: "https://i.pinimg.com/736x/0f/37/44/0f37449ce43858738a05f56e82ac6398.jpg",
        bio: "Focused, calm, and always learning 📚"
    },
    {
        userName: "pooja Nair",
        pic: "https://i.pinimg.com/1200x/1e/2a/9c/1e2a9ccbdf8ba0038aeb6835aa2ad21d.jpg",
        bio: "Peace over perfection 🤍"
    },
    {
        userName: "arjun Singh",
        pic: "https://i.pinimg.com/1200x/f7/f5/cf/f7f5cf8323dda87d124cef64971f0a5c.jpg",
        bio: "Work hard, stay humble 💯"
    },
    {
        userName: "riya Choudhary",
        pic: "https://i.pinimg.com/736x/27/e7/86/27e786556713580f28b971487f002d52.jpg",
        bio: "Confidence is my superpower 👑"
    },
    {
        userName: "rahul Malhotra",
        pic: "https://i.pinimg.com/736x/ed/00/39/ed0039447e482e754038ecdd9d648d9b.jpg",
        bio: "Dreaming big and moving fast 🔥"
    }
];

//Cards Creation logic -
function CradsConverter(arr) {

    arr.forEach((user) => {
        //creating Wraper div
        let div = document.createElement("div");
        div.setAttribute('class', 'wraper');

        //creating p tag for nmae
        let name = document.createElement("p");
        name.setAttribute('id', 'name')

        //creating p tag for bio
        let bio = document.createElement("p");
        bio.setAttribute('id', 'bio')

        //setting the pic as BG image 
        div.style.backgroundImage = `url('${user.pic}')`

        //setting the name an bio info 
        name.textContent = `${user.userName}`
        bio.textContent = `${user.bio}`

        //appending name and pic with wraper div
        div.appendChild(name)
        div.appendChild(bio)

        //appending the wraper div with cards container div
        container.appendChild(div)
    })

}

CradsConverter(Users);

//Filter Search Logic - 

// Plannig -
// when some one types in input,
// check the value of input
// compare it filter method like this -> if user.userName starts with input.value
// if yes grab that value, return user(maens the actual card)
// we got the filtered array of users 
// give it to the CradsConverter(Users);

input.addEventListener("input", () => {

    let keyword = input.value;
    let newArr = Users.filter((user) => {
        return user.userName.includes(keyword)
    })
    container.innerHTML = ""
    if (newArr.length === 0) {
        container.innerHTML = "<h1>No result Found...</h1>"
        return;
    }
    CradsConverter(newArr);
    // console.log(newArr)
})