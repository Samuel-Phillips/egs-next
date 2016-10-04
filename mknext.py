import configparser
import os

def do_file(fpath, tlate, readme):
    config = configparser.ConfigParser()
    config.read(fpath)
    for sec in config.sections():
        do_inst(sec, config[sec], tlate, readme)

def do_inst(secname, secinfo, tlate, readme):
    secinfo.setdefault('version', '1')
    secinfo.setdefault('parenting', '0,0')
    with open('out/' + secname, mode='w') as f:
        f.write(tlate.format(**secinfo))
    print('* [{strip_name}](out/{0})'.format(secname, **secinfo), file=readme)

def main(cfgfile, tlatefile, readmedest, readmesrc):
    try:
        os.mkdir('out')
    except FileExistsError:
        pass

    with open(tlatefile) as f: tlate = f.read()
    with open(readmedest, 'w') as rmd:
        with open(readmesrc) as rms: rmd.write(rms.read())
        do_file(cfgfile, tlate, rmd)

if __name__ == '__main__':
    main('comics.cfg', 'template.js', 'README.md', 'readme-prelude.md')
