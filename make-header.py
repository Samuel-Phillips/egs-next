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

/*
 * COPYRIGHT 2017 Samuel Phillips
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The source code for this script can be found at the following URL:
 * https://github.com/Samuel-Phillips/egs-next
 */

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
    domains = site['domain']
    if not isinstance(domains, list):
        domains = (domains,)

    for domain in domains:
        site_conf[domain] = {
            'next': site['next_selector'],
            'prev': site['prev_selector'],
            'parenting': site.get('parenting', [0,0]),
            'name': site['strip_name'],
        }
        includes.append(icl.format(domain=domain))
    strip_names.append(site['strip_name'])

result = template.format(
    strip_names=andjoin(strip_names),
    includelines=''.join(includes),
    version=cfg['script_ver'],
    script_ns=cfg['script_ns'],
    site_conf=json.dumps(site_conf)
)

print(result)
