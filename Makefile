.PHONY: all clean

all:
	python3 mknext.py

clean:
	rm -f out/$(wildcard *next.user.js)
	rmdir out
	rm -f README.md
