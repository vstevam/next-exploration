function reloadOnce() {
    if(window.location.href.includes("resume") && window.location.href.substr(-2) !== "?r"){
        location.reload(true);
        window.location = window.location.href + "?r";
    }
  }
  (() => {
    reloadOnce();
  })();