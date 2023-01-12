# twinc-cli

This package provides a command-line interface for [TwinC](https://mimori256.github.io/twinc/).

## Installation

### npm

```bash
npm install -g twinc-cli
```

### Yarn

```bash
yarn global add twinc-cli
```

## Usage

```bash
$ twinc --help           
Usage: twinc [options] <CSV file>

Command-line interface for TwinC.

Arguments:
  CSV file                Path to the file containing the course IDs, such as RSReferCsv.csv

Options:
  -V, --version           output the version number
  -d, --includeDeadlines  include deadlines for advance registrations and course registrations
  -o, --output <path>     output file path (default: stdout)
  -h, --help              display help for command
```

## License

[Gnu General Public License v3.0](LICENSE)
