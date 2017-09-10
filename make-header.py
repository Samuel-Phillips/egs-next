#!/usr/bin/python3
import toml
import json

template = """\
// ==UserScript==
// @name        Webcomic Keyboard Shortcuts
// @namespace   {script_ns}
// @description Keyboard shortcuts for multiple sites, including {strip_names}.
{includelines}\
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @version     {version}
// @grant       none
// ==/UserScript==

const site_conf = {site_conf};
"""

icl = """\
// @include     http://{domain}/*
// @include     https://{domain}/*
"""

def andjoin(l):
    if not l:
        return ''
    elif len(l) == 1:
        return l[0]
    elif len(l) == 2:
        return '{} and {}'.format(*l)
    else:
        return '{}, and {}'.format(', '.join(l[:-1]), l[-1])

with open('cfg.toml') as cfgf: cfg = toml.load(cfgf)

site_conf = {}
includes = []
strip_names = []

for site in cfg['sites']:
    site_conf[site['domain']] = {
        'next': site['next_selector'],
        'prev': site['prev_selector'],
        'parenting': site.get('parenting', [0,0]),
        'name': site['strip_name'],
    }
    includes.append(icl.format(domain=site['domain']))
    strip_names.append(site['strip_name'])

result = template.format(
    strip_names=andjoin(strip_names),
    includelines=''.join(includes),
    version=cfg['script_ver'],
    script_ns=cfg['script_ns'],
    site_conf=json.dumps(site_conf)
)

print(result)
