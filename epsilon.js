function myReplace(str, before, after) {
    return str.replace(before, /^[A-Z]/.test( before) ? after.charAt(0).toUpperCase() + after.slice(1) :after.toLowerCase());
  }
  myReplace("His name is Tom", "Tom", "john");