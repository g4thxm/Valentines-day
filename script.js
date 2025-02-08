

function handleyesclick(){
   window.location.href="yes_page.html";
}

function handlenoclick(){
  window.location.href="no_page.html"
}

function handlenoclick2(){
  const no1 = document.querySelector('.no1');
  const yes1 = document.querySelector('.yes1');
  const currentSize = parseFloat(window.getComputedStyle(yes1).fontSize);
  const currentSize1 = parseFloat(window.getComputedStyle(no1).fontsize);
  yes1.style.fontSize = `${currentSize * 2.5}px`;
}

  