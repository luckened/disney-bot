const TelegramBot = require("node-telegram-bot-api");

const token = JSON.parse(require("fs").readFileSync("./token.json")).token;

const bot = new TelegramBot(token, { polling: true });

const commands = [
    "/davi",
    "/echo 'textoaqui'",
    "/salve",
    "/rodrigo",
    "/safado",
    "/horarios",
];

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;

    bot.sendMessage(
        chatId,
        "bom dia meu compatriota, /comandos para descobrir meus comandos"
    );
});

bot.onText(/\/comandos/, (msg) => {
    const chatId = msg.chat.id;
    let str = "meus comandos sao: \n";
    commands.map((command) => (str += command + "\n"));
    console.log(str);
    bot.sendMessage(chatId, str);
});

bot.onText(/\/echo (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const resp = match[1];

    bot.sendMessage(chatId, resp);
});

bot.onText(/\/davi/, (msg) => {
    const chatId = msg.chat.id;

    bot.sendMessage(chatId, "safado");
});

bot.onText(/\/salve/, (msg) => {
    const chatId = msg.chat.id;

    bot.sendMessage(chatId, "salve");
});

bot.onText(/\/rodrigo/, (msg) => {
    const chatId = msg.chat.id;

    bot.sendMessage(chatId, "fofinho 🥰");
});

bot.onText(/\/safado/, (msg) => {
    const chatId = msg.chat.id;

    bot.sendMessage(chatId, "davi 🤡");
});

bot.onText(/\/horarios/, (msg) => {
    const chatId = msg.chat.id;

    bot.sendPhoto(chatId, "./horarios.jpg");
});
