const set1 = new Set()
const set2 = new Set()


set1.add('daniel')
// set1.add('rasheed')
// set1.add('shalom')


set2.add('obayori')
set2.add('daniel')
set2.add('ella')

set1.difference(set2) // Set { 'rasheed', 'shalom' }
set1.instersection(set2) // Set { 'daniel' }
set1.symmetricDifference(set2) // Set { 'rasheed', 'shalom', 'obayori', 'ella' }
set1.union(set2) // Set { 'daniel', 'rasheed', 'shalom', 'obayori', 'ella' }

set1.subset(set2) // false
set2.superSet(set1) // true


