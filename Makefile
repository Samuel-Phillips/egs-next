.PHONY: all clean

NODEJS := nodejs

LSC = $(NODEJS) node_modules/.bin/lsc
result = webcomic-keyboard-shortcuts.user.js

all: $(result)

header.js: cfg.toml make-header.py 
	./make-header.py > $@

$(result): header.js body.js
	cat $^ > $@

%.js: %.ls
	$(LSC) -c $<

clean:
	rm -f $(result)
	rm -f README.md
	rm -f header.js
	rm -f body.js 
