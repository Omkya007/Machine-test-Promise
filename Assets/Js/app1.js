const cl = console.log;

const titleCon = document.getElementById("title");
const contentCon = document.getElementById("content");
const formin = document.getElementById("signIn");
const cardCon = document.getElementById("cardCon");

const sweetAlert = (msg, icon) => {
  Swal.fire({
    title: msg,
    icon: icon,
    timer: 3000,
  });
};

let blogsArr = [
  // {
  //     title:"Angular 18 ",
  //     content :"Angular is  frontend framework used to single page apps",
  //     blogid:"1234"
  // }
];

let blogdata = [];

const createBlog = (newObj) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let err = Math.random() > 0.5 ? false : true;
      if (!err) {
        blogsArr.push(newObj);
        resolve(`The blog has been created successfully`);
      } else {
        reject(`Something went wrong While creating blog`);
      }
    }, 1440);
  });
};

const fetchBlog = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let err = Math.random() > 0.1 ? false : true;
      if (!err) {
        resolve(blogsArr);
      } else {
        reject(`Something went wrong while fetching data`);
      }
    }, 1500);
  });
};

const createCard = (arr) => {
  if (arr.length == 0) {
    alert(`Please Provide data`);
  }
  let res = "";
  arr.forEach((ele) => {
    res += `<div class="card">
                <div class="card-header">
                    <h2>${ele.titleVal}</h2>
                </div>
                <div class="card-body">
                    <p> ${ele.contentVal}</p>
                </div>
                <div class="card-footer" id="butt">
                    <button class="btn btn-primary btn-sm" type="button">Edit</button>
                    <button class="btn btn-danger btn-sm" type="button">Remove</button>
                </div>
            </div>`;
  });
  cardCon.innerHTML = res;
};

// createBlog({
//     title:"React",
//     content:"React is frontend framework used to create single page apps",
//     blogid:"1233"
// })
const onAdd = (eve) => {
  eve.preventDefault();
  cl(`submitted`);

  let newObj = {
    titleVal: titleCon.value,
    contentVal: contentCon.value,
  };
  formin.reset();
  cl(newObj);
  createBlog(newObj)
    .then((res) => {
      cl(res);
      return fetchBlog();
    })
    .then((res) => {
      createCard(res);
    })

    .catch((err) => {
      sweetAlert(err, `error`);
    });
};

formin.addEventListener("submit", onAdd);

// .then((res)=>{
//     cl(res)
//     return fetchBlog()
// })
// .then((res)=>{
//     createCard(res)
// })
// .catch((err)=>{
//     sweetAlert(err,`error`)
// })
