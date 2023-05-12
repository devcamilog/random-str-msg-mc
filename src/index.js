const messages = [
    "This is where all the fun begins...",
    "Commit fully committed",
    "Version control is hilariously awful",
    "COMMIT ALL THE FILES! Hilarious edition",
    "The same thing we do every night, Iron Man - try to take over the world... with jokes!",
    "Lock repulsors in hilarious attack position",
    "This commit is a hilarious fabrication",
    "I'll explain when you're older... and ready for a good laugh!",
    "Here be hilarious Iron Dragons",
    "Reinventing the arc reactor. Again. Hilariously.",
    "This is not the commit message you are looking for... it's a joke!",
    "Iron Man! (this commit has no suit... but plenty of laughs)"
];

const funnyCommit = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(`\x1b[34m${message}\x1b[89m`);
}

module.exports = {
    funnyCommit
};