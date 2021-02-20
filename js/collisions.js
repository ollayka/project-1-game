// collisionCheck(element1, element2) {
//     const isTouchingOnLeft = element.x + element.width > player.x;
//     const isTouchingOnBottom = element.y < player.y + player.hight;
//     const isTouchingOnRight = element.x < player.x + player.width;
//     const isTouchingOnTop = element.y + element.hight > player.y;
//     return (
//       isTouchingOnLeft &&
//       isTouchingOnBottom &&
//       isTouchingOnRight &&
//       isTouchingOnTop
//     );
// }

// function collisionCheck(element1, element2) {
//   const element1TopArea = element1.y;
//   const element1LeftArea = element1.x;
//   const element1RightArea = element1.x + element1.width;
//   const element1BottomArea = element1.y + element1.height;

//   const element2TopArea = element2.y;
//   const element2LeftArea = element2.x;
//   const element2RightArea = element2.x + element2.width;
//   const element2BottomArea = element2.y + element2.height;

//   const isTouchingOnLeft = element2RightArea > element1LeftArea;
//   const isTouchingOnBottom = element2TopArea < element1BottomArea;
//   const isTouchingOnRight = element2LeftArea < element1RightArea;
//   const isTouchingOnTop = element2BottomArea > element1TopArea;

//   return (
//     isTouchingOnLeft &&
//     isTouchingOnBottom &&
//     isTouchingOnRight &&
//     isTouchingOnTop
//   );
// }
