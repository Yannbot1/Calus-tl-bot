module.exports = (bot) => {
  bot.command('start', (ctx) => {
    const userName = ctx.from.first_name; 

    const welcomeMessage = `👋 Bonjour ${userName} \n\nBienvenue chère utilisateur ou utilisatrice moi c'est Yann bot \n\n- /help consultez la liste de mes commandes \n\n veuillez contacter si le bot à un problème 🤗`;
@jachiiuser
    ctx.reply(welcomeMessage);
  });
};
