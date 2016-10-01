import configparser

def do_file(fpath, tlate):
    config = configparser.ConfigParser()
    config.read(fpath)
    for sec in config.sections():
        do_inst(sec, config[sec], tlate)

def do_inst(secname, secinfo, tlate):
    with open(secname, mode='w') as f:
        f.write(tlate.format(**secinfo))

def main(cfgfile, tlatefile):
    with open(tlatefile) as f: tlate = f.read()

    do_file(cfgfile, tlate)

if __name__ == '__main__':
    main('comics.cfg', 'template.js')
