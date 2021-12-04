const counters = document.querySelectorAll(".counter");
const speed = 60;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = parseInt(counter.getAttribute("data-target"));
    const count = parseInt(counter.innerText);

    const inc = Math.trunc(target / speed);

    if (count < target) {
      counter.innerText = count + inc;
      setTimeout(updateCount, 45);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});

$(window).load(function () {
  $(".status").fadeOut();
  $(".preloader").delay(50).fadeOut(1000);
  $("body").delay(50).css({ overflow: "visible" });
});
