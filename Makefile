.PHONY: all clean

all:
	python3 mknext.py

clean:
	rm -f $(wildcard *next.user.js)
	rm -f README.md
