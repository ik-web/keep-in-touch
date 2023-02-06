const posts = [
  {
    id: 1,
    userId: 1,
    text: "The secret of getting ahead is getting started.",
    likes: 0,
  },
  {
    id: 2,
    userId: 4,
    text: "When something is important enough, you do it even if the odds are not in your favor.",
    likes: 0,
  },
  {
    id: 3,
    userId: 20,
    text: "If you're going through hell, keep going.",
    likes: 0,
  },
  {
    id: 4,
    userId: 3,
    text: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    likes: 0,
  },
  {
    id: 5,
    userId: 5,
    text: "It does not matter how slowly you go as long as you do not stop.",
    likes: 0,
  },
  {
    id: 6,
    userId: 16,
    text: "It always seems impossible until it's done.",
    likes: 0,
  },
  {
    id: 7,
    userId: 7,
    text: "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.",
    likes: 0,
  },
  {
    id: 8,
    userId: 8,
    text: "It does not matter how slowly you go as long as you do not stop.",
    likes: 0,
  },
  {
    id: 9,
    userId: 19,
    text: "It always seems impossible until it's done.",
    likes: 0,
  },
  {
    id: 10,
    userId: 10,
    text: "Good, better, best. Never let it rest. 'Til your good is better and your better is best.",
    likes: 0,
  },
  {
    id: 11,
    userId: 27,
    text: "Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
    likes: 0,
  },
  {
    id: 12,
    userId: 12,
    text: "With the new day comes new strength and new thoughts.",
    likes: 0,
  },
  {
    id: 13,
    userId: 13,
    text: "What you do today can improve all your tomorrows.",
    likes: 0,
  },
  {
    id: 14,
    userId: 14,
    text: "Life is 10% what happens to you and 90% how you react to it.",
    likes: 0,
  },
  {
    id: 15,
    userId: 25,
    text: "Start where you are. Use what you have. Do what you can.",
    likes: 0,
  },
  {
    id: 16,
    userId: 6,
    text: "Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
    likes: 0,
  },
  {
    id: 17,
    userId: 24,
    text: "Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.",
    likes: 0,
  },
  {
    id: 18,
    userId: 18,
    text: "Do the difficult things while they are easy and do the great things while they are small. A journey of a thousand miles must begin with a single step.",
    likes: 0,
  },
  {
    id: 19,
    userId: 9,
    text: "Where there is no vision, there is no hope.",
    likes: 0,
  },
  {
    id: 20,
    userId: 2,
    text: "When you can't make them see the light, make them feel the heat.",
    likes: 0,
  },
  {
    id: 21,
    userId: 21,
    text: "Leadership is the capacity to translate vision into reality.",
    likes: 0,
  },
  {
    id: 22,
    userId: 22,
    text: "With the new day comes new strength and new thoughts.",
    likes: 0,
  },
  {
    id: 23,
    userId: 23,
    text: "It does not matter how slowly you go as long as you do not stop.",
    likes: 0,
  },
  {
    id: 24,
    userId: 17,
    text: "If you're going through hell, keep going.",
    likes: 0,
  },
  {
    id: 25,
    userId: 15,
    text: "The secret of getting ahead is getting started.",
    likes: 0,
  },
  {
    id: 26,
    userId: 26,
    text: "Do the difficult things while they are easy and do the great things while they are small. A journey of a thousand miles must begin with a single step.",
    likes: 0,
  },
  {
    id: 27,
    userId: 28,
    text: "Start where you are. Use what you have. Do what you can.",
    likes: 0,
  },
  {
    id: 28,
    userId: 14,
    text: "Do the difficult things while they are easy and do the great things while they are small. A journey of a thousand miles must begin with a single step.",
    likes: 0,
  },
  {
    id: 29,
    userId: 29,
    text: "Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.",
    likes: 0,
  },
  {
    id: 30,
    userId: 30,
    text: "Do the difficult things while they are easy and do the great things while they are small. A journey of a thousand miles must begin with a single step.",
    likes: 0,
  },
  {
    id: 31,
    userId: 31,
    text: "Start where you are. Use what you have. Do what you can.",
    likes: 0,
  },
  {
    id: 32,
    userId: 33,
    text: "Leadership is the capacity to translate vision into reality.",
    likes: 0,
  },
  {
    id: 33,
    userId: 32,
    text: "When you can't make them see the light, make them feel the heat.",
    likes: 0,
  },
  {
    id: 34,
    userId: 49,
    text: "Where there is no vision, there is no hope.",
    likes: 0,
  },
  {
    id: 35,
    userId: 48,
    text: "Do the difficult things while they are easy and do the great things while they are small. A journey of a thousand miles must begin with a single step.",
    likes: 0,
  },
  {
    id: 36,
    userId: 47,
    text: "Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.",
    likes: 0,
  },
  {
    id: 37,
    userId: 40,
    text: "Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
    likes: 0,
  },
  {
    id: 38,
    userId: 41,
    text: "Start where you are. Use what you have. Do what you can.",
    likes: 0,
  },
  {
    id: 39,
    userId: 42,
    text: "If you can dream it, you can do it.",
    likes: 0,
  },
  {
    id: 40,
    userId: 46,
    text: "Life is 10% what happens to you and 90% how you react to it.",
    likes: 0,
  },
  {
    id: 41,
    userId: 43,
    text: "With the new day comes new strength and new thoughts.",
    likes: 0,
  },
  {
    id: 42,
    userId: 45,
    text: "Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
    likes: 0,
  },
  {
    id: 43,
    userId: 44,
    text: "Good, better, best. Never let it rest. 'Til your good is better and your better is best.",
    likes: 0,
  },
  {
    id: 44,
    userId: 34,
    text: "It always seems impossible until it's done.",
    likes: 0,
  },
  {
    id: 45,
    userId: 39,
    text: "It does not matter how slowly you go as long as you do not stop.",
    likes: 0,
  },
  {
    id: 46,
    userId: 35,
    text: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    likes: 0,
  },
  {
    id: 47,
    userId: 38,
    text: "If you're going through hell, keep going.",
    likes: 0,
  },
  {
    id: 48,
    userId: 36,
    text: "When something is important enough, you do it even if the odds are not in your favor.",
    likes: 0,
  },
  {
    id: 49,
    userId: 37,
    text: "The secret of getting ahead is getting started.",
    likes: 0,
  },
  {
    id: 50,
    userId: 1,
    text: "The secret of getting ahead is getting started.",
    likes: 0,
  },
  {
    id: 51,
    userId: 4,
    text: "When something is important enough, you do it even if the odds are not in your favor.",
    likes: 0,
  },
  {
    id: 52,
    userId: 20,
    text: "If you're going through hell, keep going.",
    likes: 0,
  },
  {
    id: 53,
    userId: 3,
    text: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    likes: 0,
  },
  {
    id: 54,
    userId: 5,
    text: "It does not matter how slowly you go as long as you do not stop.",
    likes: 0,
  },
  {
    id: 55,
    userId: 16,
    text: "It always seems impossible until it's done.",
    likes: 0,
  },
  {
    id: 56,
    userId: 7,
    text: "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.",
    likes: 0,
  },
  {
    id: 57,
    userId: 8,
    text: "It does not matter how slowly you go as long as you do not stop.",
    likes: 0,
  },
  {
    id: 58,
    userId: 19,
    text: "It always seems impossible until it's done.",
    likes: 0,
  },
  {
    id: 59,
    userId: 10,
    text: "Good, better, best. Never let it rest. 'Til your good is better and your better is best.",
    likes: 0,
  },
  {
    id: 60,
    userId: 27,
    text: "Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
    likes: 0,
  },
  {
    id: 61,
    userId: 12,
    text: "With the new day comes new strength and new thoughts.",
    likes: 0,
  },
  {
    id: 62,
    userId: 13,
    text: "What you do today can improve all your tomorrows.",
    likes: 0,
  },
  {
    id: 63,
    userId: 14,
    text: "Life is 10% what happens to you and 90% how you react to it.",
    likes: 0,
  },
  {
    id: 64,
    userId: 25,
    text: "Start where you are. Use what you have. Do what you can.",
    likes: 0,
  },
  {
    id: 65,
    userId: 6,
    text: "Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
    likes: 0,
  },
  {
    id: 66,
    userId: 24,
    text: "Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.",
    likes: 0,
  },
  {
    id: 67,
    userId: 18,
    text: "Do the difficult things while they are easy and do the great things while they are small. A journey of a thousand miles must begin with a single step.",
    likes: 0,
  },
  {
    id: 68,
    userId: 9,
    text: "Where there is no vision, there is no hope.",
    likes: 0,
  },
  {
    id: 69,
    userId: 2,
    text: "When you can't make them see the light, make them feel the heat.",
    likes: 0,
  },
  {
    id: 70,
    userId: 21,
    text: "Leadership is the capacity to translate vision into reality.",
    likes: 0,
  },
  {
    id: 71,
    userId: 22,
    text: "With the new day comes new strength and new thoughts.",
    likes: 0,
  },
  {
    id: 72,
    userId: 23,
    text: "It does not matter how slowly you go as long as you do not stop.",
    likes: 0,
  },
  {
    id: 73,
    userId: 17,
    text: "If you're going through hell, keep going.",
    likes: 0,
  },
  {
    id: 74,
    userId: 15,
    text: "The secret of getting ahead is getting started.",
    likes: 0,
  },
  {
    id: 75,
    userId: 26,
    text: "Do the difficult things while they are easy and do the great things while they are small. A journey of a thousand miles must begin with a single step.",
    likes: 0,
  },
  {
    id: 76,
    userId: 28,
    text: "Start where you are. Use what you have. Do what you can.",
    likes: 0,
  },
  {
    id: 77,
    userId: 14,
    text: "Do the difficult things while they are easy and do the great things while they are small. A journey of a thousand miles must begin with a single step.",
    likes: 0,
  },
  {
    id: 78,
    userId: 29,
    text: "Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.",
    likes: 0,
  },
  {
    id: 79,
    userId: 30,
    text: "Do the difficult things while they are easy and do the great things while they are small. A journey of a thousand miles must begin with a single step.",
    likes: 0,
  },
  {
    id: 80,
    userId: 31,
    text: "Start where you are. Use what you have. Do what you can.",
    likes: 0,
  },
  {
    id: 81,
    userId: 33,
    text: "Leadership is the capacity to translate vision into reality.",
    likes: 0,
  },
  {
    id: 82,
    userId: 32,
    text: "When you can't make them see the light, make them feel the heat.",
    likes: 0,
  },
  {
    id: 83,
    userId: 49,
    text: "Where there is no vision, there is no hope.",
    likes: 0,
  },
  {
    id: 84,
    userId: 48,
    text: "Do the difficult things while they are easy and do the great things while they are small. A journey of a thousand miles must begin with a single step.",
    likes: 0,
  },
  {
    id: 85,
    userId: 47,
    text: "Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.",
    likes: 0,
  },
  {
    id: 86,
    userId: 40,
    text: "Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
    likes: 0,
  },
  {
    id: 87,
    userId: 41,
    text: "Start where you are. Use what you have. Do what you can.",
    likes: 0,
  },
  {
    id: 88,
    userId: 42,
    text: "If you can dream it, you can do it.",
    likes: 0,
  },
  {
    id: 89,
    userId: 46,
    text: "Life is 10% what happens to you and 90% how you react to it.",
    likes: 0,
  },
  {
    id: 90,
    userId: 43,
    text: "With the new day comes new strength and new thoughts.",
    likes: 0,
  },
  {
    id: 91,
    userId: 45,
    text: "Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
    likes: 0,
  },
  {
    id: 92,
    userId: 44,
    text: "Good, better, best. Never let it rest. 'Til your good is better and your better is best.",
    likes: 0,
  },
  {
    id: 93,
    userId: 34,
    text: "It always seems impossible until it's done.",
    likes: 0,
  },
  {
    id: 94,
    userId: 39,
    text: "It does not matter how slowly you go as long as you do not stop.",
    likes: 0,
  },
  {
    id: 95,
    userId: 35,
    text: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    likes: 0,
  },
  {
    id: 96,
    userId: 38,
    text: "If you're going through hell, keep going.",
    likes: 0,
  },
  {
    id: 97,
    userId: 36,
    text: "When something is important enough, you do it even if the odds are not in your favor.",
    likes: 0,
  },
  {
    id: 98,
    userId: 37,
    text: "The secret of getting ahead is getting started.",
    likes: 0,
  },
  {
    id: 99,
    userId: 1,
    text: "Where there is no vision, there is no hope.",
    likes: 0,
  },
  {
    id: 100,
    userId: 4,
    text: "When something is important enough, you do it even if the odds are not in your favor.",
    likes: 0,
  },
];

export default posts;