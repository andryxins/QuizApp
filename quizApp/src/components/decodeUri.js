// for decoding text
// need to do

export default string => {
  try {
    // console.log(encodeURIComponent(string));
    // console.log(decodeURIComponent(string));

    return decodeURIComponent(string);
  } catch (e) {
    console.log(e);
  }
};
