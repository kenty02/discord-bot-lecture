// Discord.jsライブラリから必要なものをインポートします
import { Client, GatewayIntentBits } from 'discord.js';
// クライアントオブジェクトを生成します
const client = new Client({
    // Botがメッセージイベントを受け取れるようにします
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
})
// 注：絶対にトークンをソースコードに書いた状態でコミットしないこと
client.login('トークンをここに');

// ログイン処理できたらメッセージ出力
client.on('ready', () => {
    console.log(`Logged in as ${client.user?.tag}!`);
})

// 誰かがメッセージを送信したらイベント処理
client.on('messageCreate', (message) => {
    console.log(message)
    if (message.mentions.has(client.user!) && message.content.includes('!ping')) {
        message.reply('pong');
    }
})