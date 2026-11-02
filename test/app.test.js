const test = require('node:test');
const assert = require('node:assert');

test('Application message should be correct', () => {
    const message = 'Hello! CI/CD Pipeline is Running Successfully.';
    assert.strictEqual(message, 'Hello! CI/CD Pipeline is Running Successfully.');
});