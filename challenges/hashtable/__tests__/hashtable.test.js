'use strict';

const test = require('../hashtable.js');

describe('testing the instantiating of a proper hash table', () => {
  const table = new test.HashTable(1024);

  it('should be able to add a key/value to your hashtable which results in that value being in the data structure', () => {
    table.add('Jason', 'boomshackalacka');
    expect(table.contains('Jason')).toEqual(true);
  });

  it('should retrieve the correct value based on a key', () => {
    expect(table.get('Jason')).toEqual('boomshackalacka');
  });

  it('should successfully return null for a key that does not exist in the hashtable', () => {
    expect(table.contains('Mom')).toEqual(false);
  });

  it('should successfully handle a collision within the hashtable', () =>{
    table.add('asJon', 'banana');

    expect(table.get('Jason')).toEqual('boomshackalacka');
    expect(table.get('asJon')).toEqual('banana');
  });

  it('should successfully retrieve a value from a bucket within the hashtable that has a collision', () =>{
    table.add('Jonas', 'Guatemala');

    expect(table.get('Jason')).toEqual('boomshackalacka');
    expect(table.get('asJon')).toEqual('banana');
    expect(table.get('Jonas')).toEqual('Guatemala');
  });

  it('should successfully hash a key to an in-range value', () =>{
    expect(table._hash('nasoJ')).toEqual(589);
  });
});