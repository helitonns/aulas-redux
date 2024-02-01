const li = Array.from(document.querySelectorAll("li"));

// const getElementAttr = (el, key)=> {
//   return el.getAttribute(key);
// }

const getElementAttr = (key) => {
  return function (el) {
    return el.getAttribute(key);
  }
}

const getAttrDataSlide = getElementAttr("data-slide");
const getAttrId = getElementAttr("id");

// const dataSlideList = li.map(el => el.getAttribute("data-slide"));
// const idList = li.map(el => el.getAttribute("id"));

// const dataSlideList = li.map(el => getElementAttr(el, "data-slide"));
// const idList = li.map(el => getElementAttr(el, "id"));

const dataSlideList = li.map(getAttrDataSlide);
const idList = li.map(getAttrId);

console.log(dataSlideList);
console.log(idList);