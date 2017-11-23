#!/usr/bin/env python
import csv
import igraph

g = igraph.Graph()

with open('repo-attributes.csv', 'rb') as repofile:
    reader = csv.DictReader(repofile)
    for repo in reader:
        g.add_vertex(name=repo['repository_url'],
            label=repo['repository_url'][19:],
            language='(unknown)' if repo['repository_language'] == 'null'
                else repo['repository_language'],
            watchers=int(repo['repository_watchers']))