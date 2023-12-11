export function ImgGenerator({ number }) {
  if (number === 1) {
    return (
      <img src="https://cdn.myanimelist.net/images/characters/3/66703.jpg" />
    );
  } else if (number === 2) {
    return (
      <img src="https://i.pinimg.com/736x/b9/02/37/b90237522cf5b3c68c6ab24ded118216.jpg" />
    );
  }
}
