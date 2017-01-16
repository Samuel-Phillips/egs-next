#!/usr/bin/python3

import argparse
import sys
import toml
import json

parser = argparse.ArgumentParser()
parser.add_argument('--output', '-o', type=argparse.FileType('w'),
        default=sys.stdout)

parser.add_argument('input', type=argparse.FileType('r'))

def toml2json(instream, outstream):
    s = toml.load(instream)
    json.dump(s, outstream)

if __name__ == '__main__':
    args = parser.parse_args()
    toml2json(args.input, args.output)
