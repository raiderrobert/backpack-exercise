from collections import Counter


class Backpack:

    def __init__(self, size=10):
        self.size = size
        self._contents = []
        self._counts = Counter(self._contents)

    def get_contents(self):
        return self._contents

    def get_counts(self):
        return self._counts

    def _drop_contents(self):
        if len(self._contents) > self.size:
            self._contents.pop(-0)

    def add(self, item):
        self._contents.append(item)
        self._drop_contents()
        self._contents.sort(key=lambda s: s.lower())
        self._counts = Counter(self._contents)

    def remove(self, item):
        self._contents.remove(item)
        self._contents.sort(key=lambda s: s.lower())
        self._counts = Counter(self._contents)

    def most_popular(self):
        label, count = self._counts.most_common()[0]
        return {label: count}