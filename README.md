# Piccolo

<h3> Harnessing the Bear and Bull </h3>

## Vision

Financial markets have often bewildered even the best of analysts because their movement depends of a lot of latent covariates, through <b> Piccolo </b> we have made an attempt to harness the power of social media to monitor the enigma of market trends.
We are collecting data from Twitter handles of some important financial institutions in order to gauge the market movements. The idea is to use this as an ancillary channel for making predictions.

## System Architecture

![architecture image][logo]

[logo]: https://github.com/rupakc/Piccolo/blob/main/architecture.PNG "System Data Flow"

<b> Meteor JS </b> superpowers our application by providing the very basic foundations for both backend and front-end. The UI has been adorned with <b> Semantic </b>. We collect data from the following twitter handles and carry out a sentiment analysis of the same using the <b> AFINN </b> sentiword list.

- StockTwits
- Twitter - The Economist, Financial Times, StartupIndia
