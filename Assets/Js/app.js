const cl = console.log;

const sweetAlert = (msg, icon) => {
  Swal.fire({
    title: msg,
    icon: icon,
    timer: 3000,
  });
};

const hrcall = (skill) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (skill.toLowerCase().includes("mean")) {
        resolve(`The candidate is fit  1st for interview`);
      } else {
        reject(`Looking for an Candidate`);
      }
    }, 1200);
  });
};

const firstTech = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let err = Math.random() > 0.5 ? false : true;
      if (!err) {
        resolve(`The candidate is fit for 2nd Tech`);
      } else {
        reject(`Candidate is not having basics`);
      }
    }, 1200);
  });
};

const secondTech = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let err = Math.random() > 0.5 ? false : true;
      if (!err) {
        resolve(`The candidate is fit for mgr Tech`);
      } else {
        reject(`Candidate is not  coding  basics`);
      }
    }, 1200);
  });
};

const mgr = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let err = Math.random() > 0.5 ? false : true;
      if (!err) {
        resolve(`The candidate is Selected`);
      } else {
        reject(`Candidate is not selected`);
      }
    }, 1200);
  });
};

hrcall("mean")
  .then((res) => {
    cl(res);
    return firstTech();
  })
  .then((res) => {
    cl(res);
    return secondTech();
  })
  .then((res) => {
    cl(res);
    return mgr();
  })
  .then((res) => {
    sweetAlert(res, `success`);
  })
  .catch((err) => {
    sweetAlert(err, `error`);
  });
