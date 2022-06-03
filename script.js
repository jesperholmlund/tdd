const inbox = () => {
  return [
    {
      _id: 1,
      title: "Lorem ipsum",
      content: "lorem ipsum dolor sim",
      author: "pelle",
    },
    {
      _id: 2,
      title: "Lorem ",
      content: "lorem  dolor sim",
      author: "pelle",
    },
    {
      _id: 1234,
      title: "Lorem ipsum",
      content: "lorem ipsum dolor sim",
      author: "pelle",
    },
  ];
};

const searchMail = (text) => {
  const results = inbox().filter(
    (mail) =>
      mail.title.includes(text) ||
      mail.content.includes(text) ||
      mail.author.includes(text)
  );
  return results;
};

const newMail = [
  {
    _id: 134,
    title: "Lorem ipsum",
    content: "lorem",
    author: "jeh",
  },
];

const mails = inbox();
const sendMail = () => {
  const found = mails.find((mail) => mail._id == newMail[0]._id);
  if (found == undefined) {
    //console.log("unique id");
  }
  if (found != undefined) {
    //console.log("Needs unique id");
  }
};

sendMail();
/**
 * testar att göra
 * unikt id på alla mail
 * inga tomma fält
 * sendMail innehålla unikt id
 */

module.exports = { inbox, sendMail, newMail, searchMail };
