import fetchData from '../fetchDataCallBacks';
// Don't do this!
test('the data is peanut butter', () => {
  function callback(data) {
    expect(data).toBe('peanut butter');
  }

  fetchData(callback);
});

test('the data is peanut butter', async done => {
  function callback(data) {
    try {      
      expect(data).toBe('peanut butter');
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchData(callback);
}, 30000);
