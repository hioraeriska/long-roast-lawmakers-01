# The Long Roast: Lawmakers and the File They Cannot Convert

[![make.fun · u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7](https://make.fun/badge/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7.svg)](https://make.fun/bounty/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7?utm_source=github&utm_medium=readme&utm_campaign=u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7)
[![rank](https://make.fun/badge/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7/hioraeriska/long-roast-lawmakers-01/rank.svg)](https://make.fun/bounty/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7)
[![reward](https://make.fun/badge/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7/hioraeriska/long-roast-lawmakers-01/reward.svg)](https://make.fun/bounty/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7?utm_source=github&utm_medium=readme&utm_campaign=u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7)

One satirical sentence roasting lawmakers who would regulate AI, crypto or the internet but cannot convert a file to PDF — an entry for the [make.fun bounty "The Long Roast: Lawmakers and the File They Cannot Convert"](https://make.fun/bounty/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7).

## The sentence

> The lawmaker demanding a kill switch for AI has spent three terms unable to find the button that turns his own bill into a PDF, so his staff prints it, scans it, and emails him the scan.

## How it runs

`main.ts` (Node 22) writes the single sentence to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`), then reads it back and verifies the gate: 1–320 characters, exactly one sentence, not blank.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
