# Olympy Discord Bot

![Olympy Banner](photos/discord-bot-cover.png)

A feature-rich Discord bot built with Python and discord.py, featuring music playback, Amazon product scraping, and entertainment commands.

## ⚠️ Disclaimer

**Important:** This project was originally built in 2021 and 2022. Due to changes in YouTube's policy, the music playback features of this bot are no longer functional and are unavailable. Please be aware that music commands and related features will not work as intended.

> **Apology:**  
> I would like to apologize for the lack of commits in this repository. When I started this project, I was not familiar with Git's version control system, so there is only one full project commit. Thank you for your understanding!

## 🎵 Features

### 🎵 Music System

- **Advanced Music Player**: Full-featured music bot with queue management
- **Multiple Sources**: Support for YouTube, direct URLs, search queries, and playlist URLs
- **Queue Management**: Add, remove, shuffle, and navigate through tracks
- **Audio Controls**: Play, pause, stop, skip, previous, volume control
- **Equalizer**: Built-in equalizer with presets (flat, boost, metal, piano) and advanced custom settings
- **Lyrics**: Automatic lyrics fetching for currently playing songs
- **Seek & Restart**: Seek to specific timestamps and restart tracks
- **Repeat Modes**: None, single track, or entire queue repeat

### 🛒 Amazon Scraper

- **Product Search**: Search Amazon products across different regions
- **Multi-page Scraping**: Scrape up to 20 pages of results
- **CSV Export**: Automatic export of results to CSV file
- **Regional Support**: Search on Amazon US (.com), UK (.co.uk), Germany (.de)
- **Product Details**: Extract title, price, rating, review count, and URLs

### 🎮 Entertainment Commands

- **Server Information**: Display detailed server stats
- **Random Responses**: Fun hello messages and jokes
- **Rock Paper Scissors**: Interactive game with image responses
- **Propaganda**: Special promotional features
- **Gay Meter**: Fun percentage calculator (DM-based)

## 🚀 Quick Start

### Prerequisites

