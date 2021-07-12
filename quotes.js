const quotes = [
  {
    quote: `If you are not paying for it, you're not the customer; you're the product being sold.`,
    author: 'none',
  },
  {
    quote: `If you have an idea, make it a code. Or, it’s nothing.`,
    author: 'Jake Song',
  },
  {
    quote: `Nur tote Fische schwimmen mit dem Strom.`,
    author: 'none',
  },
  {
    quote: `A ship in harbor is safe but that is not what ship are built for.`,
    author: 'John Augustus.shedd',
  },
  {
    quote: `All life is an experiment. The more experiments you make the better.`,
    author: 'Ralph Waldo Emerson(1803-1882, Essayist)',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

quote.innerText = quotes[Math.floor(Math.random() * quotes.length)].quote;
author.innerText = quotes[Math.floor(Math.random() * quotes.length)].author;
