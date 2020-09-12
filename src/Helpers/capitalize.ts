const capitalize_first_letter = ( str: any ) => {

  let _str = str.split("");
  _str[0] = _str[0].toUpperCase()
  _str = _str.join("")

  return _str;
}

export default capitalize_first_letter;