- **Operating System**: Microsoft Windows 10+
- **Python**: 3.8 or higher
- **Java**: 13+ (for Lavalink music server)
- **Browser**: Chrome/Chromium (for Amazon scraping)
- **Discord**: Bot Token from Discord Developer Portal

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd Olympy
   ```

2. **Install Python dependencies**

   ```bash
   pip install discord.py wavelink selenium beautifulsoup4 aiohttp
   ```

3. **Set up Lavalink Music Server**

   - Download Lavalink.jar
   - Place it in the project directory
   - Ensure Java 13+ is installed

4. **Configure Bot Token**

- Go to [Discord Developers Portal](https://discord.com/developers/applications)
- Create a new application and bot
- Go to OAuth 2 and get your token
- Create `Data` directory and paste the token in `token.0` file

5. **Install Chrome WebDriver**
   - Download chromedriver.exe for Amazon scraping
   - Place it in the project root

### Running the Bot

#### Manual Start

1. Start Lavalink server:

   ```bash
   java -jar Lavalink.jar
   ```

2. Start the bot:
   ```bash
   python launcher.py
   ```

#### Automated Start (Windows)

Use the automation script:

```bash
python Automation/Bot.py
```

## 📋 Commands

### Music Commands

| Command       | Aliases            | Description                       |
| ------------- | ------------------ | --------------------------------- |
| `-connect`    | `join`, `j`        | Connect bot to voice channel      |
| `-disconnect` | `leave`, `d`       | Disconnect from voice channel     |
| `-play`       | `p`                | Play music (URL or search term)   |
| `-pause`      |                    | Pause current track               |
| `-stop`       |                    | Stop and clear queue              |
| `-next`       | `skip`, `s`        | Skip to next track                |
| `-previous`   |                    | Play previous track               |
| `-shuffle`    |                    | Shuffle queue                     |
| `-queue`      | `q`                | Show current queue                |
| `-volume`     |                    | Set volume (0-1000%)              |
| `-lyrics`     | `ly`               | Show song lyrics                  |
| `-playing`    | `np`, `nowplaying` | Show current track info           |
| `-seek`       |                    | Seek to timestamp (e.g., "2m34s") |
| `-restart`    |                    | Restart current track             |

### Amazon Commands

| Command       | Aliases      | Description             |
| ------------- | ------------ | ----------------------- |
| `-amazon`     | `find`, `az` | Search Amazon products  |
| `-amazonhelp` |              | Show Amazon search help |

**Amazon Search Syntax:**

```
-amazon product_name pages country
```

- `product_name`: Use underscores for spaces
- `pages`: Number of pages (1-20)
- `country`: com (US), co.uk (UK), de (Germany)

### Entertainment Commands

| Command              | Aliases | Description                 |
| -------------------- | ------- | --------------------------- |
| `-hello`             | `h`     | Get random greeting         |
| `-joke`              | `haha`  | Tell a random joke          |
| `-serverinfo`        | `sinfo` | Show server information     |
| `-rockpaperscissors` | `rps`   | Play rock, paper, scissors  |
| `-propaganda`        | `prop`  | Special promotional content |
| `-credits`           |         | Show bot credits            |
| `-dm`                |         | Fun percentage calculator   |

## ⚙️ Configuration

### Bot Prefix

The bot uses `-` as the default prefix and responds to mentions.

### Music Server Configuration

Lavalink configuration in `music.py`:

```python
nodes = {
    'MAIN': {
        'host': '127.0.0.1',
        'port': 2333,
        'rest_uri': 'http://127.0.0.1:2333',
        'password': 'youshallnotpass',
        'identifier': 'MAIN',
        'region': 'europe',
    }
}
```

### File Structure

```
Olympy/
├── bot/
│   ├── __init__.py
│   ├── bot.py              # Main bot class
│   └── cogs/
│       ├── music.py        # Music functionality
│       ├── amazon.py       # Amazon scraping
│       └── ostalo.py       # Entertainment commands
├── Automation/
│   └── Bot.py              # Auto-start script
├── Data/
│   └── token.0             # Bot token
├── launcher.py             # Bot launcher
├── chromedriver.exe        # Web scraping driver
├── Lavalink.jar            # Music server
└── README.md
```

## 🛠️ Technical Details

### Dependencies

- **discord.py**: Discord API wrapper
- **wavelink**: Music library for Lavalink
- **selenium**: Web scraping for Amazon
- **beautifulsoup4**: HTML parsing
- **aiohttp**: Async HTTP client

### Music Features

- **Wavelink Integration**: Professional music streaming
- **Queue System**: Advanced queue management with history
- **Equalizer**: 15-band equalizer with presets
- **Volume Control**: 0-1000% volume range
- **Auto-disconnect**: Leaves voice channel when empty

### Amazon Scraping

- **Multi-region Support**: US, UK, Germany
- **CSV Export**: Structured data export
- **Error Handling**: Graceful handling of missing data
- **Rate Limiting**: Built-in delays for respectful scraping

## 📝 License

No license is provided for this project, as it is for informational purposes only

## 👨‍💻 Credits

**Made by:** Sebastjan Bas

Special credit for the music system implementation goes to the open-source community, with significant inspiration and code contributions from [Carberra](https://github.com/Carberra) and [RK Coding](https://github.com/RK-Coding). Their work on Discord music bots and Wavelink integration was instrumental in the development of Olympy's music features.

## 🐛 Troubleshooting

### Common Issues

1. **Bot won't connect to voice**

   - Ensure Lavalink server is running
   - Check Java version (13+ required)
   - Verify network connectivity

2. **Amazon scraping fails**

   - Update chromedriver.exe
   - Check internet connection
   - Verify Amazon region codes

3. **Music commands not working**
   (MUSIC PART OF THE BOT DOES NOT WORK ANYMORE)
   - Ensure bot has voice permissions
   - Check Lavalink server status
   - Verify bot token is correct

### Support

For issues and questions, please check the troubleshooting section above or create an issue in the repository.

## 📸 Screenshots

### Music Commands in Action

![Song selection with search query](photos/screenshots/playsong-query.png)
_Bot supports adding whole playlists into the queue_

![Song selection with link](photos/screenshots/playsong-link.png)
_Direct URL and playlist support_

### Queue Management

![Skip a song in a queue](photos/screenshots/queue-skip.png)
_Skip to next track in queue_

![Show currently playing song](photos/screenshots/queue-nowplaying.png)
_Display current track information_

![More queue commands](photos/screenshots/queue-morecommands.png)
_Queue management and controls_

### Audio Controls & Equalizer

![Volume controls](photos/screenshots/eq-volume.png)
_Volume adjustment and equalizer presets_

![Advanced equalizer settings](photos/screenshots/eq-adjustment.png)
_Custom equalizer band adjustments_

### Additional Features

![Show lyrics of the song](photos/screenshots/lyrics.png)
_Automatic lyrics fetching_

![Seek to specific timestamp](photos/screenshots/seek-song.png)
_Seek functionality for precise control_

### 🛒 Amazon Scraper

![Amazon scraping example](photos/screenshots/amazon-scraping.png)
_Amazon product search with CSV export_

### 🎮 Entertainment Commands

![Show server info](photos/screenshots/server-info.png)
_Detailed server information display_

![Greet the bot](photos/screenshots/bot-hello.png)
_Fun greeting responses_

![Play rock paper scissors](photos/screenshots/bot-rockpaperscissors.png)
_Interactive rock-paper-scissors game_
