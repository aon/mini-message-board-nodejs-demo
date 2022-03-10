date1 = new Date(2019, 11, 17, 15, 24, 0);
date2 = new Date(2020, 01, 13, 18, 01, 0);

const messages = [
  {
    title: 'On the topic of pizzas',
    description:
      'I personally think Pizza Hut beats Blaze Pizza, but each to their own... I also dig Hungry Howie’s and their wings. Dominoes is alright. Papa John’s if I’m really desperate.',
    username: 'Armando',
    date: date1.toLocaleString(),
  },
  {
    title: 'Blaze Pizza',
    description:
      'I just tried Blaze Pizza for the first time and I love it! What is everybody’s go-to order at Blaze?',
    username: 'Laurie',
    date: date2.toLocaleString(),
  },
];

module.exports = messages;